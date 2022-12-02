import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
const SingleBeer = ({ beer }) => {
  const { _id } = useParams();
  const [singleBeerDetail, setSingleBeerDetail] = useState({});
  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${_id}`)
      .then((response) => {
        console.log("response.data:", response.data);
        setSingleBeerDetail(response.data);
      });
  }, [_id]);
  return (
    <>
      <Navbar/>
      <div className="card" style={{ width: "30rem" }}>
        <img
          src={singleBeerDetail.image_url}
          className="card-img-top"
          alt="single-beer-img"
          style={{ height: "30rem", width: "15rem" }}
        />
        <div className="card-body">
          <h5 className="card-title">{singleBeerDetail.name}</h5>
          <p className="card-text">{singleBeerDetail.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            First Brewed : {singleBeerDetail.first_brewed}
          </li>
          <li className="list-group-item">
            Tagline: {singleBeerDetail.tagline}
          </li>
          <li className="list-group-item">
            Contributed By {singleBeerDetail.contributed_by}
          </li>
        </ul>
        <div className="card-body"></div>
      </div>
    </>
  );
};

export default SingleBeer;
