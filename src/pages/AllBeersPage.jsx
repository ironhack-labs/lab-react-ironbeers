import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const beersAPI = "https://ih-beers-api2.herokuapp.com/beers";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);
  const [beersFromAPI, setBeersFromAPI] = useState([]);
  const [searchBeer, setSearchBeer] = useState("");

  useEffect(() => {
    axios.get(beersAPI).then((response) => {
      setBeers(response.data);
      setBeersFromAPI(response.data);
    });
  }, []);

  useEffect(() => {
    filterBeers();
  }, [searchBeer]);

  const filterBeers = () => {
    const filteredBeers = beersFromAPI.filter((beer) => {
      return beer.name.toLowerCase().includes(searchBeer.toLowerCase());
    });
    setBeers(filteredBeers);
  };

  const handleChange = (e) => {
    const newBeer = e.target.value.toLowerCase();
    setSearchBeer(newBeer);
  };

  return (
    <div className="list-group">
      <h1>All Beers</h1>
      <input
        onChange={handleChange}
        value={searchBeer}
        placeholder="Search Beer"
      />
      <br />
      <ul>
        {beers.map((beer) => (
          <li
            className="list-group-item list-group-item-action"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "30px"
            }}
            key={beer._id}
          >
            <img
              style={{ width: "50px", height: "auto" }}
              src={beer.image_url}
            />

            <div className="container">
              <Link to={`/beers/${beer._id}`} className="text-dark">
                <h3>{beer.name}</h3>
              </Link>
              <p style={{ color: "grey" }}>{beer.tagline}</p>
              <p>
                <strong>Created by: </strong>
                {beer.contributed_by}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllBeersPage;
