import { createContext, ReactNode, useState } from "react";

export interface Storage{
    token: authContextType["token"],
    rememberMe: authContextType["rememberMe"]
}

type authContextType = {
    token: string | null;
    rememberMe: boolean ;
    storage: Storage;
    saveToken: (authToken: string | null) => void;
    switchRememberMe: () => void;
};

const authContextDefaultValues: authContextType = {
    token: "",
    rememberMe: false,
    storage: { token: "", rememberMe: false},
    saveToken: () => { },
    switchRememberMe: () => { }
};

export const AuthContext = createContext<authContextType>(authContextDefaultValues);

type Props = {
    children: ReactNode;
};

export function AuthProvider({ children }: Props) {
    const [token, setToken] = useState<string | null>('')
    const [rememberMe, setRememberMe] = useState<boolean>(false)
    const [storage, setStorage] = useState({
        token: "", rememberMe: false
    })


    const saveToken = (authToken: string | null) => {
        setToken(authToken);
    };

    const switchRememberMe = () => {
        setRememberMe(!rememberMe);
    };


    const value = {
        token,
        rememberMe,
        storage,
        saveToken,
        switchRememberMe
    };

    return (
        <>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </>
    );
}