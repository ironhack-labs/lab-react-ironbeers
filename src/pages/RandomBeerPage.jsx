import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import beersJSON from "./../assets/beers.json";
import axios from 'axios';


function RandomBeersPage() {
  // Mock initial state, to be replaced by data from the Beers API. Store the beer info retrieved from the Beers API in this state variable.
  const [randomBeer, setRandomBeer] = useState(beersJSON[0]);

  // React Router hook for navigation. We use it for the back button. You can leave this as it is.
  const navigate = useNavigate();


  
  // TASKS:
  // 1. Set up an effect hook to make a request for a random beer from the Beers API.
  // 2. Use axios to make a HTTP request.
  // 3. Use the response data from the Beers API to update the state variable.

  useEffect(() => {
		const fetchRandomBeer = async () => {
			try {
				const { data } = await axios.get(
					`https://ih-beers-api2.herokuapp.com/beers/random`
				);
				setRandomBeer(data);
				console.log(data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchRandomBeer();
	}, []);




  // The logic and the structure for the page showing the random beer. You can leave this as it is.
  return (
    <div className="d-inline-flex flex-column justify-content-center align-items-center w-100 p-4">
      <h2>Random Beer</h2>

      {randomBeer && (
        <>
          <img
            src={"https://assets.untappd.com/photos/2023_09_30/c39031e596c4107e4821139045f0b12b_640x640.jpg"}
            alt="beer"
            height="300px"
            width="auto"
          />
          <h3>{randomBeer.name}</h3>
          <p>{randomBeer.tagline}</p>
          <p>Attenuation level: {randomBeer.attenuation_level}</p>
          <p>Description: {randomBeer.description}</p>
          <p>Created by: {randomBeer.contributed_by}</p>
          <Link to="/">
          <button
            className="btn btn-primary"
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </button>
          </Link>
        </>
      )}
    </div>
  );
}

export default RandomBeersPage;
