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

  console.log("singleBeer: ", singleBeer);

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
      <div>
        <div>
          <Header />
        </div>
        <div className="beerImg">
          <img src={singleBeer[0].image_url} alt="yummy beer"></img>
        </div>
        <div className="beerDescription">
          <h2>{singleBeer[0].name}</h2>
          <p>{singleBeer[0].attenuation_level}</p>
          <p>{singleBeer[0].tagline}</p>
          <p>{singleBeer[0].first_brewed}</p>
          <p>{singleBeer[0].description}</p>
          <p>{singleBeer[0].contributed_by}</p>
        </div>
      </div>
    );
  }
}

export default SingleBeer;
