import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from './AuthContextProvider'
import {useToast} from '@chakra-ui/react'
const Privateroute = ({children}) => {
  const toast=useToast()
   
const {isAuth}=useContext(AuthContext)
const token=localStorage.getItem("token")
//console.log(token)
if(!token){
    toast({
      title: 'Login into Your account!',
     status: 'info',
      duration: 2000,
      isClosable: true,
      position:'top'
    })
    return <Navigate to='/' />
}
return children

  
}

export default Privateroute