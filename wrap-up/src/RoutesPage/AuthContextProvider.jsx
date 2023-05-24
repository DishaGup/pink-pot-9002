
import React, { createContext, useState } from 'react'
import {data} from '../login'
import axios from 'axios'
export const deployURL='https://erin-dizzy-clam.cyclic.app'
export const AuthContext=createContext()
const AuthContextProvider = ({children}) => {
    const[isAuth,setAuth]=useState(false)
    const [showActive, setShowActive] = useState(false);
    const [task, settask] = useState([])
    const activeTodos = task.filter(todo => !todo.status);
    const visibleTodos = showActive ? activeTodos : task;
    const[mainpageinfo,setmainpageinfo]=useState([])
  //console.log(data)
  const handledelete = (id) => {
    let afterDelete = task.filter((item) => item.id !== id);
   // console.log(afterDelete);
    settask(afterDelete);
  };
  const handletoggle = (id) => {
    let aftertoggle = task.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );
    settask(aftertoggle);
  };
const handlesubmittask=async(typetask,priority,description)=>{
  let newtask={
  title:typetask,
  status:false,
  priority:priority,
  desc:description
  }
  try {
    axios.post(`${deployURL}/wrapup/todos/add`,{
      headers:{
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    })

  } catch (error) {
    console.log(error)
  }
  
  }
  
  const loginUser=async(values)=>{
 // console.log(values)
    try {
      axios.post(`${deployURL}/wrapup/users/register`,values).then((res)=>console.log(res)).catch((err)=>console.log(err))
  
    } catch (error) {
      console.log(error)
    }




 setAuth(true)
   
}
const logoutUser=()=>{
setAuth(false)
}

const handlelogindata=(values)=>{
  try {
    axios.post(`${deployURL}/wrapup/users/login`,values).then((res)=>console.log(res)).catch((err)=>console.log(err))

  } catch (error) {
    console.log(error)
  }
}



const value={handlelogindata,handledelete,handletoggle,isAuth,loginUser,logoutUser,setShowActive,showActive,task,settask,activeTodos,visibleTodos,handlesubmittask,mainpageinfo,setmainpageinfo}
    return (


<AuthContext.Provider value={value} >
{children}
</AuthContext.Provider>
   
  )
}

export default AuthContextProvider