import React from 'react'
import styled from 'styled-components';


const Ride2 = ({img,text,amount}) => {
  return (
    <Main>
      
      <div className='images'>
        <img  className='imgs' src={img} alt="img" />
        <div><h3>{text}</h3></div>
      <div><h4>{`$${amount}/-`}</h4></div>
      </div>
      
    </Main>
  )
}

export default Ride2;
const Main=styled.div`
.images{
 align-items: center;
margin-left: 10%;
}


.images img{
  width: 24rem;
  height: 20rem;
  border-radius: 8px;
 
}
.imgs:hover{
  transform: scale(0.9);
  transition: 0.3s;
}
`
  



