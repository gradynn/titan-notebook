import Notebook, { Cell } from "src/entities/Notebook";

class NotebookFactory {
    static createNotebookFromJson(data: Object, path: string): Notebook {
        const notebook: Notebook = {
            filepath: path,
            name: null,
            cells: []
        };

        const cells = Array.isArray((data as any)?.cells) ? (data as any).cells : [];
        cells.map((cell: any) => {
            const cellObj: Cell = {
                source: cell?.source ?? [],
                cellType: cell.cell_type ?? 'code',
                executionCount: cell?.execution_count ?? 0,
            }
            notebook.cells.push(cellObj)
        })

        return notebook;      
    };

    static createBlankNotebook(name: string): Notebook {
        const notebook: Notebook = {
            filepath: null,
            name: name,
            cells: [],
        };

        return notebook;
    };
}

export default NotebookFactory;