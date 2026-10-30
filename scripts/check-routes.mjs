import assert from 'node:assert/strict';
import { access } from 'node:fs/promises';
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
  const { default: OutreachPage } = await server.ssrLoadModule('/src/pages/OutreachPage.jsx');
  const { default: WorkshopDetailPage } = await server.ssrLoadModule('/src/pages/WorkshopDetailPage.jsx');
  const { projects, projectCategories, getProjectsByCategory, aboutPage, getProjectData, getTeamMember, outreachPage, navLinks } = await server.ssrLoadModule('/src/data/siteContent.js');
  const render = (url) => renderToString(createElement(StaticRouter, { location: url },
    createElement(Routes, null,
      createElement(Route, { path: '/projects', element: createElement(ProjectsPage) }),
      createElement(Route, { path: '/projects/:id', element: createElement(ProjectPage) }),
      createElement(Route, { path: '/team/:id', element: createElement(BioPage) }),
      createElement(Route, { path: '/bio/:id', element: createElement(BioPage) }),
      createElement(Route, { path: '/outreach/:id', element: createElement(WorkshopDetailPage) }),
      createElement(Route, { path: '/outreach', element: createElement(OutreachPage) }),
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
  for (const { id: category } of projectCategories) {
    const expected = projects.filter((project) => project.categories.includes(category)).map((project) => project.id);
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
    const html = render(`/team/${member.id}`);
    assert.ok(html.includes(member.name));
    assert.ok(render(`/bio/${member.id}`).includes(member.name));
    for (const entry of member.experience || []) {
      const title = getProjectData(entry.projectId)?.title || entry.project;
      assert.ok(title, `${member.id}: highlight needs a website projectId or standalone project name`);
      assert.ok(html.includes(renderToString(createElement('h3', null, title))));
    }
  }
  // Standalone highlights never need entries in the public projects collection.
  const member = aboutPage.team.members[0];
  const originalExperience = member.experience;
  try {
    member.experience = [
      { project: 'Independent "Prototype"', description: 'Standalone contribution.' },
      { projectId: 'st-pauls', project: 'Fallback title', description: 'Linked contribution.' },
      { projectId: 'unlisted-project', project: 'Unlisted Project', description: '' },
      {},
    ];
    const html = render(`/team/${member.id}`);
    assert.ok(html.includes(renderToString(createElement('h3', null, 'Independent "Prototype"'))));
    assert.ok(html.includes('<p>Standalone contribution.</p>'));
    assert.ok(html.includes(renderToString(createElement('h3', null, getProjectData('st-pauls').title))));
    assert.ok(!html.includes('Fallback title'));
    assert.ok(html.includes('<h3>Unlisted Project</h3>'));
    assert.ok(!html.includes('<h3></h3>') && !html.includes('<p></p>'));
    assert.equal(getProjectData('unlisted-project'), undefined);
  } finally {
    member.experience = originalExperience;
  }
  for (const id of ['missing', 'constructor', '__proto__', undefined]) {
    assert.equal(getProjectData(id), undefined);
    assert.equal(getTeamMember(id), undefined);
  }
  const renderOutreach = (url) => render(url).replace(/<!--.*?-->/g, '');
  const outreachHtml = renderOutreach('/outreach');
  assert.ok(navLinks.some(({ to }) => to === '/outreach'));
  assert.ok(outreachHtml.includes('class="hero-title">Outreach</h1>'));
  assert.ok(!outreachHtml.includes('Featured resource'));
  assert.ok(!outreachHtml.includes('type="search"'));
  assert.equal(new Set(outreachPage.workshops.map(({ id }) => id)).size, outreachPage.workshops.length);
  for (const workshop of outreachPage.workshops) {
    await access(`public${workshop.image}`);
    const url = `/outreach/${encodeURIComponent(workshop.id)}`;
    assert.ok(outreachHtml.includes(`href="${url}"`));
    const detailHtml = render(url);
    assert.ok(detailHtml.includes(renderToString(createElement('h1', null, workshop.title))));
    assert.ok(detailHtml.includes('Back to Outreach'));
    assert.ok(!detailHtml.includes('<aside'));
    assert.ok(!detailHtml.includes('Featured Project'));
    assert.ok(!detailHtml.includes('linkedin.com'));
    const contentHtml = detailHtml.slice(detailHtml.indexOf('class="workshop-description"'));
    assert.ok(contentHtml.indexOf('class="workshop-event-image"') < contentHtml.indexOf('<p>'));
    if (workshop.registration?.href) assert.ok(detailHtml.includes(`href="${workshop.registration.href}"`));
    const paragraphs = Array.isArray(workshop.description) ? workshop.description : [workshop.description];
    for (const paragraph of paragraphs.filter(Boolean)) assert.ok(detailHtml.includes(paragraph));
  }
  assert.ok(!outreachHtml.includes('target="_blank"'));
  for (const id of ['missing', 'constructor', '__proto__']) {
    assert.ok(render(`/outreach/${id}`).includes('Workshop not found'));
  }
  assert.ok(render('/projects/missing').includes('Project not found'));
  assert.ok(render('/team/missing').includes('Team member not found'));
  assert.ok(render('/bio/missing').includes('Team member not found'));
  assert.ok(render('/unknown/path').includes('Page not found'));
  console.log('Route render checks passed for all projects, team profiles, invalid URLs, and optional lists.');
} finally {
  await server.close();
}
