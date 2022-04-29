import { createContext,useContext,useState,useEffect } from "react";

const UserContext= createContext()

export const useUser = () => useContext(UserContext)

const UserProvider = ({children})=>{

    const [user,setUser] = useState(null)

    useEffect(() =>{
        setUser(localStorage.getItem("@sneakerMe user") || null)
    },[])

    const login = (user) =>{
        setUser(user)
    }

    const logout = () =>{
        setUser(null)
    }
    
    return(
        <UserContext.Provider value={{user,login,logout}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider