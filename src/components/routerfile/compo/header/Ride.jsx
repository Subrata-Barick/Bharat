import React from 'react';
import ride1 from '../../../../assets/images/ride1.jpg'
import ride2 from '../../../../assets/images/ride2.jpg';
import ride3 from '../../../../assets/images/ride3.jpg';
import ride4 from '../../../../assets/images/ride4.jpg';
import ride5 from '../../../../assets/images/ride5.jpg';
import ride7 from '../../../../assets/images/ride7.jpg';
import Ride2 from './Ride2';
import styled from 'styled-components';



const Ride = () => {
  return (
    <Wrapper>
        <Ride2 img={ride1} text='Treking' amount='15,500'/>
        <Ride2 img={ride2} text='RiverRafting' amount='12,999'/>
        <Ride2 img={ride3} text='Mountain-Climbing' amount='19,900'/>
        <Ride2 img={ride4} text='Water-Activities' amount='17,000'/>
        <Ride2 img={ride5} text='Camping' amount='8,999'/>
        <Ride2 img={ride7} text='Motor-Riding' amount='5,899'/>
      
    </Wrapper>
  )
}

export default Ride;
const Wrapper=styled.div`

background-color: #807d7d29;
 display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 1rem;
  
`

