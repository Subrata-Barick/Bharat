import React from 'react';
import styled from 'styled-components';
import Odisha from '../../../../assets/images/Odisha.jpg';
import Nagaland from '../../../../assets/images/Nagaland.jpg';
import Rajastan from '../../../../assets/images/Rajastan.jpg';
import Utter_Pradesh from '../../../../assets/images/Utter_Pradesh.jpg';
import West_Bengal from '../../../../assets/images/West_Bengal.jpg';
import Kashmir from '../../../../assets/images/Kashmir.jpg';
import Goa from '../../../../assets/images/Goa.jpg';
import Gujurat from '../../../../assets/images/Gujurat.jpg';


const Location = () => {
  return (
    <Wrapper >
      <div className='destination'>
    <div className='container'>
        <h1>Our Beautiful States</h1>
        <h4>Bharat's best Places</h4>
        <div className='img_container'>
            <img className='span-3' image-grid-row-2 src={Odisha} alt="/" />
<img src={Nagaland} alt="" />
<img src={Utter_Pradesh} alt="" />
<img src={Rajastan} alt="" />
<img src={West_Bengal} alt="" />
<img src={Kashmir} alt="" />
<img src={Goa} alt="" />
<img src={Gujurat} alt="" />
        </div>
    </div>
    </div>
</Wrapper>
  )
}

export default Location;


const Wrapper=styled.div`

    width: 100%;
    text-align: center;
    padding: 4rem 0;


.destination h1{
    padding: 1rem;
}
.img_container{
    --gap:1rem;
    --num-cols:5;
    --row-height:300px;

    display: grid;
    grid-template-columns: repeat(var(--num-cols),1fr);
    margin: auto;
    padding: 1rem 0;
    gap: var(--gap);
}
.destination img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.span-3{
    grid-column: span 3;
}
.image-grid-row-2{
    grid-row:span2
}
@media screen and (max-width: 940px) {
    .img-container {
        --num-cols: 2;
        --row-height: 200px;
        --grap: .5rem
    }

    .span-3 {
        grid-column: span 2;
    }
}
  
`