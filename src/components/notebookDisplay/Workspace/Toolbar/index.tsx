import React from 'react';
import { RiPlayLargeLine } from "react-icons/ri";
import { RiPlayList2Line } from "react-icons/ri";

interface ToolbarProps {
    notebookTitle: string;
}

const Toolbar = ({
    notebookTitle
}: ToolbarProps) => {
    console.log(notebookTitle);
    const titleActive = (notebookTitle !== 'Untitled');
    console.log(titleActive);

    return (
        <div 
            className="flex justify-between items-center m-3 p-3 rounded-md bg-background2"
        >
            <p className={`text-3xl ${titleActive ? '' : 'text-inactive'}`}>
                {notebookTitle}
            </p>
            <div className="flex gap-5">
                <RiPlayLargeLine 
                    className="text-3xl text-success hover:cursor-pointer" 
                    title="Run Active Cell"
                />
                <RiPlayList2Line 
                    className="text-3xl text-success hover:cursor-pointer" 
                    title="Run All Cells"
                />
            </div>
        </div>
    );
};

export default Toolbar;