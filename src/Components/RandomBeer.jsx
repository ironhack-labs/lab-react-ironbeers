import { useState, useEffect } from "react"; 
import axios from "axios";
import Header from "./Header"; 

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState(null); // Setting up state for randomBeer

  useEffect(() => { // Using the useEffect hook to fetch random beer data on component mount
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random") // Making a GET request to the API
      .then((beerRandom) => {
        console.log(beerRandom.data); // Logging the response data to the console
        setRandomBeer(beerRandom.data); // Setting randomBeer state with the response data
      })
      .catch((error) => {
        console.log(error); // Logging any errors to the console
      });
  }, []);

  return (
    <div className="random-beer">
      <Header /> 
      {randomBeer && ( // Using conditional rendering to check if randomBeer state is truthy
        <div className="card"> 
          <img src={randomBeer.image_url} alt={randomBeer.name} />
          <div className="card-body">
            <h2>{randomBeer.name}</h2>
            <p>{randomBeer.tagline}</p>
            <p>First brewed: {randomBeer.first_brewed}</p>
            <p>Attenuation level: {randomBeer.attenuation_level}</p>
            <p>{randomBeer.description}</p>
            <p>Contributed by: {randomBeer.contributed_by}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default RandomBeer;
