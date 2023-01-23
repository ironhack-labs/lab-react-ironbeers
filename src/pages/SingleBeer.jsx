import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export default function SingleBeer() {
  const { _id } = useParams();
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

  const foundBeer = beers.find((beer) => {
    return beer._id === _id;
  });

  if (!foundBeer) {
    return <p>Loading...</p>;
  }

  console.log(foundBeer);
  return (
    <div className="beer-details">
      <img src={foundBeer.image_url} alt="" width={80} />
      <div className="flex space-between m-b-16">
        <div className="beer-name">{foundBeer.name}</div>
        <div className="attenuation_level">{foundBeer.attenuation_level}</div>
      </div>
      <div className="flex space-between m-b-16">
        <div className="tagline">{foundBeer.tagline}</div>
        <div className="first_brewed bold">{foundBeer.first_brewed}</div>
      </div>
      <div className="flex column">
        <p className="description m-b-16">{foundBeer.description}</p>
        <div className="beer-contributedBy">{foundBeer.contributed_by}</div>
      </div>
    </div>
  );
}
