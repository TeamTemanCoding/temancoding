"use client"
import Link from "next/link";
import React, { useState } from "react";

interface AlertCustomProps {
    variant: "success" | "error" | "warning" | "info";
    title: string;
    message: string;
    showLink?: boolean;
    linkHref?: string;
    linkText?: string;
    position?: "top" | "bottom" | "left" | "right" | "center" | "top-left" | "top-right" | "bottom-left" | "bottom-right";
    zIndex?: number;
}

const icons = {
    success: (
        <svg
            className="h-5 w-5 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
    ),
    error: (
        <svg
            className="h-5 w-5 text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
    ),
    warning: (
        <svg
            className="h-5 w-5 text-yellow-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
        </svg>
    ),
    info: (
        <svg
            className="h-5 w-5 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
        </svg>
    ),
};

const AlertCustom: React.FC<AlertCustomProps> = ({
    variant,
    title,
    message,
    showLink = false,
    linkHref = "#",
    linkText = "Learn more",
    position = "top",
    zIndex = 999999,
}) => {
    const [isVisible, setIsVisible] = useState(true); // State for visibility

    const variantClasses = {
        success: {
            container:
                "z-999999 border-success-500 bg-success-50 dark:border-success-500/30 dark:bg-success-500/15",
            icon: "text-success-500",
        },
        error: {
            container:
                "z-999999 border-error-500 bg-error-50 dark:border-error-500/30 dark:bg-error-500/15",
            icon: "text-error-500",
        },
        warning: {
            container:
                "z-999999 border-warning-500 bg-warning-50 dark:border-warning-500/30 dark:bg-warning-500/15",
            icon: "text-warning-500",
        },
        info: {
            container:
                "z-999999 border-blue-light-500 bg-blue-light-50 dark:border-blue-light-500/30 dark:bg-blue-light-500/15",
            icon: "text-blue-light-500",
        },
    };

    const positionClasses = {
        top: "top-4 left-1/2 transform -translate-x-1/2",
        bottom: "bottom-4 left-1/2 transform -translate-x-1/2",
        left: "top-1/2 left-4 transform -translate-y-1/2",
        right: "top-1/2 right-4 transform -translate-y-1/2",
        center: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
        "top-left": "top-4 left-4",
        "top-right": "top-4 right-4",
        "bottom-left": "bottom-4 left-4",
        "bottom-right": "bottom-4 right-4",
    };

    if (!isVisible) return null; // Don't render the alert if it's not visible

    return (
        <div
            className={`fixed ${positionClasses[position]} z-[${zIndex}] w-[90%] max-w-md p-4 border rounded-lg shadow-lg ${variantClasses[variant].container}`}
        >
            <div className="flex gap-3 items-start">
                <div className={`mt-1 ${variantClasses[variant].icon}`}>
                    {icons[variant]}
                </div>
                <div className="flex-1">
                    <h3 className="text-sm font-semibold mb-1 text-gray-800 dark:text-white/90">{title}</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-200">{message}</p>
                    {showLink && (
                        <Link href={linkHref}>
                            <span className="inline-block mt-2 text-sm font-medium underline text-blue-500 cursor-pointer">
                                {linkText}
                            </span>
                        </Link>
                    )}
                </div>
                <button
                    onClick={() => setIsVisible(false)}
                    className="text-gray-400 hover:text-gray-600"
                    aria-label="Close"
                >
                    <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default AlertCustom;
