import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as content from '../src/data/siteContent.js';

// Shared projects appear on several pages; export their canonical rows once.
export function getContentRows() {
    const rows = [];
    const seen = new WeakSet();
    const technicalFields = new Set(['id', 'to', 'icon', 'image', 'logo', 'bgImage', 'profilePdf', 'galleryImages', 'methodologyStages']);
    const groups = {
        siteMeta: 'Site', navLinks: 'Navigation', connectLinks: 'Contact links',
        ctaBanner: 'Contact banner', projects: 'Projects', homePage: 'Home',
        aboutPage: 'About and team', projectsPage: 'Projects page',
        servicesPage: 'Services', communityPage: 'Community draft',
    };
    function visit(value, path, page, item = '') {
        if (typeof value === 'string') {
            rows.push([page, item, path, value, '', page === 'Community draft' ? 'Draft; not displayed by the current community page.' : '']);
        } else if (value && typeof value === 'object' && !seen.has(value)) {
            seen.add(value);
            const label = value.name || value.title || value.label || item;
            for (const [key, child] of Object.entries(value)) {
                if (!technicalFields.has(key)) visit(child, Array.isArray(value) ? `${path}[${key}]` : `${path}.${key}`, page, label);
            }
        }
    }
    for (const [key, page] of Object.entries(groups)) visit(content[key], key, page);
    return rows;
}

export const headers = ['Page', 'Item', 'Reference', 'Current text', 'Updated text', 'Notes'];

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
    const output = resolve(process.argv[2] || 'exports/site-content.csv');
    const rows = getContentRows();
    const quote = (value) => `"${String(value).replaceAll('"', '""')}"`;
    const csv = [headers, ...rows].map((row) => row.map(quote).join(',')).join('\r\n');
    await mkdir(resolve(output, '..'), { recursive: true });
    await writeFile(output, '\uFEFF' + csv + '\r\n');
    console.log(`Exported ${rows.length} text fields to ${output}`);
}
