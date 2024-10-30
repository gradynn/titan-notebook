import React from 'react';

interface DangerButtonProps {
    onClick: () => void;
    label: string;
    icon?: React.ReactElement;
}

const DangerButton = ({ onClick, label, icon }: DangerButtonProps) => {
    return (
        <button
            className="px-6 py-3 text-danger border-2 border-danger rounded-md shadow-md hover:bg-danger hover:text-white transition"
            onClick={onClick}
        >
            <div className="flex items-center justify-together gap-2">
                {icon}
                {label}
            </div>
        </button>
    );
};

export default DangerButton;