import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        console.log("res.data", response.data);
        setBeers(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="allBeersPage-container">
      {!beers ? (
        <p>Loading beers...</p>
      ) : (
        beers.map((beer) => {
          return (
            <div key={beer._id} className="card">
              <Link to={`/beers/${beer._id}`}>
                <div className="card-img-wrapper">
                  <img src={beer.image_url} alt={beer.name} />
                </div>
              </Link>

              <div>
                <h2>{beer.name}</h2>
                <h3>{beer.tagline}</h3>
                <p>
                  <b>Created by:</b> {beer.contributed_by}
                </p>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default AllBeersPage;
