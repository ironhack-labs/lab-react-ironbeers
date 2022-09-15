import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/nav-bar/Navbar";
import { useParams } from "react-router";
import DetailBeer from "../../components/detail-beer/DetailBeer";

function DetailPage() {
  const {id} = useParams()
  const [beer, setBeer] = useState({});

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((res) => {
        console.log(res.data);
        setBeer(res.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <>
      <Navbar />
      <DetailBeer {...beer} />
    </>
  );
}

export default DetailPage;
