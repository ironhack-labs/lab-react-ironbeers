import GridLoader from 'react-spinners/GridLoader';
import { useContext, useState } from 'react';
import { BeerContext } from '../context/beer.context';

import BeerListCard from '../components/BeerListCard';

function Beers() {
  const { beers, setBeers, loading, setLoading } = useContext(BeerContext);
  const [inputState, setInputState] = useState('');

  async function fetchBeerSearch(input) {
    const apiURL = `https://ih-beers-api2.herokuapp.com/beers/search?q=${input}`;
    const response = await fetch(apiURL);
    const data = await response.json();

    setBeers(data);
    setLoading(false);
  }

  const handleChange = (e) => {
    setLoading(true);
    setInputState(e.target.value);
    fetchBeerSearch(e.target.value);
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <input className="input-style" onChange={handleChange} value={inputState} placeholder="Filter Beer" />
      </div>
      {loading && (
        <div className="flex">
          <GridLoader color="#36d7b7" />
        </div>
      )}
      {!loading && (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {beers.map((beer) => (
            <BeerListCard key={beer._id} beer={beer} />
          ))}
        </div>
      )}
    </>
  );
}
export default Beers;
