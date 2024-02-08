import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function AllBeersPage() {
  const [beers, setBeers] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/")
      .then((result) => {
        console.log(result.data);
        setBeers(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // search query filtering
  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchInput}`)
      .then((response) => {
        // console.log(response.data);
        setBeers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchInput]);

  return (
    <div>
      <Navbar></Navbar>
      <input
        type="text"
        style={{ width: "80%", height: "30px", marginTop: "20px" }}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
        value={searchInput}
      />
      {beers &&
        beers.map((beer) => {
          return (
            <Link key={beer._id} to={`/beers/${beer._id}`}>
              <div className="all-beer-card">
                <div className="all-beer-image">
                  <img src={beer.image_url} alt="" />
                </div>
                <div className="all-beer-description">
                  <h1>{beer.name}</h1>
                  <h2>{beer.tagline}</h2>
                  <p>Created by: {beer.contributed_by}</p>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
}

export default AllBeersPage;
