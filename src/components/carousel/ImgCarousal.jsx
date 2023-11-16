import React from 'react';
import'./ImgCarousal.css';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
//import new1 from '../../assets/images/new1'
import new1 from '../../assets/images/new1.jpg'
import new6 from '../../assets/images/new6.jpg'
import new3 from '../../assets/images/new3.jpg'
import new4 from '../../assets/images/new4.jpg'
import new5 from '../../assets/images/new5.jpg'


const ImgCarousal = () => {
  return (
    <div name='carousel' className='container'>
          <Carousel className='carousal' showArrows={true}autoPlay={true} infiniteLoop={true}>
    <div>
        <img src={new1} />
  
    </div>
    <div>
        <img src={new6} />
        
    </div>
    <div>
        <img src={new3} />
       
    </div>
    <div>
        <img src={new4} />
       
    </div>
    <div>
        <img src={new5} />
       
    </div>
    
</Carousel>

    </div>
  
  )
}

export default ImgCarousal