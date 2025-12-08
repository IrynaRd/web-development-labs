import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
const def_key = 'def_key';

export const AuthProvider = ({children}) => {
    const [email, setEmail] = useState(() => {
        return localStorage.getItem(def_key);
    });

    const logIn = (email) => {
        localStorage.setItem(def_key, email);
        setEmail(email);
    };

    const logOut = (email) => {
        localStorage.removeItem(def_key);
        setEmail(null);
    };

    const context_value = {
        email,
        logIn,
        logOut,
        isAuthenticated: !!email
    }
    return <AuthContext.Provider value = {context_value}>{children}</AuthContext.Provider>
};

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider')
    };

    return context;
};