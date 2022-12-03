import React from "react";
import { Link } from "react-router-dom";

const BeersPage = ({ beers }) => {
    console.log(beers);
    return (
        <div>
          {beers.map((beer) => {
            return (
              <div key={beer._id}>

                <img src={beer.image_url} alt="" />
                <h3>{beer.name}</h3>
                <h3>{beer.tagline}</h3>
                <h3>Contributed by:{beer.contributed_by}</h3>
                 <Link to ={beer._id}>{beer.name}</Link>
              </div>
            );
          })}
        </div>
      );
    };
    
    export default BeersPage;