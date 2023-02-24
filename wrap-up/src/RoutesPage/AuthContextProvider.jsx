
import React, { createContext, useState } from 'react'

export const AuthContext=createContext()
const AuthContextProvider = ({children}) => {
    const[isAuth,setAuth]=useState(false)
 
const loginUser=()=>{
 setAuth(true)
   
}
const logoutUser=()=>{
setAuth(false)
}
    return (


<AuthContext.Provider value={{isAuth,loginUser,logoutUser}} >
{children}
</AuthContext.Provider>
   
  )
}

export default AuthContextProvider