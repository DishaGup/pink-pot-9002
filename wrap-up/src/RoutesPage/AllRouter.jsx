import React from 'react'
import { BrowserRouter, Route,Routes, Link } from "react-router-dom";
import ErrorPage from '../Dashboard/ErrorPage';

import Workpage from '../Dashboard/Workpage';
import MainHomepage from '../Homepage/Components/MainHomepage';
import Privateroute from './Privateroute';
const AllRouter = () => {
  return (
    
 <Routes>
<Route path='/' element={<MainHomepage/>}   />
<Route path='/workpage' element={<Privateroute>
    <Workpage/>
</Privateroute>

} />
<Route path='*' element={<ErrorPage/> }  />
 </Routes>

  )
}

export default AllRouter