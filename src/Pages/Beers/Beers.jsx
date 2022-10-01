import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import axios from "axios";
import BeerInfo from "../../components/BeerInfo/BeerInfo";
import { useNavigate } from "react-router-dom";

const Beers = () => {
  const [beerData, setBeerData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers`)
      .then((result) => {
        console.log(result.data);
        setBeerData(result.data);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return <div>Getting the data...</div>;
  }

  if (isError) {
    return <div>Oopsie daisy there went something wrong</div>;
  }

  return (
    <div>
      <Header />
      {beerData.map((beer) => {
        return <BeerInfo beer={beer} key={beer._id} navigate={navigate} />;
      })}
    </div>
  );
};

export default Beers;
