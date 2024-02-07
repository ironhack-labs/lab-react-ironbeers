import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function BeerDetailsPage() {
  const [beer, setBeer] = useState(null);
  const { beerId } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((result) => {
        console.log(result.data);
        setBeer(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [beerId]);

  if (!beer)
    return (
      <div>
        <Navbar></Navbar>
        <p className="loading">loading..</p>
      </div>
    );
  if (beer)
    return (
      <>
        <Navbar></Navbar>
        <div className="one-wrapper">
          <div className="one-img-wrapper">
            <img src={beer.image_url} alt="" />
          </div>
          <div className="one-info-wrapper">
            <h1>{beer.name}</h1>
            <h2>{beer.tagline}</h2>
            <h2> {beer.first_brewed} </h2>
            <h1>{beer.attenuation_level}</h1>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
          </div>
        </div>
      </>
    );
}

export default BeerDetailsPage;

// image
// name
// tagline
// first_brewed
// attenuation_level
// description
// contributed_by
