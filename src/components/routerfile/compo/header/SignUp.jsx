import React,{useState} from 'react';
import styled from 'styled-components';

const SignUp = () => {
    const[action,setAction]=useState('Sign up');
  return (
    <Wrapper>
    <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
    </div>
    <div className='inputs'>
{
    action==='Login'?<div></div>:  <div className='input'>
   
    <input type='text' placeholder='Name' />
</div>
}
        
  
        <div className='input'>
            
            <input type='email' placeholder='Email'/>
        </div>
        <div className='input'>
           
            <input type='password' placeholder='password'/>
        </div>
    </div>
    {action==='Sign up'?<div></div>:<div className='forgotPassword'>Forgot Password! <span>Click</span></div>}

<div className='submit_continer'>
<div className={action==='Login'?'submit gray':'submit'} onClick={()=>{setAction('Sign up')}} >Sign up</div>
<div className={action==='Sign up'?'submit gray':'submit'}onClick={()=>{setAction('Login')}}>Login</div>

</div>
</Wrapper>
)
  
}

export default SignUp;
const Wrapper=styled.div`
display: flex;
    flex-direction: column;
    margin: auto;
    margin-top: 60px;
    width: 600px;
    background: #221414;
    padding-bottom: 30px;
    border-radius: 9px;
   border: 1px solid blue;

    .header{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 9px;
        width: 100px;
        margin-top: 20px;
    }
    .text{
        color: #3c009d;
        font-size: 28px;
        font-weight: 500;
    }
    .underline{
        width: 81px;
        height: 6px;
        background: #3c009d;
        border-radius: 9px;
    }
    .inputs{
        margin-top: 35px;
        display: flex;
        flex-direction: column;
        gap: 25px;
    }
    .input{
        display: flex;
        align-items: center;
        margin: auto;
        width:420px;
        height: 55px;
        background: whitesmoke;
        border-radius: 6px;
    }
    .input img{
        margin: 0px 3px;
    }
    .input input{
        height: 80px;
        width: 400px;
        background: transparent;
        border: none;
        outline: none;
        color: #352d2d;
        font-size: 18px;

    }
    .forgotPassword{
        padding-left: 62px;
        margin-top: 27px;
        color: #797979;
        font-size: 18px;

    }
    .forgotPassword span{
        color: #4c00b4;
        cursor: pointer;

    }
    .submit_continer{
        display: flex;
        gap: 30px;
        margin: 50px auto;
    }
    .submit{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 180px;
        height: 40px;
        color: #fff;
        background-color: #4c00b4;
        border-radius: 50px;
        font: 19px;
        font-weight: 700;
        cursor: pointer;
    }
    .gray{
        background:whitesmoke;
        color: #797979;
    }

`