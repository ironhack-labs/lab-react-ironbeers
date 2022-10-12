import React from "react";
import Header from "../components/header";

function RandomBeer({ beerData, isLoading, isError }) {
  // console.log(beerData);

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
    // setTimeout(() => {}, 1000);

    const randomIndex = Math.floor(Math.random() * beerData.length);
    // console.log(randomIndex);
    const randomBeerData = beerData[randomIndex];
    // console.log(randomBeerData);

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
              src={randomBeerData.image_url}
              alt="yummy beer"
            ></img>
          </div>
          <div className="singleBeerDescription">
            <div className="singleBeerLine">
              <h2>{randomBeerData.name}</h2>
              <p style={{ fontSize: "2rem", color: "#aaa" }}>
                {randomBeerData.attenuation_level}
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
                {randomBeerData.tagline}
              </p>
              <p>
                <b>{randomBeerData.first_brewed}</b>
              </p>
            </div>
            <p className="singleBeerDescriptionP">
              {randomBeerData.description}
            </p>
            <p style={{ textAlign: "left", color: "#aaa", fontWeight: "500" }}>
              {randomBeerData.contributed_by}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
/*
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
              src={randomBeerData.image_url}
              alt="yummy beer"
            ></img>
          </div>
          <div className="singleBeerDescription">
            <div className="singleBeerLine">
              <h2>{randomBeerData.name}</h2>
              <p style={{ fontSize: "2rem", color: "#aaa" }}>
                {randomBeerData.attenuation_level}
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
                {randomBeerData.tagline}
              </p>
              <p>
                <b>{randomBeerData.first_brewed}</b>
              </p>
            </div>
            <p className="singleBeerDescriptionP">
              {randomBeerData.description}
            </p>
            <p style={{ textAlign: "left", color: "#aaa", fontWeight: "500" }}>
              {randomBeerData.contributed_by}
            </p>
          </div>
        </div>
      </div>
    
*/
export default RandomBeer;
