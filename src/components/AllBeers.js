import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./AllBeers.css"

function AllBeers(props) {
   const { beers } = props;

   return (
    <div className="col-5">

           <div className="BeersList">
               {beers.map((element, index) => {
                   return (
                       <div className="beer-summary" key={element._id}>
                           <img
                               src={element.image_url}
                               alt={element.name} />
                           <h2>{element.name}</h2>
                           <h5>{element.tagline}</h5>
                           <h6>{element.contributed_by}</h6>
                           <Link to={`/beers/${element._id}`}>
                               More details about: {element.name}
                           </Link>
                       </div>
                   );
               })}
           </div>
       </div>
   );
 }

 export default AllBeers;