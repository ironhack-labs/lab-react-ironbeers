import Header from "./Header";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";

function DetailBeer(props) {
  const { beers } = props;
  const { beerId } = useParams();

  const [details, setDetails] = useState("");

  useEffect(() => {
    const beerDetails = beers.find((beer) => beer._id === beerId);
    setDetails(beerDetails);
  }, [beers, beerId]);

  return (
    <div>
          <Header />
          <p>Details {beerId}</p>
    </div>
  );
}

export default DetailBeer;
