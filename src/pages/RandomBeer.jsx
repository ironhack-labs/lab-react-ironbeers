import { useEffect, useState } from 'react';
import GridLoader from 'react-spinners/GridLoader';
import SingleBeerComponent from '../components/SingleBeerComponent';

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRandomBeer() {
      const apiURL = 'https://ih-beers-api2.herokuapp.com/beers/random';
      const response = await fetch(apiURL);
      const data = await response.json();
      setRandomBeer(data);
      setLoading(false);
    }
    fetchRandomBeer();
  }, []);

  return (
    <>
      {loading && (
        <div className="flex">
          <GridLoader color="#36d7b7" />
        </div>
      )}
      {!loading && <SingleBeerComponent aBeer={randomBeer} />}
    </>
  );
}
export default RandomBeer;
