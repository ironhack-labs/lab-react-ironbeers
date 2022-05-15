import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AllBeers(props) {
   const { beers } = props;

   return (
    <div className="col-5">
       <div className="list-group">
         {beers.map((element, index) => {
           return (
             <li className="list" key={element._id}>
               <div>
               <img
                 src={element.image_url}
                 alt={element.name} />
                <h2>{element.name}</h2>
                <h5>{element.tagline}</h5>
                <h6>{element.contributed_by}</h6>           
               </div>
               <Link to={`/beers/${element._id}`}>
                 More details about: {element.name}
               </Link>
             </li>
           );
         })}
       </div>
     </div>
   );
 }

 export default AllBeers;