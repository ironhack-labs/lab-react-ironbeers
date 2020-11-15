import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
      <>
        <div className="cardHome">
            <img src="../prueba.png" alt="Beers Brand" style={{ width: "100%" }}/>
            <div className="containerText">
                <Link to="/beers" style={{ textDecoration: "none" , color: "black" , fontSize: "20px"}}>All Beers</Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam leo sem, facilisis at pellentesque eu, pellentesque eget massa. Nulla volutpat justo a bibendum ultricies.</p>
            </div>
        </div> 
        
        <div className="cardHome">
            <img src="../prueba2.png" alt="Beers Brand" style={{ width: "100%" }}/>
            <div className="containerText">
                <Link to="/random-beer" style={{ textDecoration: "none" , color: "black" , fontSize: "20px"}}>Random Beer</Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam leo sem, facilisis at pellentesque eu, pellentesque eget massa. Nulla volutpat justo a bibendum ultricies.</p>
            </div>
        </div> 
        <div className="cardHome">
            <img src="../prueba3.png" alt="Beers Brand" style={{ width: "100%" }}/>
            <div className="containerText">
                <Link to="/new-beer" style={{ textDecoration: "none"  , color: "black" , fontSize: "20px"}}>New Beer</Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam leo sem, facilisis at pellentesque eu, pellentesque eget massa. Nulla volutpat justo a bibendum ultricies.</p>
            </div>
        </div> 
      </>
    );
  }
  
  export default Home;