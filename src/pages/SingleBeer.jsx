import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SingleBeerComponent from '../components/SingleBeerComponent';
import GridLoader from 'react-spinners/GridLoader';

function SingleBeer() {
  const { beerId } = useParams();

  const [selectedBeer, setSelectedBeer] = useState();
  const [singleLoading, setSingleLoading] = useState(true);

  useEffect(() => {
    async function fetchOneBeer() {
      const apiURL = `https://ih-beers-api2.herokuapp.com/beers/${beerId}`;
      const response = await fetch(apiURL);
      const data = await response.json();
      setSelectedBeer(data);
      setSingleLoading(false);
      console.log(data);
    }
    fetchOneBeer();
  }, [beerId]);

  return (
    <>
      {singleLoading && (
        <div className="flex">
          <GridLoader color="#123456" />
        </div>
      )}
      {!singleLoading && <SingleBeerComponent aBeer={selectedBeer} />}
    </>
  );
}
export default SingleBeer;
