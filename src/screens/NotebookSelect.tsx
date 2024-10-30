import React, { useState } from "react";
import { IoCreateOutline } from "react-icons/io5";
import { FaRegFolderOpen } from "react-icons/fa";

import CreateNotebookModal from "../components/CreateNotebookModal";
import PrimaryButton from "../components/buttons/PrimaryButton";
import Notebook from "src/entities/Notebook";
import SecondaryButton from "../components/buttons/SecondaryButton";

interface NotebookSelectProps {
    openNotebook: (nb: Notebook) => void;
}

const NotebookSelect = ( { openNotebook }: NotebookSelectProps ) => {
    const [showCreateNotebookModal, setShowCreateNotebookModal] = useState<boolean>(false);
    
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-6xl font-logo mb-4 text-white">Titan Notebook</h2>
            <p className="text-lg mb-6 text-gray-600">
                To get started, create a new notebook.
            </p>
            <div className="flex gap-1">
                <PrimaryButton onClick={() => setShowCreateNotebookModal(!showCreateNotebookModal)} label="Create" icon={<IoCreateOutline />} />
                <SecondaryButton onClick={() => {}} label="Open" icon={<FaRegFolderOpen />} />
            </div>
            {showCreateNotebookModal && <CreateNotebookModal openNotebook={openNotebook} setShowCreateNotebookModal={setShowCreateNotebookModal} />}
        </div>
    );
};

export default NotebookSelect;