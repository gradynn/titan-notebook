import React, { useState } from 'react';
import PrimaryButton from '../buttons/PrimaryButton';
import { createBlankNotebook } from '../../controllers/Notebook.controller';
import Notebook from 'src/entities/Notebook';

interface CreateNotebookModalProps {
    setShowCreateNotebookModal: React.Dispatch<React.SetStateAction<boolean>>
    openNotebook: (nb: Notebook) => void;
}

const CreateNotebookModal = ( { setShowCreateNotebookModal, openNotebook }: CreateNotebookModalProps ) => {
    const [notebookName, setNotebookName] = useState('');

    const handleBackgroundClick = () => {
        setShowCreateNotebookModal(false);
    };

    const handleModalClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    }

    const handleCreate = () => {
        const newNotebook = createBlankNotebook(notebookName);
        openNotebook(newNotebook);
        setShowCreateNotebookModal(false);
    }
    
    return (
        <div 
            className="fixed inset-0 bg-background bg-opacity-90 flex items-center justify-center"
            onClick={handleBackgroundClick}
        >
            <div 
                className="flex flex-col items-center bg-background2 p-6 rounded-lg shadow-lg w-full max-w-md gap-y-5"
                onClick={handleModalClick}
            >
                <h2 className="text-2xl mb-4">New Notebook</h2>
                <div>
                    <label className="mr-1">Name</label>
                    <input className="text-[#000000]" type="text" value={notebookName} onChange={(e) => {setNotebookName(e.target.value)}}></input>
                </div>
                <PrimaryButton onClick={handleCreate} label="Create" />
            </div>
        </div>
    );
}

export default CreateNotebookModal;