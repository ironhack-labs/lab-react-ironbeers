import React from "react";
import Header from "../../components/Header/Header";

import BeerInfo from "../../components/BeerInfo/BeerInfo";
import { useNavigate } from "react-router-dom";

const Beers = ({ beerData }) => {
  const navigate = useNavigate();

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
