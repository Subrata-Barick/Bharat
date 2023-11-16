import React, { useState } from 'react'

import ImgCarousal from './components/carousel/ImgCarousal'
import Footer from './components/footer/Footer'
//import Navrouter from './components/routerfile/Navrouter';
import Mainrouter from './components/routerfile/Mainrouter';
import About from './components/about/About';



const App = () => {

  return (
    <div>
      <Mainrouter/>
    {/*<Navrouter/>*/}
    <About/>
    <ImgCarousal/>
    <Footer/>
     
    </div>
  )
}

export default App