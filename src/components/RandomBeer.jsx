import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function Beers() {
  const baseUrl = "https://ih-beers-api2.herokuapp.com/beers";
  const [dataApiRandomly, setDataApiRandomly] = useState();

  useEffect(() => {
    const getDataFromApi = async () => {
      const data = await axios.get(baseUrl);
      const dataFetched = data.data;
      function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
      setDataApiRandomly(
        dataFetched[randomIntFromInterval(0, dataFetched.length - 1)]
      );
    };
    getDataFromApi();
  }, []);

  if (dataApiRandomly)
    return (
      <>
        <img className="medium-image" src={dataApiRandomly.image_url} alt="" />
        <p>{dataApiRandomly.name}</p>
        <p>{dataApiRandomly.tagline}</p>
        <p>{dataApiRandomly.first_brewed}</p>
        <p>{dataApiRandomly.attenuation_level}</p>
        <p>{dataApiRandomly.contributed_by}</p>
      </>
    );
  return <></>;
}

export default Beers;
