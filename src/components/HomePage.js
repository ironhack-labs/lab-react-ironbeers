
import BeerImage from "../assets/beers.png";
import RandomImage from "../assets/random-beer.png";
import NewImage from "../assets/new-beer.png";
import {Link} from "react-router-dom" ;
//import './App.css';
import React from 'react';


function HomePage() {
        return (
            <div>
        
            <img src={BeerImage} alt="BeerImg" />
            <Link to="/beers"><h1>All Beers </h1></Link>
      <p>
        Beer is one of the oldest types of alcoholic drinks in the world, and
        the most widely consumed. It is the third most popular drink overall
        after potable ...
      </p>
      
      
      <img src={RandomImage} alt="BeerImg" />
      <Link to="/random-beer"> <h1> Random Beer </h1>  </Link>
      <p>
        Beer is one of the oldest types of alcoholic drinks in the world, and
        the most widely consumed. It is the third most popular drink overall
        after potable ...
      </p>
     
      <img src={NewImage} alt="BeerImg" />
      <Link to="/new-beer"> <h1> New Beer </h1>  </Link>
      <p>
        Beer is one of the oldest types of alcoholic drinks in the world, and
        the most widely consumed. It is the third most popular drink overall
        after potable ...
      </p>
      </div>
      
        );  
     
      }
   
export default HomePage;