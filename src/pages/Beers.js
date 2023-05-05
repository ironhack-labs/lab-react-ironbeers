import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useState } from "react";

function Beers({ beersAll }) {
  const [searchBeer, setsearchBeer] = useState("");

  let handleSearch = (e) => {
    setsearchBeer(e.target.value);
  };

  if (!beersAll) return <p>Page is loading... ❤</p>;

  return (
    <div className="App">
      <Header />
      <h1>Beers for all!</h1>

      <div className="beerSearch">
        <label>Search beer</label>
        <input
          value={searchBeer}
          type="text"
          placeholder="Search for beer"
          onChange={handleSearch}
        />
      </div>

      {beersAll
        ?.filter((beer) => {
          return beer.name.toLowerCase().includes(searchBeer.toLowerCase());
        })
        .map((beer) => (
          <div key={beer._id}>
            <Link to={`/beers/${beer._id}`}>
              <div className="card-beer">
                <div className="image-beer-list">
                  <img src={beer.image_url} alt="beer" />
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
  );
}

export default Beers;
