import React from "react";
import { Link } from "react-router-dom";
import allbeersimg from "../assets/beers.png";
import randombeerimg from "../assets/random-beer.png";
import newbeerimg from "../assets/new-beer.png";


function HomePage() {
  return (
    <div className="beerpage">
      <div className="beerdivs">
        <img alt="allbeers" src={allbeersimg}/>
        <h1><Link to={"/beers"}>All Beers</Link></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor libero, imperdiet nec condimentum tempor, malesuada eu nibh. Fusce quis turpis eu risus tristique elementum in nec nisi. </p>
      </div>
      
      <div className="beerdivs">
        <img alt="randombeerimg" src={randombeerimg}/>
        <h1><Link to={"/random-beer"}>Random Beer</Link></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor libero, imperdiet nec condimentum tempor, malesuada eu nibh. Fusce quis turpis eu risus tristique elementum in nec nisi. </p>
      </div>
     
      <div className="beerdivs">
        <img alt="newbeerimg" src={newbeerimg}/>
        <h1><Link to={"/new-beer"}>New Beer</Link></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tortor libero, imperdiet nec condimentum tempor, malesuada eu nibh. Fusce quis turpis eu risus tristique elementum in nec nisi. </p>
      </div>
      
    </div>
  );
}

export default HomePage;
