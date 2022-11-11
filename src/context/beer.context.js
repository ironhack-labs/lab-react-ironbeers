import { createContext, useEffect, useState } from 'react';
const BeerContext = createContext();

// CREATE A WRAPPER COMPONENT
function BeerProviderWrapper(props) {
  const [beers, setBeers] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchallBeers() {
      const apiURL = 'https://ih-beers-api2.herokuapp.com/beers';
      const response = await fetch(apiURL);
      const data = await response.json();

      setBeers(data);
      setLoading(false);
      console.log(data[0]);
    }
    fetchallBeers();
  }, []);

  return <BeerContext.Provider value={{ beers, loading }}>{props.children}</BeerContext.Provider>;
}

export { BeerContext, BeerProviderWrapper };
