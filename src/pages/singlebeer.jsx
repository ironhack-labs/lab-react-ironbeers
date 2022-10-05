import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../components/header";

function SingleBeer() {
  const [single, setSingle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((result) => {
        // console.log(result.data);
        setSingle(result.data);
      })
      .catch((err) => {
        console.log("err:", err);
        setIsError(true);
      });
  }, [id]);
  return (
    <div>
      <Header />
      <div style={{ flexDirection: "column", justifyContent: "center" }}>
        <img
          src={single.image_url}
          alt="beerimage"
          style={{ height: "300px" }}
        />
        <div style={{ height: "300px", width: "100%" }}>
          <h2>{single.name}</h2>
          <p>{single.tagline}</p>
          <p>{single.first_brewed}</p>
          <p>{single.attenuation_level}</p>
          <p>{single.description}</p>
          <p>{single.contributed_by}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleBeer;
