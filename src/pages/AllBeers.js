import axios from "axios";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function AllBeers() {
  const [beers, setAllBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => setAllBeers(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container-fluid">
      {beers.map((beer) => {
        return (
          <div key={beer._id} className="row">
            <div className="col-4 h-25 d-flex justify-content-center align-items-center">
              {beer.image_url ? (
                <NavLink to={`/beer-details/${beer._id}`}>
                  <img
                    className="imagesOnAllBeersPage m-5"
                    src={beer.image_url}
                    alt="beer"
                  />
                </NavLink>
              ) : (
                "No image provided"
              )}
            </div>
            <div className="col-8 h-80 d-flex flex-column justify-content-evenly align-items-start">
              <h2 className="beerNamesOnAllBeersPage">{beer.name}</h2>
              <h4 className="taglineOnAllBeersPage">
                <i>{beer.tagline}</i>
              </h4>
              <h6 className="contributedByLineOnAllBeersPage">
                Contributed by: {beer.contributed_by}
              </h6>
              {/* <NavLink to="/beer-details">See more</NavLink> */}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AllBeers;
