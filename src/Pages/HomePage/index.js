import React from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import beers from "../../assets/beers.png";
import newBeer from "../../assets/new-beer.png"
import randomBeer from "../../assets/random-beer.png"


function HomePage() {
  return ( 
    
          <div>
      <Link to="/Beers">
        <img src={beers} alt="beer"/>
        <h1>All Beers</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          numquam. 
        </p>
      </Link>

      <Link to="/RandomBeer">
        <img src={newBeer} alt="beer"/>
        <h1>Random Beer</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam. 
          </p>
      </Link>

      <Link to="/NewBeer">
        <img src={newBeer} alt="beer"/>
        <h1>New Beer</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam. 
          </p>
      </Link>
    
    </div>
    

     
   );
}

export default HomePage;

