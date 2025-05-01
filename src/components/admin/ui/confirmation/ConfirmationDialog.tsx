"use client"
import React, { useState } from "react";

interface ConfirmationProps {
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
    title?: string;
    zIndex?: number;
}

const ConfirmationDialog: React.FC<ConfirmationProps> = ({
    message,
    onConfirm,
    onCancel,
    title = "Are you sure?",
    zIndex = 999999,
}) => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div
            className={`fixed inset-0 z-[${zIndex}] bg-gray-800 bg-opacity-50 flex items-center justify-center`}
        >
            <div className="bg-white rounded-lg p-6 w-[90%] max-w-md">
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                <p className="mt-2 text-sm text-gray-700">{message}</p>
                <div className="mt-4 flex justify-end gap-4">
                    <button
                        onClick={() => {
                            onCancel();
                            setIsVisible(false);
                        }}
                        className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => {
                            onConfirm();
                            setIsVisible(false);
                        }}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationDialog;
