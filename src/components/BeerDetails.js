import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "./Header";

const BeerDetails = () => {
  const baseURL = "https://ih-beers-api2.herokuapp.com/beers/";

  const [beersArr, setBeersArr] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(baseURL + id)
      .then((response) => {
        setBeersArr(response.data);
        console.log(beersArr);
        console.log(response.data);
      })
      .catch((e) => {
        console.log("error getting beers from api...", e);
      });
  }, []);

  return (
    <>
      <div id="beerDetailCard">
        <Header />
        <img id="beerDetailImg" src={beersArr?.image_url} alt="beer" />
        <div class="whiteSunnies">
          <h2>{beersArr?.name}</h2>
          <h5>
            <i>{beersArr?.tagline}</i>
          </h5>
          <p>
            <b>First brewed: </b> {beersArr?.first_brewed}
          </p>
          <p>
            <b>Attenuation level: </b> {beersArr?.attenuation_level}
          </p>
          <p>
            <i>{beersArr?.description}</i>
          </p>
          <p>
            <b>Contributed by: </b> {beersArr?.contributed_by}
          </p>
          <Link to="/beers">Back</Link>
        </div>
      </div>
    </>
  );
};

export default BeerDetails;
