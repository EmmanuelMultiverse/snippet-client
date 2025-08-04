import { useContext, useState, createContext, type ReactNode } from "react";

interface User {
    username: string;
}

interface LoginCredentials {
    username: string;
    password: string;
}

interface LoginResult {
    success: boolean;
}

interface AuthContextType {
    user: User | null;
    handleLogin: (credentials: LoginCredentials) => Promise<LoginResult>;
    handleLogout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode}) => {

    const [user, setUser] = useState<User | null>(null);

    const handleLogin = async (credentials: LoginCredentials) => {

        if (credentials.username === "admin" && credentials.password === "password") {
            setUser({ username: credentials.username });
            return { success: true };
        } else {
            return { success: false };
        }

    }

    const handleLogout = () => {
        setUser(() => null);
    }

    const value = {
        user,
        handleLogin,
        handleLogout
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (context == undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    } else {
        return context;
    }
}