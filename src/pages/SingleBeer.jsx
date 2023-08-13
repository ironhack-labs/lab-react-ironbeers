import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

const SingleBeer = () => {
  const [beer, setBeer] = useState(null);

  const { beerId } = useParams();

  const getOneBeer = async () => {
    const oneBeer = await axios.get(
      `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
    );
    setBeer(oneBeer.data);
  };

  useEffect(() => {
    getOneBeer();
  }, []);

  return (
    <div>
      <Header />
      {!beer && <h1> Error 404 Beer no found</h1>}

      {beer && (
        <div className="single-beer">
          <img
            src={beer.image_url}
            alt=""
            style={{ width: "140px", height: "480px" }}
          />

          <div className="single-beer-row">
            <h1>{beer.name}</h1>
            <h1>{beer.attenuation_level}</h1>
          </div>
          <div className="single-beer-row">
            <h3>{beer.tagline}</h3>
            <h3>{beer.first_brewed}</h3>
          </div>

          <div>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleBeer;
