import { useEffect, useState } from "react";
import axios from "axios";
export default function RandomBeer() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    async function loadBeers() {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setBeers(response.data);
    }
    loadBeers();
  }, []);

  const ramdomBeer = beers[Math.floor(Math.random() * beers.length)];

  if (!ramdomBeer) {
    return <p>Loading...</p>;
  }
  return (
    <div className="beer-details">
      <img src={ramdomBeer.image_url} alt="" width={80} />
      <div className="flex space-between m-b-16">
        <div className="beer-name">{ramdomBeer.name}</div>
        <div className="attenuation_level">{ramdomBeer.attenuation_level}</div>
      </div>
      <div className="flex space-between m-b-16">
        <div className="tagline">{ramdomBeer.tagline}</div>
        <div className="first_brewed bold">{ramdomBeer.first_brewed}</div>
      </div>
      <div className="flex column">
        <p className="description m-b-16">{ramdomBeer.description}</p>
        <div className="beer-contributedBy">{ramdomBeer.contributed_by}</div>
      </div>
    </div>
  );
}
