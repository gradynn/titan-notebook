import React, { useState } from 'react';

import TabBar from "../components/notebookDisplay/TabBar";
import Notebook from "src/entities/Notebook";
import WorkSpace from '../components/notebookDisplay/Workspace';

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

            <div className="flex-grow">
                <WorkSpace activeNotebookContents={openNotebooks[activeNotebook]} />
            </div>
        </div> 
    )
};

export default NotebookDisplay;