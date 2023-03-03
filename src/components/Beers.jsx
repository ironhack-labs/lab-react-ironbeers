import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Beers() {
  const baseUrl = "https://ih-beers-api2.herokuapp.com/beers";
  const [dataApi, setDataApi] = useState();
  useEffect(() => {
    const getDataFromApi = async () => {
      const data = await axios.get(baseUrl);
      console.log(data.data);
      setDataApi(data.data);
    };
    getDataFromApi();
  }, []);

  return (
    <>
      {dataApi &&
        dataApi.map((el) => (
          <Link to={`/beers/${el._id}`} className="flex-container">
            <img className="img-beers" src={el.image_url} alt="" />
            <div>
              <p>{el.name}</p>
              <p>{el.tagline}</p>
              <p>{el.contributed_by}</p>
            </div>
          </Link>
        ))}
    </>
  );
}

export default Beers;
