import axios from "axios";
import React, { useEffect, useState } from "react";

import Beer from "../components/Beer";

const RandomBeer = ({ baseUrl }) => {
  const [beerDetails, setBeerDetails] = useState({});
  //   console.log(baseUrl);

  useEffect(() => {
    const oneBeerDetails = async () => {
      const { data } = await axios(`${baseUrl}/random`);
      console.log(data);
      setBeerDetails(data);
    };

    oneBeerDetails();
  }, []);

  return <Beer beer={beerDetails} />;
};

export default RandomBeer;
