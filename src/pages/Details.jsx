import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import HomeImage from "../assets/navbar.png";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Details() {
  const { beerId } = useParams();

  const [details, setDetails] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    detailsData();
  }, []);

  const detailsData = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
      );
      console.log(response);
      setDetails(response.data);
      setIsFetching(false);
    } catch (err) {
      console.log(err);
    }
  };

  if (isFetching === true) {
    return <h3>...searching</h3>;
  }

  return (
    <div>
      <div>
        <Link to="/">
          <img src={HomeImage} alt="navbar-home" />
        </Link>
      </div>
      <h4>Detalles de la Cerveza</h4>

      <div className="divDetails">
        <img src={details.image_url} width={100} />
        <h5>{details.name}</h5>
        <p>{details.tagline}</p>
        <p>{details.first_brewed}</p>
        <p>{details.attenuation_level}</p>
        <p>{details.description}</p>
        <p>{details.contributed_by}</p>
        <p></p>
      </div>
    </div>
  );
}

export default Details;
