import React, { useEffect, useState } from "react";
import axios from "axios";

export default function RandomBeerPage() {
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers/random"
      );
      setData(response.data);
      console.log("data:", response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data ? (
    <div className="beerList">
      <div className="beerContainer">
        <img src={data.image_url} alt="" />
        <div className="beerTextContainer">
          <h2>{data.name}</h2>
          <p>{data.tagline}</p>
          <span>
            <b>Create by:</b>
            {`${data.contributed_by}`}
          </span>
        </div>
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
}
