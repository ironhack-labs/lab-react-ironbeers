import React from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import beers from "../../assets/beers.png";
import newBeer from "../../assets/new-beer.png"
import randomBeer from "../../assets/random-beer.png"



function HomePage() {
  return ( 
    
    <div className="home-container">
      <div className="section-container">
          <Link to="/Beers">
           <img src={beers} alt="beer"/>
            <h3>All Beers</h3>
          </Link>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum.
             </p>
      </div>
          
      <div className="section-container">
          <Link to="/RandomBeer">
            <img src={newBeer} alt="beer"/>
            <h3>Random Beer</h3>
          </Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
              molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum.
            </p>
      </div>

      <div className="section-container">
          <Link to="/NewBeer">
              <img src={newBeer} alt="beer"/>
              <h1>New Beer</h1>
          </Link>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
               molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum.
              </p>
      
       </div> 
    </div>


   );
}

export default HomePage;

