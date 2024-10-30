import React from 'react';

interface PrimaryButtonProps {
    onClick: () => void;
    label: string;
    icon?: React.ReactElement
}

const PrimaryButton = ({ onClick, label, icon }: PrimaryButtonProps) => {
    return (
        <button
            className="px-6 text-white border-primary border-2 bg-primary rounded-md shadow-md hover:shadow-inner hover:shadow-black transition"
            onClick={onClick}
        >
            <div className="flex items-center justify-together gap-2">
                {icon}
                {label}
            </div>
        </button>
    )
}

export default PrimaryButton