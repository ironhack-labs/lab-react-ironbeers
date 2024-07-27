import { useState, useEffect } from 'react';

function RandomBeerPage() {
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers/random")
      .then(response => response.json())
      .then(data => setBeer(data))
      .catch(error => console.error(error));
  }, []);

  if (!beer) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4 bg-gray-50">
      <img src={beer.image_url} alt={beer.name} className="h-80 mx-auto" />
      <div className="mt-4 flex justify-between items-start">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">{beer.name}</h1>
          <p className="text-lg text-gray-600">{beer.tagline}</p>
        </div>
        <div className='text-xl'>
          <p className="font-bold text-gray-600">{beer.attenuation_level}</p>
          <p className="mt-2 font-bold"></p>
          <p>{beer.first_brewed}</p>
        </div>
      </div>
      <p className="mt-2">{beer.description}</p>
      <p className="mt-2 text-gray-600"><strong>Contributed by:</strong> {beer.contributed_by}</p>
    </div>
  );
}

export default RandomBeerPage;

