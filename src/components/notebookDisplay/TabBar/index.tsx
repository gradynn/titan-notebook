import React, { useState, useEffect } from 'react';
import { CgClose } from "react-icons/cg";
import { IoAdd } from "react-icons/io5";
import { SiMoonrepo } from "react-icons/si";

import Notebook from "src/entities/Notebook";
import AddNotebookModal from '../../Modals/AddNotebookModal';
import CreateNotebookModal from '../../Modals/CreateNotebookModal';
import OpenNotebookModal from '../../Modals/OpenNotebookModal';

interface TabBarProps {
    openNotebooks: Notebook[];
    activeNotebook: number;
    setActiveNotebook: (i: number) => void;
    closeNotebook: (index: number) => void;
    openNotebook: (nb: Notebook) => void;
}

const TabBar = ( { openNotebooks, activeNotebook, setActiveNotebook, closeNotebook, openNotebook }: TabBarProps ) => {
    const [showAddNotebookModal, setShowAddNotebookModal] = useState<boolean>(false);
    const [showCreateNotebookModal, setShowCreateNotebookModal] = useState<boolean>(false);
    const [showOpenNotebookModal, setShowOpenNotebookModal] = useState<boolean>(false);

    // Pass callbacks to Electron main process for menu items
    useEffect(() => {
        window.electron.onOpenFileCmd(() => {
            setShowOpenNotebookModal(true);
        })

        return () => {
            window.electron.onOpenFileCmd(() => {});
        }
    }, []);
    
    const handleTabChange = (index: number) => {
        setActiveNotebook(index);
    }

    const handleTabClose = (e: React.MouseEvent<SVGElement, MouseEvent>, index: number) => {
        e.stopPropagation();
        closeNotebook(index);

        if (activeNotebook == index && index == openNotebooks.length - 1) {
            setActiveNotebook(index - 1);
        }
    }

    return (
        <div className="flex w-full h-[50px] overflow-y-scroll shadow-inner">
            {openNotebooks && openNotebooks.map((item: Notebook, index: number) => (
                <div
                    key={index} 
                    className={`h-full flex gap-3 items-center justify-center px-3 mx-[0.5px] group whitespace-nowrap flex-grow-0 ${index == activeNotebook ? "bg-background" : "bg-background2 text-inactive"}`}
                    onClick={() => handleTabChange(index)}
                >
                    {item?.name ?? item.filepath.split('/').pop()}
                    <CgClose 
                        className="invisible group-hover:visible hover:cursor-pointer" 
                        onClick={(e) => handleTabClose(e, index)}
                    />
                </div>
            ))}
            <div
                className="h-full flex items-center justify-center px-3 hover:cursor-pointer hover:bg-primary"
                onClick={() => setShowAddNotebookModal(true)} 
            >
                <IoAdd />
            </div>
            <div 
                className="absolute right-0 top-0 flex items-center justify-end gap-2 h-[50px] px-1 pl-10 shadow" 
            >
                <SiMoonrepo className="text-primary" style={{ fontSize: '25px' }} />
                <p className="text-primary font-logo text-4xl">Titan</p>
            </div>
            {showAddNotebookModal && <AddNotebookModal setShowAddNotebookModal={setShowAddNotebookModal} setShowCreateNotebookModal={setShowCreateNotebookModal} setShowOpenNotebookModal={setShowOpenNotebookModal} />}
            {showCreateNotebookModal && <CreateNotebookModal setShowCreateNotebookModal={setShowCreateNotebookModal} openNotebook={openNotebook} />}
            {showOpenNotebookModal && <OpenNotebookModal setShowOpenNotebookModal={setShowOpenNotebookModal} openNotebook={openNotebook} />}
        </div>
    );
}

export default TabBar;