[![Netlify Status](https://api.netlify.com/api/v1/badges/6da9f170-4976-4d7b-81ea-519de6d1a4d3/deploy-status)](https://app.netlify.com/projects/wondrous-squirrel-2b057b/deploys)

Run `npm install`, then `npm run dev` for local development or `npm run build` for a production build.

Run `npm run check:routes` to check project and team detail rendering, optional project lists, and invalid URLs. Unknown URLs show a not-found page. Page rendering errors are contained so the navigation remains available and changing routes recovers the page. The Netlify redirect in `public/_redirects` supports direct loads and refreshes on nested routes.

### Outreach workshops

The `/outreach` page uses `outreachPage` in `src/data/siteContent.js`. Edit `hero` to change the title, subtitle, or background image. Each item in `workshops` has a unique `id`, `title`, preview `image`, `imageAlt`, and `description` (an array of paragraphs). Optional `summary`, `event`, and `date` fields appear on its card.

Cards automatically link to `/outreach/:id` in the same tab. For example, the `icat` workshop opens at `/outreach/icat`. Add your workshop text to its `description` array; each entry displays as a separate paragraph. The detail page shows the title over a Vancouver hero, then the workshop graphic above the description without a sidebar. Optional `registration` (`text`, `label`, and `href`) adds a registration link. No presentation file or `href` is needed.

### Bio highlights

In a team member's `experience` array, use `projectId` for a project on the website; its title will automatically match the Projects page. Use `project` for a standalone title when the project is not listed on the website:

```js
experience: [
    { projectId: 'st-pauls', description: 'Contribution to the listed project.' },
    { project: 'Independent Project Name', description: 'Contribution to this project.' }
]
```

Standalone highlights appear only on the bio page. If both fields are supplied, a matching website project's title takes precedence; `project` also acts as a fallback if that project is later removed. Empty descriptions are omitted from the display.

### Project categories

Each project has a `categories` array containing one or more IDs: `infrastructure`, `digital`, or `advisory`. Their display labels are defined in `projectCategories` in `src/data/siteContent.js`. For example, `categories: ['infrastructure', 'digital']` includes a project in both filters. Filters use URLs such as `/projects?category=digital`, so they survive refreshes and browser Back/Forward. Categories appear as plain text on detail pages; returning from a filtered project card preserves that filter. Unknown category values show all projects. The project export includes category assignments as readable labels and exports their shared display labels separately.

### Project methodology stages

Each project in `src/data/siteContent.js` has a `methodologyStages` array. Add the IDs `vision`, `roadmap`, `implement`, `realize`, and/or `celebrate` to highlight J in Motion's participation. Omitted stages appear grey in the compact list in the project sidebar. For example, `methodologyStages: ['vision', 'roadmap', 'implement', 'realize']` highlights every stage except Celebrate. St. Paul's uses this configuration; other projects start with empty arrays awaiting participation details. The project export includes these settings as a comma-separated list of stage titles, including an empty row when no stages are highlighted.

### Exporting project content

Run `npm run export:projects` (or the existing `npm run export:content`) to create `exports/project-content.xlsx`. Open it in Excel or upload it to Google Sheets. The workbook includes a Read me sheet and a filterable Content sheet with yellow Updated text cells. Supply a different destination with `npm run export:projects -- /path/to/projects.xlsx`. Pass a `.csv` filename instead to use the optional CSV format. The old `exports/site-content.csv` is preserved.

The export covers the Projects listing title, subtitle and image description, shared category labels, and each project's title, summary, client, city, country, opening year, categories, highlighted methodology stages, description paragraphs, features, and highlights. Empty optional fields are included so editors can supply missing information. Routing IDs, image paths, obsolete location fields, and copy from other pages are excluded.

Editors should enter replacements in **Updated text** and use **Notes** for questions, deletions, additions, or reordering. Leave **Project ID**, **Reference**, and **Current text** unchanged. Each project attribute has one row, including arrays. Full descriptions use blank lines between paragraphs inside one cell; features and highlights use one entry per line inside one cell. Use Excel’s in-cell line break shortcut when editing. Categories and methodology stages use comma-separated labels; their allowed values are listed in Notes. A blank Updated text cell means no change; request clearing a value or all highlighted stages in Notes.

Return the edited workbook to the site maintainer, who applies approved changes to the matching references in `src/data/siteContent.js`, translating category and stage labels back to their IDs. The Project ID column identifies each project even if the array order changes; regenerate the export after reordering because references use array indices. Spreadsheet edits do not automatically update the website. Shared project text also appears on homepage cards; the export does not duplicate or export homepage-specific copy.

Excel export uses the installed Codex workspace spreadsheet runtime and does not add dependencies to the website. On another machine, set `PROJECT_EXPORT_RUNTIME` to the Codex Node runtime directory if it cannot be found automatically. CSV export uses Node alone.

Check the exporter with `node --test scripts/export-content.test.mjs`. Run `npm run build` after applying site changes. Community content and comments are unaffected by the exporter.
