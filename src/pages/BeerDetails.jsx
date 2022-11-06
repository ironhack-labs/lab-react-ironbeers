import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function BeerDetails() {
  const [selectedBeer, setSelectedBeer] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const { beerId } = useParams();

  //console.log(beerId)

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const beerDetails = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
      );
      console.log(beerDetails.data);
      setSelectedBeer(beerDetails.data);
      setIsFetching(false);
    } catch (error) {
      console.log(error);
    }
  };
  if (isFetching) {
    <p>Loading...</p>;
  } else {
  }

  /* regex for short contributed name */
  const regex = /([<])\w+/g;
  // copy for replace, slice methods

  return (
    <div>
      <NavBar />
    <div style={{ display: "flex",flexDirection:"column", justifyContent: "center",alignItems:"center", margin: "50px" }}>
      <div
        style={{
          width: "20%",
          border: "1px solid",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "50px",
        }}
      >
        <img
          src={selectedBeer.image_url}
          alt=""
          style={{ width: "100px", height: "250px" }}
        />
        <h1>{selectedBeer.name}</h1>
        <h5>{selectedBeer.tagline}</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis nihil
          veritatis animi, quas minus quo ab! Voluptates error suscipit
          dignissimos nesciunt cum quis optio, magnam, numquam sequi, modi
          aperiam dicta.
        </p>
        <p>{selectedBeer.contributed_by}</p>
      </div>
    </div>
    </div>
  );
}

export default BeerDetails;
