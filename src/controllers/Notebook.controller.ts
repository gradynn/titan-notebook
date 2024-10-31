import fs from 'fs';
import path from 'path';

import Notebook from "src/entities/Notebook";
import NotebookFactory from "../factories/Notebook.factory";

export const createBlankNotebook = (name: string): Notebook => {
    const notebook = NotebookFactory.createBlankNotebook(name);
    return notebook;
};

export const openNotebookFromFile = async (filePath: string): Promise<Notebook | null> => {
    try {
        const data = await window.electron.openNotebookFile(filePath);
        const notebook = NotebookFactory.createNotebookFromJson(data, filePath);
        return notebook;
    } catch (error) {
        console.error("Error reading JSON file:", error);
        return null;
    }
};