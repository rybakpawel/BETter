import { createContext } from "react";

const LoginContext = createContext({
    isLoginActive: false,
    setIsLoginActive: () => { }
});

export default LoginContext
