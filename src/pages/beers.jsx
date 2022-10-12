import React, { useState, useEffect } from "react";
import Header from "../components/header";
import { useNavigate } from "react-router-dom";
import BeerInfo from "../components/beerInfo";

function Beers({ beerData, isLoading, isError }) {
  const navigate = useNavigate();

  // const [beerData, setBeerData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);

  // const navigate = useNavigate();

  // useEffect(() => {
  //   setIsLoading(true);
  //   axios
  //     .get("https://ih-beers-api2.herokuapp.com/beers")
  //     .then((result) => {
  //       // console.log(result.data);
  //       setBeerData(result.data);
  //     })
  //     .catch((err) => {
  //       console.log("err:", err);
  //       setIsError(true);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }, []);

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
