
import React, { createContext, useState } from 'react'
import {data} from '../login'
import axios from 'axios'
import { useColorMode } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
//  http://localhost:8080    //https://erin-dizzy-clam.cyclic.app
export const deployURL='https://erin-dizzy-clam.cyclic.app'


export const AuthContext=createContext()
const AuthContextProvider = ({children}) => {
    const[isAuth,setAuth]=useState(false)
    const [showActive, setShowActive] = useState(false);
    const [task, settask] = useState([])
    const activeTodos = task.filter(todo => !todo.status);
    const visibleTodos = showActive ? activeTodos : task;
    const[mainpageinfo,setmainpageinfo]=useState([])
    const { colorMode, toggleColorMode } = useColorMode()
    const[search,setSearch]=useState('')
    const toast = useToast()
 

const handleedituserdetails=async(id)=>{
  try {
    const response = await axios.patch(`${deployURL}/wrapup/users/update/${localStorage.getItem("user_id")}`,{
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    })

    setmainpageinfo(response.data.users)
  
} catch (error) {
  return (error)
}

}

const searchTask=(value)=>{

}


  const handledelete = async(id) => {
   
    try {
      await axios.delete(`${deployURL}/wrapup/todos/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      handlefetchtask();
    } catch (error) {
      return (error);
    }



  };
  const handletoggle =async(id,status) => {
    try {
      await axios.patch(`${deployURL}/wrapup/todos/update/${id}`, {status:!status}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      handlefetchtask();
    } catch (error) {
      return (error);
    }
   
  };
  const handlesubmittask = async (typetask, priority, description) => {
    let newtask = {
      title: typetask,
      status: false,
      priority: priority,
      desc: description
    };
       try {
      await axios.post(`${deployURL}/wrapup/todos/add`, newtask, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      handlefetchtask();
    } catch (error) {
      return (error);
    }
  };
  
  const handlefetchtask=async()=>{

      try {
        const response = await axios.get(`${deployURL}/wrapup/todos/get/userdata?userId=${localStorage.getItem("user_id")}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          }
        });
        //setmainpageinfo(response.data)
        settask(response.data.todos);
    } catch (error) {
      return (error)
    }
    
    }
   
  const handlefetchuserdetails=async()=>{

    try {
      const response = await axios.get(`${deployURL}/wrapup/users/single/${localStorage.getItem("user_id")}`,{
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }
      })
   
      setmainpageinfo(response.data.users)
    
  } catch (error) {
    return (error)
  }
  
  }
      
  const registerUser=async(values)=>{
 
    try {
    return axios.post(`${deployURL}/wrapup/users/register`,values).then((res)=>{return (res)
     
      }).catch((err)=>(err))
  
    } catch (error) {
      return (error)
    }
 setAuth(true)
   
}
const logoutUser=()=>{
 localStorage.removeItem("token") 
setAuth(false)
}

const handlelogindata=async(values)=>{
  try {
    return axios.post(`${deployURL}/wrapup/users/login`,values)

  } catch (error) {
    return (error)
  }
}



const value={colorMode,handleedituserdetails,toggleColorMode,handlelogindata,handlefetchuserdetails,handledelete,handletoggle,isAuth,handlefetchtask,registerUser,logoutUser,setShowActive,showActive,task,settask,activeTodos,visibleTodos,handlesubmittask,mainpageinfo,setmainpageinfo}
    return (


<AuthContext.Provider value={value} >
{children}
</AuthContext.Provider>
   
  )
}

export default AuthContextProvider