import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function RandomBeer(props) {

    const [randomBeer, setRandomBeer] = useState(null);

useEffect(()=>{
    axios.get(process.env.REACT_APP_API_URL+"/random")
    .then((response) => {
        setRandomBeer(response.data);
      })
      .catch((e) => console.log(e));
  }, []);



  

  return (
    <div>
      {randomBeer ? (
        <div>
          <h1>{randomBeer.name}</h1>
          <img src={randomBeer.image_url} alt={randomBeer.name} />
          <p>{randomBeer.tagline}</p>
          <p>First Brewed: {randomBeer.first_brewed}</p>
          <p>Attenuation Level: {randomBeer.attenuation_level}</p>
          <p>Description: {randomBeer.description}</p>
          <p>Contributed By: {randomBeer.contributed_by}</p>
        </div>
      ) : (
        <p>Loading random beer...</p>
      )}
    </div>
  );
}

export default RandomBeer;
