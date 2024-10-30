import React, { useState } from 'react';
import { IoCreateOutline } from 'react-icons/io5';
import { FaRegFolderOpen } from 'react-icons/fa';

import PrimaryButton from '../buttons/PrimaryButton';
import SecondaryButton from '../buttons/SecondaryButton';
import CreateNotebookModal from '../CreateNotebookModal';
import Notebook from 'src/entities/Notebook';

interface AddNotebookModalProps {
    setShowAddNotebookModal: React.Dispatch<React.SetStateAction<boolean>>;
    setShowCreateNotebookModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddNotebookModal = ( { setShowAddNotebookModal, setShowCreateNotebookModal }: AddNotebookModalProps ) => {
    
    const handleBackgroundClick = () => {
        setShowAddNotebookModal(false);
    };

    const handleModalClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    }

    const handleClickCreate = () => {
        setShowAddNotebookModal(false);
        setShowCreateNotebookModal(true);
    }

    return (
        <div 
            className="fixed inset-0 bg-background bg-opacity-90 flex items-center justify-center"
            onClick={handleBackgroundClick}
        >
            <div className="flex flex-col items-center bg-background2 p-6 rounded-lg shadow-lg w-full max-w-md gap-y-5">
                <div className="flex gap-1">
                    <PrimaryButton label="Create" onClick={handleClickCreate} icon={<IoCreateOutline />} />
                    <SecondaryButton label="Open" onClick={() => {}} icon={<FaRegFolderOpen />} />
                </div>
            </div>
        </div>
    );
}

export default AddNotebookModal;