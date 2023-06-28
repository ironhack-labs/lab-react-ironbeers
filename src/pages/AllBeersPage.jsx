import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { css } from "@emotion/css";

const apiURL = "https://ih-beers-api2.herokuapp.com/beers";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);
  const [searchedWord, setSearchedWord] = useState("")

  useEffect(() => {
    console.log("useEffect - Initial render (Mounting)");
    axios
      .get(apiURL)
      .then((response) => {
        setBeers(response.data);
        console.log("response.data =", response.data);
      })
      .catch((err) => console.log("stg happened", err));
  }, []);

function handleSearch(event){
  setSearchedWord(event.target.value)
}
const filteredBeers = beers.filter((beer) =>
beer.name.toLowerCase().includes(searchedWord.toLowerCase()))

  return (
    <div
      className={css`
        display: flex;
        width: 80vw;
        justify-content:center;
      `}
    >
      <label id="search">
        Search
        <input
          name="search"
          value={searchedWord}
          type="text"
          onChange={handleSearch}
        />
      </label>
      <ul>
        {filteredBeers.map((beer) => {
          return (
            <li
              key={beer._id}
              className={css`
                list-style: none;
              `}
            >
              <Link to={`./${beer._id}`}>
                <div
                  className={css`
                    display: flex;
                    flex-direction: row;
                    border: solid 1px black;
                  `}
                >
                  <div className={css`
                    width : 100px;
                    display: flex;
                    align-items: center;
                    justify-content : center;
                  `}>
                    <img
                      src={beer.image_url}
                      className={css`
                        max-height: 100px;
                      `}
                    />
                  </div>

                  <div>
                    <h3>{beer.name}</h3>
                    <p>{beer.tagline}</p>
                    <p>{beer.contributed_by}</p>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AllBeersPage;
