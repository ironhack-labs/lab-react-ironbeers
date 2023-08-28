import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function BeerDetailsPage() {
  const [foundBeer, setFoundBeer] = useState(null);

  const [fetching, setFetching] = useState(true);

  const { beerId } = useParams();

  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`).then(
      (response) => {
        setFoundBeer(response.data);
        setFetching(false);
        console.log(response.data);
      },
      [beerId]
    );
  });

  return (
    <div className=" container">
      {!foundBeer && <p>Beer not found</p>}
      {foundBeer && (
    <div>
    <h3 className="text-center mt-5 mb-4">Beer Details</h3>
    <div className="container text-center card w-25">
      <div className="d-flex justify-content-center">
        <img
          className="card-img-top w-25 text-center"
          src={foundBeer.image_url}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{foundBeer.name}</h5>
        <p className="card-text">{foundBeer.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{foundBeer.tagline}</li>
        <li className="list-group-item">{foundBeer.first_brewed}</li>
        <li className="list-group-item">
          {foundBeer.attenuation_level}
        </li>
        <li className="list-group-item">
          Created by:{foundBeer.contributed_by}
        </li>
      </ul>
    </div>
  </div>
      )}
    </div>
  );
}

export default BeerDetailsPage;
