import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Beer from "../components/Beer";

const BeerDetails = ({ baseUrl }) => {
  const [beerDetails, setBeerDetails] = useState({});
  const { id } = useParams();
  //   console.log(id);

  useEffect(() => {
    const oneBeerDetails = async () => {
      const { data } = await axios(`${baseUrl}/${id}`);
      //   console.log(data);
      setBeerDetails(data);
    };

    oneBeerDetails();
  }, []);

  return <Beer beer={beerDetails} />;
};

export default BeerDetails;
