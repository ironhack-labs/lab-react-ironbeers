import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AllBeersPage() {
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setData(response.data);
      console.log("data:", data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchData();
    console.log("data:", data);
  }, []);

  return (
    <div className="beerList">
      <div className="beerContainer">
        <img
          src="https://assets.untappd.com/site/beer_logos_hd/beer-106372_96402_hd.jpeg"
          alt=""
        />
        <div className="beerTextContainer">
          <h2>Double Brown</h2>
          <p>The best beer in the world</p>
          <span>
            <b>Create by:</b>Double Brown NZ
          </span>
        </div>
      </div>
      {data && data.length > 0 ? (
        data.map((beer, index) => (
          <div key={index} className="beerContainer">
            <img src={beer.image_url} alt="" />
            <div className="beerTextContainer">
              <h2>
                <Link to={`/beers/${beer._id}`}>{beer.name}</Link>
              </h2>
              <p>{beer.tagline}</p>
              <span>
                <b>Create by:</b>
                {`${beer.contributed_by}`}
              </span>
            </div>
          </div>
        ))
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
}
