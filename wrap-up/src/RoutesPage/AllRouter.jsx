import React from 'react'
import {  Route,Routes } from "react-router-dom";

import ErrorPage from '../Dashboard/ErrorPage';
import Mainworkpage from '../Dashboard/Mainworkpage';

import MainHomepage from '../Homepage/Components/MainHomepage';
import Privateroute from './Privateroute';

const AllRouter = () => {
  return (
    
 <Routes>
<Route path='/' element={<MainHomepage/>}   />
<Route path='/workpage' element={<Privateroute>
    <Mainworkpage />
</Privateroute>

} />
<Route path='/workpage/single/:id' element={<Privateroute>
    <Mainworkpage />
</Privateroute>

} /> 

<Route path='*' element={<ErrorPage/> }  />
 </Routes>

  )
}

export default AllRouter