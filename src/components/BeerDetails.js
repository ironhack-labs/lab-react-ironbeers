import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams} from "react-router-dom";




 
function BeerDetails() {

    const {id} = useParams()
  const [beer, setBeer] = useState([]);

  useEffect(() => {
    axios
    .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
    .then((x) => {
      setBeer(x.data)
    
    })
  }, [])



  return (

   <>{beer && <div><h1>{beer.name}</h1> {beer.description}</div>}</>
  );
  }

export default BeerDetails;


