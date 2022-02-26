import React from "react";
import { useState } from "react";
import { Navigate, Link } from "react-router-dom";


function BeerList(props) {
    console.log('props', props.beerprops)
    return (
      <div className="Beerlist">   
        {props.beerprops.map(elements => {
          return (
            <div className="beerList">
              <img src={elements.image_url} className="BeersList" style={{ maxHeight: '20vh'}} />  
              <h3>{elements.name}</h3>
              <p>Stuff: {elements.tagline}</p>
              <p>Stuff: {elements.contributed_by}</p>
              <Link
                key={elements._id}
                to={'/'+ elements._id}
                >
                <p>{elements.name} Details</p>
              </Link>
            </div>
          );
        })}

      </div>
    );
  }
  
  export default BeerList;
  