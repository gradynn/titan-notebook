import React from 'react';

interface SecondaryButtonProps {
    onClick: () => void;
    label: string;
    icon?: React.ReactElement;
}

const SecondaryButton = ({ onClick, label, icon }: SecondaryButtonProps) => {
    return (
        <button
            className="px-6 py-3 text-primary border-2 border-primary rounded-md shadow-md hover:bg-primary hover:text-white transition"
            onClick={onClick}
        >
            <div className="flex items-center justify-together gap-2">
                {icon}
                {label}
            </div>
        </button>
    );
};

export default SecondaryButton;