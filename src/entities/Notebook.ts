export default interface Notebook {
    nbformat: number;
    nbformat_minor: number;
    metadata: {
        notebook_name: string;
        authors: { name: string }[];
        kernelspec: KernelSpec;
    },
    cells: Cell[];
}

export interface KernelSpec {
    display_name: string;
    name: string;
}

export interface Cell {
    metadata: {
        id: string;
    }
    cell_type: 'markdown' | 'code';
    source: string[];
    execution_count: number | null;
    outputs?: Output[]
}

export interface Output {
    output_type: 'stream' | 'display_data' | 'execute_result' | 'error';
}