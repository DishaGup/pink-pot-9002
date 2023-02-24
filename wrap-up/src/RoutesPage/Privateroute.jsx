import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from './AuthContextProvider'

const Privateroute = ({children}) => {
  
   
const {isAuth}=useContext(AuthContext)

if(!isAuth){
    return <Navigate to='/' />
}
return children

  
}

export default Privateroute