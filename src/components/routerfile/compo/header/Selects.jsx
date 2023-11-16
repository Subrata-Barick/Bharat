import React from 'react';
import styled from 'styled-components';


const Selects = ({bgImg,text}) => {
  return (
    <Main>
      <div className='selects'>
      <div className='select_location'>
    <img src={bgImg} alt=''/>
    <div className="overlay">
        <p>{text}</p>
    </div>
        </div>

      </div>
      

    </Main>
  
  )
}

export default Selects;
const Main=styled.div`
.selects img{
  height: 25rem;
  width: 25rem;
  padding: 0 10px;


}
.select_location{
    position: relative;

}
.select_location .overlay{
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(0,0,0,0.3);
   
    
}
.select_location p{
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    color: beige;
    font-size: 2rem;
    font-weight: 500;
}
  
`

