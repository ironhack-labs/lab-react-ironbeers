import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";

export default function BeerDetails() {
  const { id } = useParams();
  const [beerDetails, setBeerDetails] = useState(undefined);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((response) => {
        console.log("response.data:", response.data);
        setBeerDetails(response.data);
      })
      .catch();
  }, [id]);

  const showDetails = (beerDetails) => {
    return (
      <div key={beerDetails._id}>
        <img src={beerDetails.image_url} alt="beer" />
        <h4>{beerDetails.name}</h4>
        <p>{beerDetails.tagline}</p>
        <p>First brewed: {beerDetails.first_brewed}</p>
        <p>Attenuation level: {beerDetails.attenuation_level}</p>
        <p>{beerDetails.description}</p>
        <p>Created by: {beerDetails.contributed_by}</p>
      </div>
    );
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}></Route>
      </Routes>

      <section>
        {beerDetails ? (
          showDetails(beerDetails)
        ) : (
          <p>loading beer details...</p>
        )}
      </section>
    </>
  );
}
