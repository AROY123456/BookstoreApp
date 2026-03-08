import React, { createContext, useContext, useState } from "react";

// 1. createContext ki spelling sahi ki
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    // 2. localStorage wala bracket aur semicolon sahi kiya
    const initialAuthUser = localStorage.getItem("Users");

    const [authUser, setAuthUser] = useState(
        initialAuthUser ? JSON.parse(initialAuthUser) : undefined
    );

    return (
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {children}
        </AuthContext.Provider>
    );
}

// Custom hook taaki use karne mein aasani ho
export const useAuth = () => useContext(AuthContext);


