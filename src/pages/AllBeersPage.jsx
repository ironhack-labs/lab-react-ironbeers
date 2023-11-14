import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

function AllBeersPage() {
  const [beersList, setBeersList] = useState(null);

  const fetchData = () => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        setBeersList(response.data);
        console.log("Data fetching from API successful");
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {beersList === null ? (
        <p>Loading....</p>
      ) : (
        beersList.map((beer, index) => {
          return (
            <>
              <section className="beer-card" key={index}>
                <NavLink to={`/beers/${beer._id}`}>
                  <img className="beer-logo" src={beer.image_url}></img>
                  <div className="beer-info">
                    <h2>{beer.name}</h2>
                    <p>{beer.tagline}</p>
                    <p>Created by: {beer.contributed_by}</p>
                  </div>
                </NavLink>
              </section>
              <hr />
            </>
          );
        })
      )}
    </>
  );
}

export default AllBeersPage;
