import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers";

function AllBeersPage() {
  const [allBeers, setAllBeers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => setAllBeers(res.data))
      .catch((error) => setError(error));
  }, []);

  if (!allBeers) return <p>Page is loading... ❤</p>;

  return (
    <div>
      <div
        className="container"
        style={{ maxHeight: "90vh", overflow: "scroll" }}
      >
        <div className="beer-list">
          {allBeers &&
            allBeers.map((beer) => {
              return (
                <Link
                  key={beer._id}
                  className="list-group-item list-group-item-action"
                  to={`/beers/${beer._id}`}>  
                  <div className="beer-card"> 
                 <img src={beer.img_url} alt="beer-picture"/>
                 <h3>{beer.name}</h3>
                 <h4>{beer.tagline}</h4>
                 <p>
                    <b>Contributed by:{beer.contributed_by}</b>
                  </p>
                 </div>
              </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default AllBeersPage;
