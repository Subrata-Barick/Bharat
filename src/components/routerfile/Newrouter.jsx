import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import{BsPerson} from'react-icons/bs';



const Newrouter = () => {
//const[nav,setNav]=useState(false);
 // const handleClick=()=>setNav(!nav)
  return (
    <Wrapper>
      <div /*className={nav?'navbar navbar-bg':'navbar'}*/ className='navbar navbar-bg'>
      <div /*className={nav?'logo dark':'logo'}*/ className='logo dark'>
            <h2>Travel</h2>
</div>
         <ul className='nav-menu'>
        <li><Link to='/' >Home</Link></li>
        <li> <Link to='Location'>Location</Link></li>
        <li><Link to='View'>View</Link></li>
        <li><Link to='Contact'>Contact</Link></li>
        <li><Link to='Search'>Tour</Link></li>
        <li><Link to='Ride'>Ride</Link></li>
      
    </ul>
    <div className='nav-icons'>
           
           <Link to='SignUp'> <BsPerson className='icons'/></Link>

        </div>
    </div>
    </Wrapper>
  )
}

export default Newrouter;
const Wrapper=styled.div`
.navbar {
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 2rem;
  overflow: hidden;
  z-index: 1;
  width: 100%;
  margin: auto;
  top: 0;
  border-bottom: solid 1px var(--primary-color);
  opacity: 0.9;
  top: 0;
  box-shadow: 12px 0 15px -4px rgba(31, 73, 125, 0.8),
    -12px 0 8px -4px rgba(31, 73, 125, 0.8);
  box-shadow: 0 9px 0px 0px white, 0 -9px 0px 0px white,
    12px 0 15px -4px rgba(31, 73, 125, 0.8),
    -12px 0 15px -4px rgba(31, 73, 125, 0.8);
}
    .navbar-bg{
        background-color: #fffcfc;
    }
    .nav-menu{
        display: flex;

    }
    li{
        padding: 0 1rem;
    }
`

