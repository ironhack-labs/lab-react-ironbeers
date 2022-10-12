import React from "react";
import Header from "../components/header";
import { useNavigate } from "react-router-dom";
import BeerInfo from "../components/beerInfo";

function Beers({ beerData, isLoading, isError }) {
  const navigate = useNavigate();

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
        Beers
        <div className="beersDiv">
          {beerData.map((beer) => {
            return <BeerInfo beer={beer} key={beer._id} navigate={navigate} />;
          })}
        </div>
      </div>
    );
  }
}

export default Beers;
