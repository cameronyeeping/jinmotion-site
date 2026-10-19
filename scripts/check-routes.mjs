import assert from 'node:assert/strict';
import { createServer } from 'vite';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { Routes, Route } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server.js';

const server = await createServer({ server: { middlewareMode: true, hmr: false }, appType: 'custom' });
try {
  const { default: ProjectPage } = await server.ssrLoadModule('/src/pages/ProjectDetailPage.jsx');
  const { default: ProjectsPage } = await server.ssrLoadModule('/src/pages/ProjectsPage.jsx');
  const { default: BioPage } = await server.ssrLoadModule('/src/pages/BioPage.jsx');
  const { default: NotFoundPage } = await server.ssrLoadModule('/src/pages/NotFoundPage.jsx');
  const { projects, projectCategories, getProjectsByCategory, aboutPage, getProjectData, getTeamMember } = await server.ssrLoadModule('/src/data/siteContent.js');
  const render = (url) => renderToString(createElement(StaticRouter, { location: url },
    createElement(Routes, null,
      createElement(Route, { path: '/projects', element: createElement(ProjectsPage) }),
      createElement(Route, { path: '/projects/:id', element: createElement(ProjectPage) }),
      createElement(Route, { path: '/team/:id', element: createElement(BioPage) }),
      createElement(Route, { path: '/bio/:id', element: createElement(BioPage) }),
      createElement(Route, { path: '*', element: createElement(NotFoundPage) }),
    )));

  for (const project of projects) {
    const html = render(`/projects/${project.id}`);
    assert.ok(html.includes('Back to Projects'), project.id);
    assert.equal(html.includes('Project Features'), !!project.features?.length, project.id);
    assert.equal(html.includes('Highlights'), !!project.scopeElements?.length, project.id);
    assert.ok(project.categories.length > 0, project.id);
    for (const categoryId of project.categories) {
      assert.ok(projectCategories.some((category) => category.id === categoryId), `${project.id}: invalid category`);
      assert.ok(html.includes(projectCategories.find((category) => category.id === categoryId).label));
    }
  }
  const expectedByCategory = {
    infrastructure: ['st-pauls', 'dawson-creek', 'bc-childrens', 'stanton'],
    digital: ['st-pauls', 'bc-hydro-it-governance'],
    advisory: ['st-pauls', 'bc-childrens', 'stanton', 'bc-cancer', 'surrey', 'bc-hydro-it-governance'],
  };
  for (const [category, expected] of Object.entries(expectedByCategory)) {
    assert.deepEqual(getProjectsByCategory(category).map((project) => project.id), expected);
    const html = render(`/projects?category=${category}`);
    for (const project of projects) {
      assert.equal(html.includes(`href="/projects/${project.id}?category=${category}"`), expected.includes(project.id), `${category}: ${project.id}`);
    }
    assert.ok(html.includes(`aria-pressed="true">${projectCategories.find((item) => item.id === category).label}</button>`));
  }
  for (const category of ['', 'missing', 'constructor']) {
    const html = render(`/projects?category=${category}`);
    assert.equal(getProjectsByCategory(category).length, projects.length);
    for (const project of projects) assert.ok(html.includes(`href="/projects/${project.id}"`));
  }
  const filteredDetail = render('/projects/st-pauls?category=digital');
  assert.equal((filteredDetail.match(/href="\/projects\?category=digital"/g) || []).length, 2);
  assert.ok(filteredDetail.includes('<li>Infrastructure</li><li>Digital</li><li>Advisory</li>'));
  assert.ok(filteredDetail.includes('<li>Providence Health Care</li><li>Vancouver, Canada</li>'));
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
