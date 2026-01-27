import { createContext, useState } from "react";

export const UserContext = createContext<any>(null);

export const UserProvider = ({children}:any)=>{
    const [name,setName] = useState("Kajal")

    return(
        <UserContext.Provider value={{name,setName}}>
            {children}
        </UserContext.Provider>

    )
}
