import React, { useState } from 'react';

interface NotebookCreatorModalProps {
    setShowNotebookCreatorModal: React.Dispatch<React.SetStateAction<boolean>>
}

const NotebookCreatorModal = ( { setShowNotebookCreatorModal }: NotebookCreatorModalProps ) => {
    const [notebookName, setNotebookName] = useState('');

    const handleBackgroundClick = () => {
        setShowNotebookCreatorModal(false);
    };

    const handleModalClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    }
    
    return (
        <div 
            className="fixed inset-0 bg-background bg-opacity-90 flex items-center justify-center"
            onClick={handleBackgroundClick}
        >
            <div 
                className="flex flex-col items-center bg-background2 p-6 rounded-lg shadow-lg w-full max-w-md"
                onClick={handleModalClick}
            >
                <h2 className="text-2xl font-semibold mb-4">New Notebook</h2>
                <div>
                    <label>Name</label>
                    <input type='text'></input>
                </div>
                <button>Create</button>
            </div>
        </div>
    );
}

export default NotebookCreatorModal;