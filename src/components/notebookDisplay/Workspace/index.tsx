import React from 'react';

import Notebook from 'src/entities/Notebook';
import Toolbar from './Toolbar';

interface WorkSpaceProps {
    activeNotebookContents: Notebook;
}

const WorkSpace = ( { activeNotebookContents }: WorkSpaceProps) => {
    const notebookName = activeNotebookContents.name != null ? 
        activeNotebookContents.name : 
        'Untitled' ;
    
    return (
        <div className="">
            <Toolbar notebookTitle={notebookName} />
        </div>
    );
};

export default WorkSpace;