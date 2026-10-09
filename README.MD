[![Netlify Status](https://api.netlify.com/api/v1/badges/6da9f170-4976-4d7b-81ea-519de6d1a4d3/deploy-status)](https://app.netlify.com/projects/wondrous-squirrel-2b057b/deploys)

Run `npm install`, then `npm run dev` for local development or `npm run build` for a production build.

Run `npm run check:routes` to check project and team detail rendering, optional project lists, and invalid URLs. Unknown URLs show a not-found page. Page rendering errors are contained so the navigation remains available and changing routes recovers the page. The Netlify redirect in `public/_redirects` supports direct loads and refreshes on nested routes.

### Project methodology stages

Each project in `src/data/siteContent.js` has a `methodologyStages` array. Add the IDs `vision`, `roadmap`, `implement`, `realize`, and/or `celebrate` to highlight J in Motion's participation. Omitted stages appear grey in the compact list in the project sidebar. For example, `methodologyStages: ['vision', 'roadmap', 'implement', 'realize']` highlights every stage except Celebrate. St. Paul's uses this configuration; other projects start with empty arrays awaiting participation details. These settings are excluded from the text spreadsheet export.

### Editing site text

The site content lives in `src/data/siteContent.js`. Run `npm run export:content` to refresh `exports/site-content.csv`, which opens in Excel or Google Sheets. You can supply a different destination with `npm run export:content -- /path/to/content.csv`.

Editors should put replacements in **Updated text** and questions or deletion requests in **Notes**, leaving **Reference** and **Current text** unchanged. Each paragraph or list item has its own row. Shared project content is exported once and affects both the home and project pages. Image paths, routing identifiers, and icon settings are excluded; image descriptions and contact links are included.

Return the edited spreadsheet to the site maintainer, who applies the approved changes to the matching references in the content file and runs `npm run build`. Spreadsheet edits do not automatically update the website. Regenerate the export after changes because list indices may move.

The **Community draft** rows are retained draft copy and do not appear on the current community page. That page currently contains its own text and preserved commented sections in `src/pages/CommunityPage.jsx`. Text hardcoded in other components and pages is outside this content-file export.
