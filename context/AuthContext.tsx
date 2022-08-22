import { createContext, useContext, ReactNode, useState } from "react";

type authContextType = {
    user: boolean;
    token: string;
    login: () => void;
    logout: () => void;
    saveToken: () => void;
};

const authContextDefaultValues: authContextType = {
    user: false,
    token: "",
    login: () => { },
    logout: () => { },
    saveToken: () => { }
};

const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function useAuth() {
    return useContext(AuthContext);
}

type Props = {
    children: ReactNode;
};

export function AuthProvider({ children }: Props) {
    const [user, setUser] = useState<boolean>(false);
    const [token, setToken] = useState<string>('')

    const login = () => {
        setUser(true);
    };

    const logout = () => {
        setUser(false);
    };

    const saveToken = (authToken: string) =>{
        setToken(authToken)
    };

    const value = {
        user,
        token,
        login,
        logout,
        saveToken
    };

    return (
        <>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </>
    );
}