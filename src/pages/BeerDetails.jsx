import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BeerDetailsCard from "../components/BeerDetailsCard";

function BeerDetails() {
  const { id } = useParams();
  const [beer, setBeer] = useState();

  const getBeer = (id) => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((result) => {
        setBeer(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getBeer(id);
  }, [id]);

  if (!beer) return;

  return (
    <div>
      <BeerDetailsCard beer={beer} />
    </div>
  );
}

export default BeerDetails;
