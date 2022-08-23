import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function OneBeer() {
  const { id } = useParams();
  const [beer, setBeer] = useState({});

  const displayBeer = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${id}`
      );
      setBeer(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    displayBeer();
  }, [id]);

  return (
    <>
      <Link to={`/`}>
        <img className="Header"
          src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"
          alt="Back"
        />
      </Link>

      <div>
        {beer && (
          <div>
            <img src={beer.image_url} alt="" />
            <h1>{beer.name}</h1>
            <p>{beer.tagline}</p>
            <p>{beer.first_brewed}</p>
            <p>{beer.attenuation_level}</p>
            <h3>Description: {beer.description} </h3>
            <h3>Contributed by: {beer.contributed_by}</h3>

          </div>
        )}
      </div>

      <Link to={`/beers`}>
        <h1>Back to beers list</h1>
      </Link>
    </>
  );
}

export default OneBeer;