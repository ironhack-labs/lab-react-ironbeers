import Header from "./Header";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function ListBeers({ beers }) {
  const [searchInput, setSearchInput] = useState("");
  const [filteredArray, setfilteredArray] = useState(beers);

  const inputHandler = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/beers/search?q=${searchInput}`)
      .then((response) => {
        setfilteredArray(response.data);
      })
      .catch((e) => console.log("error getting characters from API", e));
  }, [searchInput]);

  return (
    <div>
      <Header />
      <input
        value={searchInput}
        type='text'
        onChange={(e) => {
          inputHandler(e);
        }}
        placeholder='Enter search query'
      />
      {searchInput.length === 0
        ? beers.map((beer) => {
            // If there is no search input, render the base beers array
            return (
              <div
                key={beer._id}
                className='card d-flex flex-row'
                style={{ width: "30rem" }}
              >
                <img
                  src={beer.image_url}
                  className='card-img-top'
                  alt={beer.name}
                />
                <div className='card-body'>
                  <h5 className='card-title'>
                    <Link
                      className='list-group-item list-group-item-action'
                      to={`/beers/${beer._id}`}
                    >
                      {beer.name}
                    </Link>
                  </h5>
                  <p className='card-text' style={{ color: "grey" }}>
                    {beer.tagline}
                  </p>
                  <p className='card-text'>
                    <span style={{ fontWeight: "bold" }}>Created By: </span>
                    {beer.contributed_by}
                  </p>
                </div>
              </div>
            );
          })
        : filteredArray.map((beer) => {
            // If there is a search input, render the filtered array
            return (
              <div
                key={beer._id}
                className='card d-flex flex-row'
                style={{ width: "30rem" }}
              >
                <img
                  src={beer.image_url}
                  className='card-img-top'
                  alt={beer.name}
                />
                <div className='card-body'>
                  <h5 className='card-title'>
                    <Link
                      className='list-group-item list-group-item-action'
                      to={`/beers/${beer._id}`}
                    >
                      {beer.name}
                    </Link>
                  </h5>
                  <p className='card-text' style={{ color: "grey" }}>
                    {beer.tagline}
                  </p>
                  <p className='card-text'>
                    <span style={{ fontWeight: "bold" }}>Created By: </span>
                    {beer.contributed_by}
                  </p>
                </div>
              </div>
            );
          })}
      {}
    </div>
  );
}

export default ListBeers;
