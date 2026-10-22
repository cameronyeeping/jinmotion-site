import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, extname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { projects, projectsPage, projectCategories, homePage } from '../src/data/siteContent.js';

export const headers = ['Page', 'Project ID', 'Item', 'Reference', 'Current text', 'Updated text', 'Notes'];

// Explicit fields keep unrelated pages, routing IDs, and image paths out of the handoff.
const textFields = {
    title: 'Project title',
    short_description: 'Short description shown on project cards and the detail page',
    client: 'Client name',
    city: 'City or region; displayed together with country beneath the client',
    country: 'Country; displayed together with city beneath the client',
    year: 'Opening year; leave unspecified if unknown',
};
const listFields = {
    long_description: { separator: '\n\n', notes: 'Full description. Separate paragraphs with a blank line inside this cell.' },
    features: { separator: '\n', notes: 'Project features. Put each feature on its own line inside this cell.' },
    scopeElements: { separator: '\n', notes: 'Highlights. Put each highlight on its own line inside this cell.' },
};

export function getContentRows() {
    const rows = [];
    const add = (page, projectId, item, reference, value, notes) => {
        rows.push([page, projectId, item, reference, value ?? '', '', notes]);
    };

    for (const field of ['title', 'subtitle', 'bgAlt']) {
        add('Projects page', '', 'Project listing', `projectsPage.hero.${field}`, projectsPage.hero[field],
            field === 'bgAlt' ? 'Hero image description' : `Listing ${field}`);
    }
    projectCategories.forEach((category, index) => {
        add('Project categories', '', category.label, `projectCategories[${index}].label`, category.label,
            `Display label for category ID "${category.id}". Used in filters, cards, and detail pages.`);
    });

    const categoryLabels = new Map(projectCategories.map(({ id, label }) => [id, label]));
    const stages = homePage.methodology.steps;
    const stageLabels = new Map(stages.map(({ id, title }) => [id, title]));
    projects.forEach((project, index) => {
        const reference = `projects[${index}]`;
        const addProjectRow = (field, value, notes) => add('Projects', project.id, project.title, `${reference}.${field}`, value, notes);

        for (const [field, notes] of Object.entries(textFields)) {
            addProjectRow(field, project[field], notes);
        }
        addProjectRow('categories', project.categories.map((id) => categoryLabels.get(id) || id).join(', '),
            `Comma-separated categories. Choose one or more: ${projectCategories.map(({ label }) => label).join(', ')}. Maintainer maps labels to category IDs.`);
        addProjectRow('methodologyStages', (project.methodologyStages || []).map((id) => stageLabels.get(id) || id).join(', '),
            `Comma-separated highlighted stages: ${stages.map(({ title }) => title).join(', ')}. Omitted stages appear grey. Use Notes to request clearing all stages. Maintainer maps titles to stage IDs.`);

        for (const [field, { separator, notes }] of Object.entries(listFields)) {
            const entries = project[field] || [];
            addProjectRow(field, entries.join(separator), `${notes} Use Notes to request clearing the entire list.`);
        }
    });
    return rows;
}

export function toCsv(rows) {
    const quote = (value) => `"${String(value).replaceAll('"', '""')}"`;
    return '\uFEFF' + [headers, ...rows].map((row) => row.map(quote).join(',')).join('\r\n') + '\r\n';
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
    const output = resolve(process.argv[2] || 'exports/project-content.xlsx');
    const extension = extname(output).toLowerCase();
    if (!['.xlsx', '.csv'].includes(extension)) throw new Error('Choose an output filename ending in .xlsx or .csv.');
    const rows = getContentRows();
    await mkdir(dirname(output), { recursive: true });
    if (extension === '.csv') {
        await writeFile(output, toCsv(rows));
    } else {
        const { createProjectWorkbook } = await import('./project-workbook.mjs');
        const { workbook, SpreadsheetFile } = await createProjectWorkbook(headers, rows);
        const xlsx = await SpreadsheetFile.exportXlsx(workbook);
        await xlsx.save(output);
    }
    console.log(`Exported ${rows.length} project fields from ${projects.length} projects to ${output}`);
}
