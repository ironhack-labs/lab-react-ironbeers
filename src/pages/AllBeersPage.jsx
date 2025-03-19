import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [allBeers, setAllBeers] = useState([]);

  useEffect(() => {
    async function getAllBeers() {
      try {
        const response = await axios.get(
          "https://ih-beers-api2.herokuapp.com/beers"
        );
        console.log(response);
        setAllBeers(response.data);
      } catch (err) {
        console.log("Something went wrong!", err);
      }
    }
    getAllBeers();
  }, []);

  return (
    <div className="content-div">
      <h2>Here are all beers:</h2>
      {allBeers.map((oneBeer) => {
        return (
          <div className="beer-card">
            <img src={oneBeer.image_url} alt="" />
            <h3>{oneBeer.name}</h3>
            <h4>{oneBeer.tagline}</h4>
            <p>{oneBeer.contributed_by}</p>
            <Link to={`/beers/${oneBeer._id}`}>
              <button>Crack open a cold one!</button>
            </Link>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default AllBeersPage;
