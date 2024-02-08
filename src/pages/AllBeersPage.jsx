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
    
    <div>

      <label>Search for beer
        <input type="text"
        value={query}
        onChange={(e)=>{setQuery(e.target.value)}} />
      </label>
      

      {beers.map((oneBeer) => {
        return (
          <div key={oneBeer._id}>
            <Link to={`/beers/${oneBeer._id}`}>
              <img src={oneBeer.image_url} alt="" style={{ width: "120px" }} />
              <h3>{oneBeer.name}</h3>
              <h4>{oneBeer.tagline}</h4>
              <p>
                Created by:
                {oneBeer.contributed_by}
              </p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default AllBeersPage;
