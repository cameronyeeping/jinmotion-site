import { createRequire } from 'node:module';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

export async function loadSpreadsheetTools() {
    try {
        return await import('@oai/artifact-tool');
    } catch (error) {
        if (error.code !== 'ERR_MODULE_NOT_FOUND') throw error;
        // Use the installed Codex workspace runtime without adding website dependencies.
        const runtime = process.env.PROJECT_EXPORT_RUNTIME || join(homedir(), '.cache/codex-runtimes/codex-primary-runtime/dependencies/node');
        try {
            const require = createRequire(join(runtime, 'package.json'));
            return await import(pathToFileURL(require.resolve('@oai/artifact-tool')).href);
        } catch (cause) {
            throw new Error('Excel export requires the Codex workspace spreadsheet runtime. Set PROJECT_EXPORT_RUNTIME to its Node runtime directory, or export a .csv file instead.', { cause });
        }
    }
}

export async function createProjectWorkbook(headers, rows) {
    const { Workbook, SpreadsheetFile } = await loadSpreadsheetTools();
    const workbook = Workbook.create();
    const guide = workbook.worksheets.add('Read me');
    const guidance = [
        ['J in Motion project content'],
        ['Edit the yellow Updated text cells on the Content sheet.'],
        ['Leave Project ID, Reference, and Current text unchanged. Use the column filters to focus on one project.'],
        ['A blank Updated text cell means no change. Use Notes for deletions, additions, or reordering.'],
        ['Categories and highlighted methodology stages use comma-separated labels. Allowed values appear in Notes.'],
        ['Omitted methodology stages appear grey. Use Notes to request clearing all highlighted stages.'],
        ['Each project attribute has one row. Separate description paragraphs with blank lines inside the cell.'],
        ['Put each feature or highlight on a new line inside its cell. In Excel, use Alt+Enter on Windows or Control+Option+Return on Mac.'],
        ['Missing city and year fields can be filled in.'],
        ['Return the edited workbook to the site maintainer. Workbook edits do not automatically update the website.'],
        ['This export includes project listing and detail content. Shared project text also appears on homepage cards.'],
    ];
    guide.showGridLines = false;
    guide.getRange(`A1:A${guidance.length}`).values = guidance;
    guide.getRange(`A1:A${guidance.length}`).format = {
        font: { name: 'Arial', size: 11 }, columnWidth: 110, rowHeight: 44, wrapText: true, verticalAlignment: 'center',
    };
    guide.getRange('A1').format.font = { name: 'Arial', size: 16, bold: true };

    const sheet = workbook.worksheets.add('Content');
    const lastRow = rows.length + 1;
    const widths = [21, 29, 37, 49, 110, 110, 55];
    sheet.showGridLines = false;
    sheet.getRange(`A1:G${lastRow}`).values = [headers, ...rows];
    sheet.getRange(`A1:G${lastRow}`).format = {
        font: { name: 'Arial', size: 11 }, wrapText: true, verticalAlignment: 'top', numberFormat: '@',
    };
    widths.forEach((width, index) => {
        const column = String.fromCharCode(65 + index);
        sheet.getRange(`${column}1:${column}${lastRow}`).format.columnWidth = width;
    });
    sheet.tables.add(`A1:G${lastRow}`, true, 'ProjectContent');
    sheet.getRange('A1:G1').format = { fill: '#263E33', font: { name: 'Arial', size: 11, bold: true, color: '#FFFFFF' }, rowHeight: 30 };
    sheet.getRange(`F2:F${lastRow}`).format.fill = '#FFF3CC';
    rows.forEach((row, index) => {
        const lines = Math.max(...row.map((value, column) => String(value).split('\n').reduce((count, line) => count + Math.max(1, Math.ceil(line.length / (widths[column] * 0.85))), 0)));
        sheet.getRange(`A${index + 2}:G${index + 2}`).format.rowHeight = Math.max(36, lines * 17 + 12);
    });
    sheet.freezePanes.freezeRows(1);
    return { workbook, SpreadsheetFile };
}
