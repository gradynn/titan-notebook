export default interface Notebook {
    filepath: string,
    name: string,
    cells: Cell[];
}

export interface Cell {
    cellType: 'markdown' | 'code';
    source: string[];
    executionCount: number | null;
    outputs?: Output[]
}

export interface Output {
    outputType: 'stream' | 'display_data' | 'execute_result' | 'error';
}