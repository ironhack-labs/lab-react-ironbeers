import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

function SingleBeer() {
    const [singleBeer, setSingleBeer] = useState([]); 
    useEffect(() => {
        axios
          .get('https://ih-beers-api2.herokuapp.com/beers')//api link
          .then((response) => {
            setBeers(response.data);
          })
          .catch((err) => console.log(err));
      }, []);
    
    return (
      <div>SingleBeer</div>
    )
  }
  export default SingleBeer ;

  import React from 'react'
  
  