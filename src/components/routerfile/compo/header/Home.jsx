import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";

import Video from "../../../../assets/images/WelcomeIndia.mp4";

import styled from "styled-components";
import Herojson from "./Herojson.json";


const Home = () => {
  //const [data, setdata] = useState(Herojson);
  const [filterData, setFilterData] = useState([]);
  const [word, setWord] = useState("");
  const[click,setClick]=useState('')

  const handleChange = (e) => {
    const searchData = e.target.value;
    setWord(searchData);
    const filtNewData = Herojson.filter((ele) =>
      ele.state.toLowerCase().includes(searchData.toLowerCase())
    );

   // setdata(filtNewData);
    if (e === "") {
      setFilterData([]);
    } else {
      setFilterData(filtNewData);
      setClick(searchData)
    }
  };
  const handleClose = () => {
    setFilterData([]);
    setWord("");
  };
 
  
  return (
    <Hero>
      <div className="hero">
        <video autoPlay loop muted id="video">
          <source src={Video} type="video/mp4" />
        </video>
        <div className="overlay"></div>
        <div className="content">
          <h1>Bharat Tour</h1>
          <h2>All state's Locations of Bharat</h2>
          <form className="form">
            <div>
              <input
                type="text"
                value={word}
                placeholder="Search State to Travel..."
                onChange={handleChange}
                
              />
            </div>
            <div className="searchIcon">
              {filterData.length === 0 ? (
                <AiOutlineSearch
                  className="icon"
                  style={{
                    fontSize: "20px",
                    border: "1px solid black",
                    marginRight: "10px",
                    marginTop: "8px",
                    paddingLeft: "1px",
                    borderRadius: "12px",
                    width: "52px",
                    height: "30px",
                  }}
                />
              ) : (
                <AiFillCloseCircle
                  className="icons"
                  style={{
                    fontSize: "20px",
                    border: "1px solid black",
                    marginRight: "10px",
                    marginTop: "8px",
                    paddingLeft: "1px",
                    borderRadius: "12px",
                    width: "52px",
                    height: "30px",
                  }}
                  onClick={handleClose}
                />
              )}
            </div>
          </form>
        </div>
       
        {filterData.lenth!=0&&(
           <div className={click.length<=0?'dataResultNone':'dataResult'}>
        {filterData.slice(0,5).map((ele) => (
          <a
          className="dataItem"
          href={ele.link}
          target="blank"
            style={{ color: "black" }}
            key={ele.id}
          ><p>{`${ele.state}-(${ele.capital})`}</p></a>
        ))}
      </div>
       )}
        </div>
      
       
    </Hero>
  );
};

export default Home;

const Hero = styled.div`
  .hero {
    
    width: 100%;
    height: 100vh;
    color: white;
    position: relative;
  }
  .overlay {
    background-color: rgba(0, 0, 0, 0.1);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  #video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
  .hero .content {
    position: absolute;
    top: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    width: 100%;
    margin: auto;
    padding: 1rem;
  }
  .form {
    display: flex;
    background-color: #ffffffcc;
    color: #000;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #ccc;
    padding: 4px;
    border-radius: 8px;
    max-width: 700px;
    width: 100%;
    margin: 0 auto;
  }

  .form input[type="text"] {
    border: transparent;
    background-color: transparent;
    width: 400px;
    font-size: 1.2rem;
    font-family: "Poppins", sans-serif;
  }
  .form input[type="text"]:focus {
    outline: none;
  }
  
  .dataResult {
    margin-top: -16.9rem;
    margin-left: 31rem;
    border-radius: 12px;
    width: 500px;
    height: 200px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    overflow: hidden;
    overflow-y: auto;
    position: absolute;
    
  }
  .dataResult::-webkit-scrollbar {
    display: none;
  }
  .dataResult .dataItem {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    color: black;
  }
  .dataItem p {
    margin-left: 10px;
  }
  .dataResultNone{
    display: none;
  }
  a {
    text-decoration: none;
  }

  a:hover {
    background-color: lightgrey;
  }
  .icons{
    cursor: pointer;
  }
  @media screen and (max-width: 940px) {
    .form input[type="text"] {
      max-width: 275px;
    }
    .hero{
        width: 100%;
    height: 100vh;
        position: absolute;
    }
    .dataResult{
       // margin-right: -21rem;
       // margin-left: 20rem;
       margin-top: -16.5rem;
        left: -30rem;
        //right: 30px;
    }
  }
`;
