import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header";

function SingleBeer({ beerData, isLoading, isError }) {
  // console.log(beerData);
  const { id } = useParams();
  // console.log(id);

  const singleBeer = beerData.filter((beer) => {
    return beer._id === id;
  });

  // console.log("singleBeer: ", singleBeer);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "6rem",
        }}
      >
        <h3>Fetching data. Please wait...</h3>
      </div>
    );
  }

  if (isError) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "6rem",
        }}
      >
        <h3>An error occured, please refresh the page.</h3>
      </div>
    );
  }

  if (!isLoading) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div>
          <Header />
        </div>
        <div className="singleBeerMainDiv">
          <div className="beerImg" style={{ marginBottom: "40px" }}>
            <img
              style={{ height: "300px" }}
              src={singleBeer[0].image_url}
              alt="yummy beer"
            ></img>
          </div>
          <div className="singleBeerDescription">
            <div className="singleBeerLine">
              <h2>{singleBeer[0].name}</h2>
              <p style={{ fontSize: "2rem", color: "#aaa" }}>
                {singleBeer[0].attenuation_level}
              </p>
            </div>
            <div className="singleBeerLine">
              <p
                style={{
                  fontSize: "1.25rem",
                  color: "#aaa",
                  fontWeight: "500",
                }}
              >
                {singleBeer[0].tagline}
              </p>
              <p>
                <b>{singleBeer[0].first_brewed}</b>
              </p>
            </div>
            <p className="singleBeerDescriptionP">
              {singleBeer[0].description}
            </p>
            <p style={{ textAlign: "left", color: "#aaa", fontWeight: "500" }}>
              {singleBeer[0].contributed_by}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleBeer;
