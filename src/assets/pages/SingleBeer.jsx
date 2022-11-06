import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

function SingleBeer() {
  const { beerId } = useParams();

  const [details, setDetails] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
      );
      // actualizar estado
      setDetails(response.data);
      setIsFetching(false);
    } catch (error) {
      console.log(error);
    }
  };
  // loading
  if (isFetching === true) {
    return <h3>...loading</h3>;
  }

  return (
    <div>
      <nav
        style={{
          backgroundColor: "lightblue",
          height: "80px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to={"/"}>
          <img src={require("../home.png")} alt="Home" width={"30px"} />
        </Link>
      </nav>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px",
        }}
      >
        <img
          src={details.image_url}
          alt="img-beer"
          style={{ width: "100px" }}
        />
        <div >
          <h2>{details.name}</h2>
          <div style={{display:'flex',justifyContent:'flex-end'}}>
            <p><b>{details.first_brewed}</b></p>
            <p>{details.attenuation_level}</p>
          </div>
          <h5>{details.tagline}</h5>
          <p></p>
          <p>{details.description}</p>
          <p> Created by: {details.contributed_by.split("<", 1)}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleBeer;
