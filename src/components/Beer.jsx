import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Beer() {
  const baseUrl = "https://ih-beers-api2.herokuapp.com/beers";
  const { id } = useParams();

  const [dataApi, setDataApi] = useState();

  useEffect(() => {
    const getDataFromApi = async () => {
      const data = await axios.get(`${baseUrl}/${id}`);
      console.log(data.data);
      setDataApi(data.data);
    };
    getDataFromApi();
  }, [id]);

  if (dataApi)
    return (
      <>
        <img className="medium-image" src={dataApi.image_url} alt="" />
        <p>{dataApi.name}</p>
        <p>{dataApi.tagline}</p>
        <p>{dataApi.first_brewed}</p>
        <p>{dataApi.attenuation_level}</p>
        <p>{dataApi.contributed_by}</p>
      </>
    );
  return <></>;
}

export default Beer;
