import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { NavBar, BeerDetail } from "../../../components";

function BeerDetailScreeen() {
  const { id } = useParams();
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((res) => {
        console.log(res.data);
        setBeer(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <NavBar />
      {beer ? <BeerDetail {...beer} /> : "Loading..."}
    </div>
  );
}

export default BeerDetailScreeen;
