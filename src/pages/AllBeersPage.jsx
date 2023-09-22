import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers";

function AllBeersPage({beersAll}) {
  const [allBeers, setAllBeers] = useState([]);
  const [error, setError] = useState(null);
  const [searchBeer, setsearchBeer] = useState("");

  let handleSearch = (e) => {
    setsearchBeer(e.target.value);
  };

  if (!beersAll) return <p>Page is loading... ❤</p>;

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => setAllBeers(res.data))
      .catch((error) => setError(error));
  }, []);

  if (!allBeers) return <p>Page is loading... ❤</p>;

  return (
    <div>
      <div className="beerSearch">
        <label>Search beer</label>
        <input
          value={searchBeer}
          type="text"
          placeholder="Search for beer"
          onChange={handleSearch}
        />
      </div>
   <div
        className="container"
        style={{ maxHeight: "90vh", overflow: "scroll" }}
      >
       
      {beersAll
        ?.filter((beer) => {
          return beer.name.toLowerCase().includes(searchBeer.toLowerCase());
        })
        .map((beer) => (
          <div key={beer._id}>
            <Link to={`/beers/${beer._id}`}>
              <div className="card-beer">
                <div className="image-beer-list">
                  <img src={beer.image_url} alt="beer" width="100"/>
                </div>
                <div className="info-beer-list">
                  <h3>{beer.name}</h3>
                  <h4>{beer.tagline}</h4>
                  <p>
                    <b>Created by: </b>
                    {beer.name}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
     </div>
    </div>
  );
}

export default AllBeersPage;
