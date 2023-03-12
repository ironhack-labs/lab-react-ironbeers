import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function AllBeers() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((result) => {
        // console.log(result.data);
        setBeers(result.data);
      })
      .catch((error) => console.log("Error retrieving all Beers:", error));
  }, []);

  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <h1>All Beers</h1>

      {beers.length === 0 && <h1>Page Loading... </h1>}

      {/* mapping state onto page */}
      {beers.length > 0 &&
        beers.map((singleBeer) => {
          return (
            <div key={singleBeer._id} className="all-beers">
              <div>
                <img
                  className="all-beers-img"
                  src={singleBeer.image_url}
                  alt={singleBeer.name}
                />
              </div>
              <div className="beer-details">
                <h1>{singleBeer.name}</h1>
                <h3>{singleBeer.tagline}</h3>
                <p>
                  <b>Created By: </b>
                  {singleBeer.contributed_by}
                </p>
                <Link to={`/beers/${singleBeer._id}`}>More Details</Link>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default AllBeers;
