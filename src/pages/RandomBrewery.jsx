import { useState, useEffect } from "react";

function RandomBreweryPage() {
  const [randomBrewery, setRandomBrewery] = useState({});

  useEffect(() => {
    fetch(`https://api.openbrewerydb.org/v1/breweries/random`)
      .then((response) => response.json())
      .then((data) => {
        setRandomBrewery(data);
      })

      .catch((err) => console.log(err));
    console.log(randomBrewery);
  }, []);

  if (!randomBrewery.name) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{randomBrewery[0].name}</h2>
      <p>Type: {randomBrewery[0].brewery_type}</p>
      <p>Country: {randomBrewery[0].country}</p>
      <p>website: {randomBrewery[0].website_url}</p>
    </div>
  );
}
export default RandomBreweryPage;
