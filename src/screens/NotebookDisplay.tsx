import React, { useState } from 'react';

import TabBar from "../components/notebookDisplay/TabBar";
import Notebook from "src/entities/Notebook";

interface NotebookDisplayProps {
    openNotebooks: Notebook[];
    closeNotebook: (index: number) => void;
    openNotebook: (nb: Notebook) => void;
    activeNotebook: number;
    setActiveNotebook: (index: number) => void;
}

const NotebookDisplay = ( { openNotebooks, closeNotebook, openNotebook, activeNotebook, setActiveNotebook }: NotebookDisplayProps ) => {
    return (
        <div className="h-screen w-full flex flex-col">
            <TabBar 
                openNotebooks={openNotebooks}
                activeNotebook={activeNotebook}
                setActiveNotebook={setActiveNotebook}
                closeNotebook={closeNotebook}
                openNotebook={openNotebook}
            />

            <div className="flex-grow bg-gray-100 p-4">
                <div className="notebook-content">
                    <p>Notebook content goes here.</p>
                </div>
            </div>
        </div> 
    )
};

export default NotebookDisplay;