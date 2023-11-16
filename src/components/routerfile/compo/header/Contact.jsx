import React from "react";
import styled from "styled-components";
import contactus from '../../../../assets/images/contact us.jpg'

const Contact = () => {
  return (
    <Wrapper>
      <h2 className="heading">Contact me For Enquiry</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.212911394705!2d85.85640819999999!3d20.2914525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190a04efbbdd99%3A0xf3f0554b02d85a00!2sEsplanade%20One%20Ln%2C%20Rasulgarh%20Industrial%20Estate%2C%20Industrial%20Area%20Estate%2C%20Rasulgarh%2C%20Bhubaneswar%2C%20Odisha%20751007!5e0!3m2!1sen!2sin!4v1698588773112!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{border:0}}
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container">
        <div className="contact_form">
            <form action="#" method="post" className="contact_inputs">
                <input type="text"  name="username" placeholder="username" autoComplete="off" required />
                <input type="email"  name="Email" placeholder="email" autoComplete="off" required />
                <textarea name="message" cols='50' placeholder="Write what you need..." rows='8' style={{borderRadius:'8px'}} autoComplete="off" required>

                </textarea>
                <input type="submit"  />
            </form>
            

        </div>
        <div className="images"><img src={contactus} alt=""/></div>

      </div>
    </Wrapper>
  );
};

export default Contact;
const Wrapper = styled.section`
 background-color: #242020;
padding:9rem 0 5rem 0;
color: wheat;

.heading{
  text-align: center;
  margin-top: -50px;
  margin-bottom: 30px;
}.container{
  width: 80%;
    margin-top: 6rem;
    text-align: center;
    
    display: flex;
    justify-content: space-between;
    ;
    
}
.contact_form{
    max-width: 50rem;
    margin: auto;
    
}
.contact_inputs{
    display: flex;
    flex-direction: column;
    gap:1.5rem;
    width: 30rem;

}
input{
  font-size: larger;
  padding: 10px;
  border-radius: 6px;
}
.images img{
  border-radius: 50%;
}

`
