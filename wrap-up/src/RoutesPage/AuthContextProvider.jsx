
import React, { createContext, useState } from 'react'

export const AuthContext=createContext()
const AuthContextProvider = ({children}) => {
    const[isAuth,setAuth]=useState(false)
    const [showActive, setShowActive] = useState(false);
    const [task, settask] = useState([])
    const activeTodos = task.filter(todo => !todo.status);
    const visibleTodos = showActive ? activeTodos : task;
    const[mainpageinfo,setmainpageinfo]=useState([])

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
const handlesubmittask=(typetask,priority)=>{
  let newtask={
  typetask:typetask,
  status:false,
  priority:priority,
  id: Math.floor(Math.random() * 6) + typetask
  }
  
  settask([...task,newtask])
  
  }
  
const loginUser=()=>{
 setAuth(true)
   
}
const logoutUser=()=>{
setAuth(false)
}

const value={handledelete,handletoggle,isAuth,loginUser,logoutUser,setShowActive,showActive,task,settask,activeTodos,visibleTodos,handlesubmittask,mainpageinfo,setmainpageinfo}
    return (


<AuthContext.Provider value={value} >
{children}
</AuthContext.Provider>
   
  )
}

export default AuthContextProvider