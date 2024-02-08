/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);
  const [query, setQuery] = useState (``)



  useEffect(() => {
    const allBeersURL = "https://ih-beers-api2.herokuapp.com/beers"
    const beersQuery = query ? `https://ih-beers-api2.herokuapp.com/beers/search?q=${query}` : allBeersURL
  
      axios.get(beersQuery)
      .then((result) => {
        setBeers(result.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [query]);

  console.log(beers);
  return (
    
    <div className="allBeerContainer">
  <div className="searchBar">
      <label >Search for beer:</label>
        <input type="text"
        value={query}
        onChange={(e)=>{setQuery(e.target.value)}} />
     
      </div>  
      

      {beers.map((oneBeer) => {
        return (
          <div className="oneBeerContainer" key={oneBeer._id}>
            <Link className="oneBeerContainer" to={`/beers/${oneBeer._id}`}>

              <div className="oneBeerImageContainer">
              <img className="oneBeerImage" src={oneBeer.image_url} alt=""  />
              </div>
              <div className="oneBeerTextContainer">
              <h3>{oneBeer.name}</h3>
              <h4>{oneBeer.tagline}</h4>
              <p>
                Created by:
                {oneBeer.contributed_by}
              </p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default AllBeersPage;
