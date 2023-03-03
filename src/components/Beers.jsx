import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Beers() {
  const baseUrl = "https://ih-beers-api2.herokuapp.com/beers";
  const [dataApi, setDataApi] = useState();
  const [showDataApi, setShowDataApi] = useState();

  const handleBeerData = (e) => {
    const replicateArray = [...dataApi];

    const arrayToChange = replicateArray.filter((el) => {
      return el.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setShowDataApi(arrayToChange);
  };
  useEffect(() => {
    const getDataFromApi = async () => {
      const data = await axios.get(baseUrl);
      setDataApi(data.data);
      setShowDataApi(data.data);
    };
    getDataFromApi();
  }, []);

  return (
    <>
      <input type="text" onChange={handleBeerData} />
      {showDataApi &&
        showDataApi.map((el, index) => (
          <Link key={index} to={`/beers/${el._id}`} className="flex-container">
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
