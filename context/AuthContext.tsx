import { createContext, ReactNode, useState } from "react";

type authContextType = {
    token: string | null;
    saveToken: (authToken?: string) => void;
};

const authContextDefaultValues: authContextType = {
    token: "",
    saveToken: () => { }
};

export const AuthContext = createContext<authContextType>(authContextDefaultValues);

type Props = {
    children: ReactNode;
};

export function AuthProvider({ children }: Props) {
    const [token, setToken] = useState<string>('')

    const saveToken = (authToken?: string ) => {
        setToken(authToken);
    };

    const value = {
        token,
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