import { useContext, createContext } from "react";

export const LoginContext = createContext(null);

export const useLoginContext = () => {
    return useContext(LoginContext)
}

