import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./ListOfBeers.css";

function ListOfBeers() {
  const [beersArray, setBeersArray] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getBeersFromApi();
  });

  const url = "https://ih-beers-api2.herokuapp.com/beers";

  const getBeersFromApi = () => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);

        const beersToDisplay = response.data.filter( (beer) => {
            return beer.name.toLowerCase().includes(searchQuery.toLowerCase());
        })
        setBeersArray(beersToDisplay);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <h1>This is ListOfBeers</h1>
      <hr />
      <form>
        <label>
          Search by Title:
          <input
            type="text"
            name="searchQuery"
            placeholder="Search by title"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
        </label>
      </form>
      <hr />
      {beersArray === null
        ? "loading..."
        : beersArray.map((beerDetails) => {
            return (
              <div className="beerBox" key={beerDetails._id}>
                <img
                  className="beerImage"
                  src={beerDetails.image_url}
                  alt="beer"
                ></img>
                <div className="beerText">
                  <h2>{beerDetails.name}</h2>
                  <h3>{beerDetails.tagline}</h3>
                  <h6>Created By: {beerDetails.contributed_by}</h6>
                  <Link to={"/beers/" + beerDetails._id}>More Details</Link>
                </div>
              </div>
            );
          })}
    </>
  );
}

export default ListOfBeers;
