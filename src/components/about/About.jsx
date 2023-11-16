import React from 'react'
import about1 from '../../assets/images/about1.jpg'
import about2 from '../../assets/images/about2.jpg'
import about3 from '../../assets/images/about3.jpg';
import styled from 'styled-components';


const About = () => {
  return (
    <Main>
        <div><h2>About all the travel Plan</h2></div>
  <div className='main_About'>
  <div className='about'><div>   <img src={about1} alt="img" /></div>
         
            <p style={{margin:'15px'}}>
            Travel is the largest independently owned travel agency headquartered in Odisha, and consistently ranked among the top 50 largest in the Bharat.

            </p>
        </div>
        <div className='about2'>
           <div className='left'><img src={about2} alt="img" /></div><p style={{margin:'15px'}}>"We are an employee-owned company with a passion for providing exemplary customer service, leveraging our expertise and technology to deliver innovative travel solutions in a gratifying work environment."</p>
            
        </div>
        <div className='about'>
            <div><img className='about3' src={about3} alt="img" /></div><p>Founded in 2018, Travel is a leading travel marketplace dedicated to putting travellers first. Travel helps millions of people in 52 countries and over 30 languages find the best travel options for flights, hotels and car hire every month.  Travel's mission is to lead the global transformation to modern and sustainable travel.</p>
            
        </div>

    </div>      
    </Main>
  )
}

export default About;

const Main=styled.div`
margin-top: 5rem;
margin-bottom: 5rem;
.main_About{
    margin: 20px;
}

h2{
    text-align: center;
    margin-bottom: 3rem;
    text-decoration: underline;
}
.about img{
    height: 25rem;
    width: 45rem;
    border-radius:50%;

    
    
}
.about,.about2{
    display: flex;
   justify-content: space-around;
   margin-top: 40px;
   border: 1px solid black;
   

}
.left >img{
    height: 25rem;
    width: 45rem;
    border-radius:50%;
    
}
p{
    font-size: 2rem;
}

    
`
