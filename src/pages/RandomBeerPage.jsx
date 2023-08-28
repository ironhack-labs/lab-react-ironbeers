import axios from "axios";
import { useState, useEffect } from "react";

function RandomBeersPage() {
  const [foundRandomBeer, setRandomBeer] = useState("");

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        setRandomBeer(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <div>
      <h3 className="text-center mt-5 mb-4">Random Beers</h3>
      <div className="container text-center card w-25">
        <div className="d-flex justify-content-center">
          <img
            className="card-img-top w-25 text-center"
            src={foundRandomBeer.image_url}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{foundRandomBeer.name}</h5>
          <p className="card-text">{foundRandomBeer.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{foundRandomBeer.tagline}</li>
          <li className="list-group-item">{foundRandomBeer.first_brewed}</li>
          <li className="list-group-item">
            {foundRandomBeer.attenuation_level}
          </li>
          <li className="list-group-item">
            Created by:{foundRandomBeer.contributed_by}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RandomBeersPage;
