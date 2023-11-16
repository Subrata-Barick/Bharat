import React, { useState } from "react";
import Travelaward from "../../../../assets/images/Travelaward.jpg";

import styled from "styled-components";




const Search = () => {
 
  return (
    <Main>
    <div name="book" className="search">
      <div className="container">
        <div className="left">
          <h2>VACATION FOR EVERYONE INCLUDE STUDENT/FAMILY/COUPLE</h2>
          <p>
            The most beautiful in the world is, of course, the world itself. We
            live in a wonderful world that is full of beauty, charm and
            adventure. There is no end to the adventures we can have if only we
            seek them with our eyes open.
          </p>
          <div className="search_col_2">
            <div className="box">
              <div>
                <img style={{borderRadius:'50%'}}src={Travelaward} alt="/" />
                <h3>India's Leading</h3>
                <p>ALL-INCLUSIVE COMPANY FOR 5 YEARS</p>
              </div>
            </div>
            <div className="box">
              <div>
                <h3>EVERYONE CAN JOIN THIS TRIP</h3>
                <p>ALL-INCLUSIVE COMPANY FOR 5 YEARS</p>
                <div>
                  <button>click me</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="promo">
            <h4 className="save">GET ADDITIONAL 40% OFF</h4>
            <p className="timer">7 HOURS LEFT!</p>
            <p className="offers">VIEW ALL CURRENT OFFERS</p>
          </div>
          <form>
            <div className="input_wrap">
              <label>Destination</label>
              <select>
                <option value="1">Odisha</option>
                <option value="1">Nagaland</option>
                <option value="1">Utter Pradesh</option>
                <option value="1">Rajastan</option>
                <option value="1">West Bengal</option>
                <option value="1">Kashmir</option>
                <option value="1">Goa</option>
                <option value="1">Gujurat</option>
              </select>
            </div>
            <div className="date">
              <div className="input_wrap">
                <label>Check-in</label>
                <input type="date" />
              </div>
              <div className="input_wrap">
                <label>Check-Out</label>
                <input type="date" />
              </div>
            </div>
            <button>Rates & Aviliablities</button>
          </form>
        </div>
      </div>
      </div>
  
    </Main>
  );
};

export default Search;
const Main=styled.div`

.search{
    width: 100%;
    padding: 3rem 0;
}
.search .container{
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 1rem;
    padding: 0 1rem;
}
.search_col_2{
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 2rem 0;
    justify-content: center;
    align-items: center;
}
.search .box{
    display: flex;
    max-width: 310px;
    align-items: center;
    margin: auto;
    text-align: center;
}
.right{
    display: flex;
    flex-direction: column;
    justify-content: center;

}
.promo{
    width: 100%;
    margin: .4rem 0;
    margin-bottom: 4rem;
    border: 1px solid black;
    text-align: center;
}
.promo h4 {
    font-size: 1.6rem;
    color: var(--primary-dark);
}
.promo .timer{
    padding: 1rem 0;
    font-size: 1.2rem;
}
.promo .offers{
    background: black;
    color: white;
    padding: .4rem 0;
}
.search form{
    display: flex;
    flex-direction: column;
}
.input_wrap{
    margin: .4rem;
    display: flex;
    flex-direction: column;
}
.search input, select{
    font-size: 1rem;
    font-family: 'poppins',sans-serif;
    outline: none;

}
.search .date{
    display: flex;

}
.search button{
    margin: .4rem;
}
@media screen and (max-width:940px)  {
    .search .container{
        grid-template-columns: 1fr;
        
    }
    .search_col_2{
        grid-template-columns: 1fr;
    }
    .search .right {
        max-width: 100%;
    }
    .search form {
        width: 100%;
    }
    .search .date {
        flex-direction: column;
    }
    
    
}
  
`

