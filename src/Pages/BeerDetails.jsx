import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import HomeHead from "../assets/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png";

const BeerDetails = () => {
  const [beerDetail, setBeerDetail] = useState([]);

  const params = useParams();
  console.log(params);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${params.beerId}`)
      .then((response) => {
        if(!response.data){
            console.log('error API not found')
        }
        console.log("detail", response.data);
        setBeerDetail(response.data);
      })
  }, []);


  return (
    <>
      <header>
        <Link to={"/"}>
          <img src={HomeHead} />
        </Link>
      </header>
        <div className="beerDetail">
          <img src={beerDetail.image_url}></img>
          <h2>{beerDetail.name}</h2>
          <h3>{beerDetail.tagline}</h3>
          <p className="brewed"> {beerDetail.first_brewed} </p>
          <p className="attenuation"> {beerDetail.attenuation_level}</p>
          <p className="description"> {beerDetail.description} </p>
          <p>{beerDetail.contributed_by}</p>
        </div>
      ;
    </>
  );
};

export default BeerDetails;
