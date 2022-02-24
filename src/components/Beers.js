import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';



let allBeers = {}
 
function Beers() {


  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
    .get("https://ih-beers-api2.herokuapp.com/beers")
    .then((x) => {
      setBeers(x.data)
     
    })
  }, [])

const beerArr = beers.map((x) => {
  
  return   <Link to={"/beers/" + x._id}> <h3>{x.name}</h3> </Link> 
})

  return (
    <div >

{beers && beerArr}
        
    </div>
  );
  }

export default Beers;


