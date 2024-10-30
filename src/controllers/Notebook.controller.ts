import Notebook from "src/entities/Notebook";

export const createBlankNotebook = (name: string): Notebook => {
    const notebook: Notebook = {
        nbformat: 4,
        nbformat_minor: 5,
        metadata: {
            notebook_name: name,
            authors: [],
            kernelspec: {
                name: "python3",
                display_name: "Python 3" 
            }
        },
        cells: [],
    };
    
    return notebook;
};