import React from 'react'

import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './compo/header/Home'
import Location from './compo/header/Location';
import View from './compo/header/View';
import Newrouter from './Newrouter';
import SignUp from './compo/header/SignUp';
import Contact from './compo/header/Contact';
import Search from './compo/header/Search';
import Ride from './compo/header/Ride';



const Navrouter = () => {
  return (
    <div>
        <BrowserRouter>
        <Newrouter/>
    <Routes>
            <Route element={<Home/>} path='/'></Route>
            <Route element={<Location/>} path='/Location'></Route>
            <Route element={<View/>} path='/View'></Route>
            <Route element={<SignUp/>} path='/SignUp'></Route>
            <Route element={<Contact/>} path='/Contact'></Route>
            <Route element={<Search/>} path='/Search'></Route>
            <Route element={<Ride/>} path='/Ride'></Route>
            
           
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Navrouter