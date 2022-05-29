import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BeerDetail from "../components/BeerDetail";

function SingleBeer() {
  const [singleBeer, setSingleBeer] = useState(null);
  const { id } = useParams();

  const getBeer = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${id}`
      );
      console.log(response.data);
      setSingleBeer(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBeer();
  }, []);

  return (
    <div>
      {singleBeer && (
    <BeerDetail beer={singleBeer}/>
      )}
    </div>
  );
}

export default SingleBeer;
