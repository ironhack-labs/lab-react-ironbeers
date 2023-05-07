import Navbar from "../components/Navbar";
import React from "react";
import { Link } from "react-router-dom";

function AllBeers(props) {
  return (
    <div>
        <Navbar />
        {props.beers.map((beer) => {
          return (
            <div key={beer._id} className="beer-container">
              <div className="beer-box-photo">
                <img src={beer.image_url} alt={beer.name} style={{ width: "80px" }}/>
              </div> 
              <div className="beer-box-text"> 
                <h2>{beer.name}</h2>
                <p style={{ color: "grey" }}>{beer.tagline}</p>
                <p style={{ fontSize: "12px" }}>contributed by: {beer.contributed_by}</p>
                <Link to={`/beers/${beer._id}`} style={{ color: "grey", textDecoration: "none" }}>Details</Link>
              </div>
            </div>
          )
        })}
    </div>
  );
}

export default AllBeers;

