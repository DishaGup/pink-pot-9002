import logo from './logo.svg';
import './App.css';
import Workpage from './Dashboard/Workpage';
import MainHomepage from './Homepage/Components/MainHomepage';
import { useContext } from 'react';
import { AuthContext } from './RoutesPage/AuthContextProvider';
import AllRouter from './RoutesPage/AllRouter';
import { Navigate } from 'react-router-dom';



function App() {
  const{isAuth} =useContext(AuthContext)
  return (
    <div className="App">
   {/* {
isAuth?<Navigate to='/workpage'/> :<Navigate to='/' />

   } */}
   {/* {isAuth?<Workpage/>:  <MainHomepage/>} */}
  {/* <AllRouter/> */}
  <Workpage/>
    </div>
  );
}

export default App;
