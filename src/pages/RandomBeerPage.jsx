import axios from "axios";
import { useEffect, useState } from "react";

function RandomBeersPage() {
  const [beer, setBeer] = useState();
  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        setBeer(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!beer) {
    return (<div>is loading</div>)
  }
  return (
    <div>
         <img src={beer.image_url}/>
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
