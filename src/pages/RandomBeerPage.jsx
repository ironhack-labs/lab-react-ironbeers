import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";
import { useParams, Link } from "react-router-dom";

function RandomBeersPage() {
  const [singleBeer, setSingleBeer] = useState([]);
  const { beerId } = useParams();

  useEffect(() => {
    async function getSingleBeer() {
      try {
        const response = await axios.get(
          `https://ih-beers-api2.herokuapp.com/beers/random`
        );
        console.log(response);
        setSingleBeer(response.data);
      } catch (err) {
        console.log("Something went wrong!", err);
      }
    }
    getSingleBeer();
  }, []);

  return (
    <div className="content-div">
      <h2>Surprise!</h2>
      <ReactConfetti></ReactConfetti>
      <div className="beer-card">
        <img src={singleBeer.image_url} alt="" />
        <h3>{singleBeer.name}</h3>
        <h4>{singleBeer.tagline}</h4>
        <p>{singleBeer.first_brewed}</p>
        <p>{singleBeer.attenuation_level}</p>
        <p>{singleBeer.description}</p>
        <p>{singleBeer.contributed_by}</p>
        <Link to={`/beers`}>
          <button>Back to the bar, baby!</button>
        </Link>
        <hr />
      </div>
    </div>
  );
}

export default RandomBeersPage;
