import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const ListBeers = () => {
  const [beersList, setBeersList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getBeers = async () => {
      const beersFromApi = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setBeersList(beersFromApi.data);
      setLoading(false);
    };
    getBeers();
  }, []);

  // Searchbar;
  const filterBeerList = (e) => {
    setQuery(e.target.value);
    setLoading(true);
    (async () => {
      let beerFoundApi = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/search?q=${e.target.value}`
      );
      setBeersList(beerFoundApi.data);
      setLoading(false);
    })();
  };

  return (
    <>
      <div>
        <label for="searchbar"></label>
        <input
          type="text"
          placeholder="Search by name..."
          style={{
            width: "50%",
            marginTop: "30px",
            borderRadius: "5px",
            border: "1px solid lightgrey",
          }}
          onChange={filterBeerList}
          value={query}
        />
      </div>

      {isLoading && (
        <div className="spinner-border text-info" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      )}

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {beersList.map((beer) => {
          return (
            <div
              key={beer._id}
              className="card mb-3 text-start"
              style={{
                width: "30%",
                marginTop: "40px",
                boxShadow: "10px 10px 25px lightgrey",
                borderRadius: "30px",
                backgroundColor: "#f2f2f2",
              }}
            >
              <div className="row g-0">
                <div
                  className="col-md-4"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={beer.image_url}
                    className="img-fluid rounded-start"
                    alt="beer"
                    style={{
                      width: "50%",
                      padding: "10px",
                    }}
                  />
                </div>

                <div className="col-md-8">
                  <div className="card-body">
                    <Link to={`/beers/${beer._id}`}>
                      <h3
                        className="card-title"
                        style={{
                          color: "#4db8ff",
                          fontSize: "1.6",
                        }}
                      >
                        {beer.name}
                      </h3>
                    </Link>
                    <h5
                      className="card-text"
                      style={{ color: "grey", fontSize: "1.1rem" }}
                    >
                      {beer.tagline}
                    </h5>
                    <p className="card-text">
                      <small className="text-muted">
                        Created by:
                        {beer.contributed_by}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
