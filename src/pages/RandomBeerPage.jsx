import { useEffect, useState } from "react";
import axios from "axios";

function RandomBeerPage() {
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        setBeer(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  if (!beer) {
    return <p>Loading...</p>;
  }

  return (
    <div className=" flex justify-center items-center h-screen bg-gray-100  flex-col  p-6 rounded shadow-md max-w-lg mx-auto">
      <img src={beer.image_url} alt={beer.name} className="w-40 mb-4" />
      <h1 className="text-2xl font-bold mb-2">{beer.name}</h1>
      <p className="text-xl text-gray-600 mb-2">{beer.tagline}</p>
      <p className="text-gray-600 mb-2">First brewed: {beer.first_brewed}</p>
      <p className="text-gray-600 mb-2">
        Attenuation level: {beer.attenuation_level}
      </p>
      <p className="text-gray-600 mb-2">{beer.description}</p>
      <p className="text-gray-600">Contributed by: {beer.contributed_by}</p>
    </div>
  );
}

export default RandomBeerPage;
