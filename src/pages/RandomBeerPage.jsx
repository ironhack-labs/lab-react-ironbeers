import { useEffect, useState } from "react";

function RandomBeersPage() {
  const [beer, setBeer] = useState;

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        setBeer(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
         <img src={beer.image}/>
            {beer.name}
            {beer.tagline}
            {beer.first_brewed}
            {beer.attenuation_level}
            {beer.description}
            {beer.contributed_by}
    </div>
  )
}

export default RandomBeersPage;