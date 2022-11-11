import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { BeerContext } from '../context/beer.context';

function SingleBeer() {
  const { beers, loading } = useContext(BeerContext);
  const { beerId } = useParams();
  const selectedBeer = beers.find((beer) => {
    return beer._id === beerId;
  });

  return (
    <>
      <p>{selectedBeer.name}</p>
    </>
  );
}
export default SingleBeer;
