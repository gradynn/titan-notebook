import React, { useState } from 'react';
import { Bars } from 'react-loading-icons';

import Notebook from 'src/entities/Notebook';
import PrimaryButton from '../../buttons/PrimaryButton';
import FileSelector from './FileSelector';
import DangerButton from '../../buttons/DangerButton';
import { openNotebookFromFile } from '../../../controllers/Notebook.controller';

interface OpenNotebookModalProps {
    setShowOpenNotebookModal: React.Dispatch<React.SetStateAction<boolean>>;
    openNotebook: (nb: Notebook) => void;
}

const OpenNotebookModal = ( { setShowOpenNotebookModal, openNotebook }: OpenNotebookModalProps ) => {
    const [notebookPath, setNotebookPath] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false); 
    
    const handleBackgroundClick = () => {
        setShowOpenNotebookModal(false);
    };

    const handleModalClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    }

    const handleFileSelect = () => {
        openNotebookFromFile(notebookPath).then((notebook: Notebook) => {
            openNotebook(notebook);
            console.log(notebook);
            setShowOpenNotebookModal(false);
        });
        setLoading(true);
    };
    
    return (
        <div 
            className="fixed inset-0 bg-background bg-opacity-90 flex items-center justify-center"
            onClick={handleBackgroundClick}
        >
            <div 
                className="flex flex-col items-center bg-background2 p-6 rounded-lg shadow-lg w-full max-w-md gap-y-5"
                onClick={handleModalClick}
            >
                <h2 className="text-2xl mb-4">Open Notebook</h2>
                <FileSelector setFilePath={setNotebookPath} />
                {notebookPath && <p>File Selected: <span className="text-gray">{notebookPath}</span></p>}
                {!loading ? (
                    <div className="flex gap-1">
                        <DangerButton label="Cancel" onClick={() => {setShowOpenNotebookModal(false)}}/>
                        <PrimaryButton label="Open" onClick={handleFileSelect} />
                    </div>
                ) : (
                    <Bars className="stroke-primary stroke-1" />
                )}
            </div>
        </div>
    );
}

export default OpenNotebookModal;