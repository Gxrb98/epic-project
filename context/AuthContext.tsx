import { createContext, ReactNode, useState } from "react";



type authContextType = {
    token: string | null;
    rememberMe: boolean;
    saveToken: (authToken: string | null) => void;
    saveRememberMe: ( rememberMe: boolean) => void;
    switchRememberMe: () => void;
};

const authContextDefaultValues: authContextType = {
    token: "",
    rememberMe: false,
    saveToken: () => { },
    saveRememberMe: () => { },
    switchRememberMe: () => { },
};

export const AuthContext = createContext<authContextType>(authContextDefaultValues);

type Props = {
    children: ReactNode;
};

export function AuthProvider({ children }: Props) {
    const [token, setToken] = useState<authContextType["token"]>('')
    const [rememberMe, setRememberMe] = useState<authContextType["rememberMe"]>(false)


    const saveToken = (authToken: string | null) => {

        setToken(authToken);
    };

    const switchRememberMe = (): void => {
        setRememberMe(!rememberMe);
    };

    const saveRememberMe = (rememberMe: boolean): void =>{
        setRememberMe(rememberMe);
    }

    const value = {
        token,
        rememberMe,
        saveToken,
        switchRememberMe,
        saveRememberMe
    };

    return (
        <>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </>
    );
}