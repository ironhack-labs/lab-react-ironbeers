import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";

function RandomBeer() {
  
  const [selectedBeers, setSelectedBeers] = useState('');

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((result) => {
        console.log(result.data);
        setSelectedBeers(result.data);
      })
      .catch();
  }, []);

  return (
    <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
    <div className="list-group">
      {/* { 
        selectedBeers.countries.map( (element, index) => {
          return (
              <a key={index} className="list-group-item list-group-item-action" href={element.alpha3Code}>{element.name.common}</a>
          )
        })
      } */}
      </div>
    </div>
  );
}

export default RandomBeer;