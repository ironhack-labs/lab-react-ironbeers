import Header from "./Header";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import FilterBeer from "./FilterBeer";

function AllBeers() {

  const[allBeers, setAllBeers] = useState([])

  useEffect(() => {
    const fetchAllBeers = () => {
      axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then(response => {
          setAllBeers(response.data)
        })
        .catch(e => console.log("something went off", e))
    }

    fetchAllBeers();

  }, [])

  return(
    <div className="list-of-beer">
    {allBeers.length === 0 
      ? <p>Loading...</p> 
      : <div> 
          <Header />
          <FilterBeer />
          
          {allBeers.map(element => (
            <div key={element._id}>
              <h1>{element.name}</h1>
              <img src={element.image_url} alt="img"/>
              <h4>{element.tagline}</h4>
              <h4>{element.contributed_by}</h4>
              <NavLink to={`/beers/${element._id}`}>Details</NavLink>
            </div>
          ))}
        </div>
      }
    </div>
  ) 
}

export default AllBeers;