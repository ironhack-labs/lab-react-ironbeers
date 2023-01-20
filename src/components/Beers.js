import axios from "axios";
import { useState, useEffect } from "react";
import { Header } from "./Header";
import { Link } from "react-router-dom";
// import { Form, Button } from "react-bootstrap";

export function Beers() {
  const [beersList, setBeersList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL)
      .then((response) => {
        setBeersList(response.data);
      })
      .catch((error) => {
        console.log("Error getting the data from the API: ", error);
      });
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearch(query);

    axios
      .get(process.env.REACT_APP_API_URL + `/search?q=${query}`)
      .then((response) => {
        setBeersList(response.data);
      });
  };

  return (
    <div>
      <Header />

      <div className="mt-5">
        <label>Search: </label>
        <input
          type="text"
          value={search}
          placeholder="Search for a beer"
          onChange={handleSearch}
        />
      </div>

      {beersList.map((beer) => {
        return (
          <div className="mt-5 card flex-row">
            <img
              className="card-img-left example-card-img-responsive"
              src={beer.image_url}
              style={{ width: "80px", height: "200px" }}
            />
            <div className="card-body">
              <h4 className="card-title h3 h4-sm">{beer.name}</h4>
              <h5>{beer.tagline}</h5>
              <p>
                <b>Created by: </b>
                {beer.contributed_by}
              </p>
              <Link to={"/beers/" + beer._id}>More Details</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
