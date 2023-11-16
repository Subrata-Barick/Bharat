
import React from 'react';
import Odisha from '../../../../assets/images/Odisha.jpg';
import Nagaland from '../../../../assets/images/Nagaland.jpg';
import Rajastan from '../../../../assets/images/Rajastan.jpg';
import Utter_Pradesh from '../../../../assets/images/Utter_Pradesh.jpg';
import West_Bengal from '../../../../assets/images/West_Bengal.jpg';
import Kashmir from '../../../../assets/images/Kashmir.jpg';
import Goa from '../../../../assets/images/Goa.jpg';
import Gujurat from '../../../../assets/images/Gujurat.jpg';
import Selects from './Selects';
import styled from 'styled-components';


const View = () => {
  return (<Main>
    <div className='selects'>
   <div className="container">
   <Selects bgImg={Odisha} text='Odisha'/>
   <Selects bgImg={Nagaland} text='Nagaland'/>
   <Selects bgImg={Rajastan} text='Rajastan'/>
   <Selects bgImg={Utter_Pradesh} text='Utter_Pradesh'/>
   <Selects bgImg={West_Bengal} text='West_Bengal'/>
   <Selects bgImg={Goa} text='Goa'/>
   <Selects bgImg={Kashmir} text='Kashmir'/>
   <Selects bgImg={Gujurat} text='Gujurat'/>

   </div>
   </div>
   </Main>
)
}

export default View;
const Main=styled.div`
.selects .container{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 1rem;
}
@media screen and (max-width:940px) {
    .selects .container{
        grid-template-columns: 1fr;
    }  
    
}`

