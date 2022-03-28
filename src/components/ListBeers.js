import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Searchbar } from "./Searchbar";

export const ListBeers = () => {
  const [beersList, setBeersList] = useState([]);
  const [isLoading, setLoading] = useState(true);

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

  //Searchbar
  // const [filterBeers, setFilterBeers] = useState(beersList);

  // const filterBeerList = (str) => {
  //   let filteredBeer =
  //     str === ""
  //       ? filterBeers
  //       : filterBeers.filter((beer) =>
  //           beer.name.toLocaleLowerCase().includes(str.toLocaleLowerCase())
  //         );

  //   setFilterBeers(filteredBeer);
  // };

  return (
    <>
      <Searchbar />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {isLoading && (
          <div className="spinner-border text-info" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        )}

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
