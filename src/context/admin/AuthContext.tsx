"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface User {
    id: string;
    name: string;
    email: string;
    // tambahin field lain sesuai kebutuhan
}

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    login: (userData: User, token: string) => void;
    logout: () => void;
    toggleDialogLogout: () => void;
    handleConfirmLogout: () => void;
    handleCancelLogout: () => void;
    isDialogLogoutVisible: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [isDialogLogoutVisible, setIsDialogLogoutVisible] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        const token = localStorage.getItem("token");

        if (storedUser && token) {
            setUser(JSON.parse(storedUser));
            setIsAuthenticated(true);
        }
    }, []);

    const login = (userData: User, token: string) => {
        setUser(userData);
        setIsAuthenticated(true);
        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("token", token);
    };

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    };

    const toggleDialogLogout = () => {
        setIsDialogLogoutVisible((prev) => prev == true ? false : true);
    };

    const handleConfirmLogout = () => {
        router.push('/');
        toggleDialogLogout();
    };

    const handleCancelLogout = () => {
        setIsDialogLogoutVisible(false);
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, logout, toggleDialogLogout, handleConfirmLogout, handleCancelLogout, isDialogLogoutVisible }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
