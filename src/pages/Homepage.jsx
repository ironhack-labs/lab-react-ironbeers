import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import BeersImage from "../assets/beers.png"
import RandomBeerImage from "../assets/random-beer.png"
import NewBeerImage from "../assets/new-beer.png"
 
function Homepage() {
  
  return (
  <div>
    <div className="card">
     <img className="card-img-top" src={BeersImage} alt="Beer taps - all beers"></img>
      <h5 className="card-title"><Link className="stretched-link" to="/beers">All Beers</Link></h5>
      <h6 className="card-subtitle mb-2 text-muted">Lorem Ipsum</h6>
      <p className="card-text">lorem Ipsum</p>
    </div>
    <div className="card">
    <img className="card-img-top" src={RandomBeerImage} alt="beer taps - random beer"></img>
     <h5 className="card-title"><Link className="stretched-link" to="/random-beer">Random Beer</Link></h5>
      <h6 className="card-subtitle mb-2 text-muted">Lorem Ipsum</h6>
      <p className="card-text">lorem Ipsum</p>
    </div>
    <div className="card">
    <img className="card-img-top" src={NewBeerImage} alt="beer glass - new beer"></img>
        <h5 className="card-title"><Link className="stretched-link" to="/new-beer">New Beer</Link></h5>
        <h6 className="card-subtitle mb-2 text-muted">Lorem Ipsum</h6>
        <p className="card-text">lorem Ipsum</p>
    </div>  
    </div>  
  );
}
 
export default Homepage;