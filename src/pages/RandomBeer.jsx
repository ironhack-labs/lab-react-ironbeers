import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import HomeImage from "../assets/navbar.png";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function RandomBeer() {
  const { beerRandom } = useParams();

  const [random, setRandom] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    randomBeer();
  }, []);

  const randomBeer = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/random`
      );
      console.log(response);
      setRandom(response.data);
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
        <div>
          <Link to="/">
            <img src={HomeImage} alt="navbar-home" />
          </Link>
        </div>
        <h4>Cerveza Random</h4>
        <div>
          <img src={random.image_url} width={100} />
          <h5>{random.name}</h5>
          <p>{random.tagline}</p>
          <p>{random.first_brewed}</p>
          <p>{random.attenuation_level}</p>
          <p>{random.description}</p>
          <p>{random.contributed_by}</p>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default RandomBeer;
