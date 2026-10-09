import assert from 'node:assert/strict';
import { createServer } from 'vite';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { Routes, Route } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server.js';

const server = await createServer({ server: { middlewareMode: true, hmr: false }, appType: 'custom' });
try {
  const { default: ProjectPage } = await server.ssrLoadModule('/src/pages/ProjectDetailPage.jsx');
  const { default: BioPage } = await server.ssrLoadModule('/src/pages/BioPage.jsx');
  const { default: NotFoundPage } = await server.ssrLoadModule('/src/pages/NotFoundPage.jsx');
  const { projects, aboutPage, getProjectData, getTeamMember } = await server.ssrLoadModule('/src/data/siteContent.js');
  const render = (url) => renderToString(createElement(StaticRouter, { location: url },
    createElement(Routes, null,
      createElement(Route, { path: '/projects/:id', element: createElement(ProjectPage) }),
      createElement(Route, { path: '/team/:id', element: createElement(BioPage) }),
      createElement(Route, { path: '/bio/:id', element: createElement(BioPage) }),
      createElement(Route, { path: '*', element: createElement(NotFoundPage) }),
    )));

  for (const project of projects) {
    const html = render(`/projects/${project.id}`);
    assert.ok(html.includes('Back to Projects'), project.id);
    assert.equal(html.includes('Project Features'), !!project.features?.length, project.id);
    assert.equal(html.includes('Key Scope Elements'), !!project.scopeElements?.length, project.id);
  }
  // Malformed optional lists must not crash the page either.
  const project = projects[1];
  const saved = { features: project.features, scopeElements: project.scopeElements, galleryImages: project.galleryImages };
  try {
    Object.assign(project, { features: 'invalid', scopeElements: null, galleryImages: 'invalid' });
    assert.ok(render(`/projects/${project.id}`).includes('Back to Projects'));
  } finally {
    Object.assign(project, saved);
  }
  for (const member of aboutPage.team.members) {
    assert.ok(render(`/team/${member.id}`).includes(member.name));
    assert.ok(render(`/bio/${member.id}`).includes(member.name));
  }
  for (const id of ['missing', 'constructor', '__proto__', undefined]) {
    assert.equal(getProjectData(id), undefined);
    assert.equal(getTeamMember(id), undefined);
  }
  assert.ok(render('/projects/missing').includes('Project not found'));
  assert.ok(render('/team/missing').includes('Team member not found'));
  assert.ok(render('/bio/missing').includes('Team member not found'));
  assert.ok(render('/unknown/path').includes('Page not found'));
  console.log('Route render checks passed for all projects, team profiles, invalid URLs, and optional lists.');
} finally {
  await server.close();
}
