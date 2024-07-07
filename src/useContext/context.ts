import { createContext, PropsWithChildren, useContext, useState } from "react";
import { userType } from "../appwrite/authentication/authen";

const AuthContext = createContext<userType | undefined>(undefined);

type AuthProvType = PropsWithChildren

export const AuthProvider = ({children}:AuthProvType)=>{
    const [user,setUser] = useState<boolean>(false);

    type ContextType = {
        login:()=>void,
        logout:()=>void,
        user:boolean
    }

    const login = ()=>{
        setUser(true)
    }

    const logout = ()=>{
        setUser(false)
    }

    const contextData:ContextType = {
        login,
        logout,
        user
    }

    // return <AuthContext.Provider value={contextData}/>
}

export const AuthUse = ()=>{
    const context = useContext(AuthContext);
    if(context===undefined) throw new Error('useAuth Must used with in the auth provider')
        return context;
}

