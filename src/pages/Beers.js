import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";


function Beers() {
  const [beers, setBeers] = useState([])

  useEffect(()=>{
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
      .then((object)=>{
        setBeers(object.data)
        console.log(object.data)
      })
  }, []) //-------> Runs the effect only once, after rendering for the first time.

    return (
      <div className="Beers justify-content-center container-fluid row">
        <Navbar/>
        <h3>List Of Beers</h3>
        {beers.map((beer)=>(
          <Link className="card pt-4 m-1 col-2" to={`/beers/${beer._id}`} key={beer._id}>
            <>
              <img src={beer.image_url} alt={beer.name}/>
              <h4>{beer.name}</h4>
              <p>{beer.tagline}</p>
              <p className="text-secondary">Created by: {beer.contributed_by}</p>
            </>
          </Link>
        ))}
      </div>
    );
  }
  
  export default Beers;