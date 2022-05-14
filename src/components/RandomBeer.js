import axios from "axios";
import { Link } from "react-router-dom";
import Header from "./Header";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';




function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState(null);

  const { beerId } = useParams();
  console.log('beedId', beerId);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "/beers/random")
      .then((response) => {
        console.log('response.data', response.data);
        setRandomBeer(response.data)
      })
  }, [beerId]);


  return (
    <div>

      <Header />

      {!randomBeer && <h3>Sorry, no random beer!</h3>}

      {randomBeer && (
        <>
        <div key={randomBeer._id} className="card">
          <h1>{randomBeer.name} </h1>
          <img src={randomBeer.image_url} alt="beer" />
          <h2>{randomBeer.tagline}</h2>   <br />
          <h2>{randomBeer.first_brewed}</h2>
          <h2>{randomBeer.attenuation_level}</h2>
          <h2> {randomBeer.description}</h2>
          <h2>   {randomBeer.contributed_by}</h2>
          <Link to={`/beers`}>Back to List of Beers</Link>
        </div>
        </>
      )}
  </div>
      );
}




      export default RandomBeer;