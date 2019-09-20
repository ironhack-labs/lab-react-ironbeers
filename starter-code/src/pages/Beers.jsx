import React, { useState, useEffect } from "react";
import axios from "axios";
import NavMain from "./NavMain";
import { Link } from "react-router-dom";

function Beers() {
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    axios
      .get("https://ih-beer-api.herokuapp.com/beers")
      .then(response => {
        console.log(response);
        setBeers(response.data.slice(0, 20));
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div>
      <NavMain />
      <div className="allbeer">
        {beers.map((beer, i) => (
          <div key={i} className="beer">
            <Link to={"/beer" + beer._id}>
              <img src={beer.image_url} alt={beer.name} />
              <div className="beerinfo">
                <h2>{beer.name}</h2>
                <h3>{beer.tagline}</h3>
                <p>
                  <b>Created by:</b> {beer.contributed_by}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Beers;
