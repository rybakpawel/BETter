import { useContext, createContext } from "react";

const AuthContext = createContext(null);

export default AuthContext

// export const useLoginContext = () => {
//     return useContext(AuthContext)
// }