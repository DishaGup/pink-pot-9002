import logo from './logo.svg';
import './App.css';
import MainHomepage from './Homepage/Components/MainHomepage';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from './RoutesPage/AuthContextProvider';
import AllRouter from './RoutesPage/AllRouter';
import { Navigate, Route, useNavigate } from 'react-router-dom';
import Mainworkpage from './Dashboard/Mainworkpage';
import ErrorPage from './Dashboard/ErrorPage';



function App() {
  const{isAuth,setAuth} =useContext(AuthContext)
let Navigate=useNavigate()

  return (
    <div className="App">
      
     <AllRouter/>  
    </div>
  );
}

export default App;
