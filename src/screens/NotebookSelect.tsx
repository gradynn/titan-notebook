import React, { useState } from "react";
import NotebookCreatorModal from "../components/NotebookCreatorModal";

const NotebookSelect = () => {
    const [showNotebookCreatorModal, setShowNotebookCreatorModal] = useState<boolean>(false);
    
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-6xl font-semibold mb-4 text-white">Titan</h2>
            <p className="text-lg mb-6 text-gray-600">
                To get started, create a new notebook.
            </p>
            <button
                className="px-6 py-3 text-white bg-primary rounded-md shadow-md hover:bg-cyan-600 transition"
                onClick={() => setShowNotebookCreatorModal(!showNotebookCreatorModal)}
            >
                New Notebook
            </button>
            {showNotebookCreatorModal && <NotebookCreatorModal setShowNotebookCreatorModal={setShowNotebookCreatorModal} />}
        </div>
    );
};

export default NotebookSelect;