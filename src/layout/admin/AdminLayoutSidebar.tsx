"use client";

import React from "react";
import ConfirmationDialog from "~/components/admin/ui/confirmation/ConfirmationDialog";
import { useAuth } from "~/context/admin/AuthContext";
import { useSidebar } from "~/context/admin/SidebarContext";
import AppHeader from "~/layout/admin/AppHeader";
import AppSidebar from "~/layout/admin/AppSidebar";
import Backdrop from "~/layout/admin/Backdrop";

export default function AdminLayoutSidebar({
    children,
}: {
    children: React.ReactNode;
}) {
    const { isExpanded, isHovered, isMobileOpen } = useSidebar();
    const { isDialogLogoutVisible, handleCancelLogout, handleConfirmLogout } = useAuth();

    const mainContentMargin = isMobileOpen
        ? "ml-0"
        : isExpanded || isHovered
            ? "lg:ml-[290px]"
            : "lg:ml-[90px]";

    return (
        <div className="min-h-screen xl:flex dark:bg-gray-900">
            <AppSidebar />
            <Backdrop />
            <div
                className={`flex-1 transition-all duration-300 ease-in-out ${mainContentMargin}`}
            >
                <AppHeader />
                <div className="p-4 mx-auto max-w-[1536px] md:p-6">{children}</div>
            </div>

            {isDialogLogoutVisible && (
                <ConfirmationDialog
                    message="Are you sure you want to proceed logout?"
                    onConfirm={handleConfirmLogout}
                    onCancel={handleCancelLogout}
                />
            )}
        </div>
    );
}
