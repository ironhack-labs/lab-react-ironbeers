import {React, useState, useEffect } from "react";
import BeerDetail from "../BeerDetail/BeerDetail";
import { beersList } from "../../services/BeersService";


const Beers = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
      beersList()
        .then(response => {
          setList(response)
        })
        .cath( err => console.log(err));
  }, [])

   return ( 
     <>
         {
          list.map(({id, name, tagline, image_url} )=> {
            return (
              <BeerDetail 
                key={id} 
                name={name} 
                tagline={tagline}
                image={image_url} /> 
              )
          })
        } :
        <h2>Loading...</h2>
     </>
    );
 }
  
 export default Beers;