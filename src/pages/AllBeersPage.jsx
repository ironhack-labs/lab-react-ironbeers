import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers";
function AllBeersPage() {
  const [beers, setBeers] = useState('');

  useEffect(()=>{
    axios.get(API_URL)
    .then((response)=>{
      setBeers(response.data)
    })
    .catch((error)=>console.log(error))
  }, [])

  return(
    <>
    <div className="all-beers-section"></div>
    {!beers && <img src="./src/assets/loading-icon.png"/>}
    {beers && beers.map((beer)=>{
      return(
        <Link to={`/beers/${beer._id}`}>
          <div className="all-beers-card">
            <div className="all-beers-image">
              <img src={beer.image_url} alt="" />
            </div>
            <div className="all-beers-content">
              <h2>Name: {beer.name}</h2>
              <h3>{beer.tagline}</h3>
            </div>
            <p>Contributed by: {beer.contributed_by}</p>
          </div>
        </Link>
      )
    })}
    </>
  )
}

export default AllBeersPage;
