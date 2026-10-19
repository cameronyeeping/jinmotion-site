import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import { getContentRows, headers, toCsv } from './export-content.mjs';
import { projects, projectCategories, homePage } from '../src/data/siteContent.js';

test('exports only project-page references with unique, traceable rows', () => {
    const rows = getContentRows();
    assert.ok(rows.length);
    assert.equal(new Set(rows.map((row) => row[3])).size, rows.length);
    for (const row of rows) {
        assert.equal(row.length, headers.length);
        assert.match(row[3], /^(projects\[\d+\]\.|projectsPage\.hero\.|projectCategories\[\d+\]\.label$)/);
        assert.doesNotMatch(row[3], /\.(image|galleryImages|location|id|bgImage)(\[|$)/);
        assert.doesNotMatch(row[3], /\.(long_description|features|scopeElements)\[/);
        assert.equal(row[5], '');
    }
    assert.equal(rows.filter((row) => row[0] === 'Projects page').length, 3);
    assert.equal(rows.filter((row) => row[0] === 'Project categories').length, projectCategories.length);
});

test('includes optional fields, readable settings, and every paragraph and sidebar item', () => {
    const rows = getContentRows();
    projects.forEach((project, index) => {
        const reference = `projects[${index}]`;
        const find = (field) => rows.find((row) => row[3] === `${reference}.${field}`);
        for (const field of ['title', 'short_description', 'client', 'city', 'country', 'year']) {
            assert.equal(find(field)[4], project[field] ?? '');
            assert.equal(find(field)[1], project.id);
        }
        assert.equal(find('categories')[4], project.categories.map((id) => projectCategories.find((category) => category.id === id).label).join(', '));
        assert.equal(find('methodologyStages')[4], project.methodologyStages.map((id) => homePage.methodology.steps.find((step) => step.id === id).title).join(', '));
        for (const field of ['long_description', 'features', 'scopeElements']) {
            const separator = field === 'long_description' ? '\n\n' : '\n';
            const matchingRows = rows.filter((row) => row[3] === `${reference}.${field}`);
            assert.equal(matchingRows.length, 1);
            assert.equal(find(field)[4], project[field].join(separator));
            assert.deepEqual(find(field)[4] ? find(field)[4].split(separator) : [], project[field]);
        }
    });
});

test('quotes commas, embedded quotes, and multiline text without altering content', () => {
    const csv = toCsv([['Projects', 'sample', 'Sample', 'projects[0].title', 'A "quoted", multiline\nvalue', '', '']]);
    assert.ok(csv.startsWith('\uFEFF'));
    assert.ok(csv.includes('"A ""quoted"", multiline\nvalue"'));
    assert.ok(csv.endsWith('\r\n'));
});

test('CLI writes the same project export to a custom destination', async () => {
    const directory = await mkdtemp(join(tmpdir(), 'jinmotion-export-'));
    try {
        const output = join(directory, 'nested', 'projects.csv');
        execFileSync(process.execPath, [fileURLToPath(new URL('./export-content.mjs', import.meta.url)), output]);
        assert.equal(await readFile(output, 'utf8'), toCsv(getContentRows()));
    } finally {
        await rm(directory, { recursive: true, force: true });
    }
});

test('Excel workbook preserves all project text and blank update cells', async () => {
    const { createProjectWorkbook } = await import('./project-workbook.mjs');
    const rows = getContentRows();
    const { workbook } = await createProjectWorkbook(headers, rows);
    const sheet = workbook.worksheets.getItem('Content');
    assert.deepEqual(sheet.getRange(`A1:G${rows.length + 1}`).values, [headers, ...rows]);
    assert.equal(sheet.tables.items[0].name, 'ProjectContent');
    assert.equal(workbook.worksheets.getItem('Read me').getRange('A1').values[0][0], 'J in Motion project content');
});
