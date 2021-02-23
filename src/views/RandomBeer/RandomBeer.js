import axios from 'axios';
import React from 'react';
import BeerCard from '../../components/BeerCard/BeerCard';
import NavBar from '../../components/NavBar/NavBar'

function RandomBeer() {
  const [randomBeer, setRandomBeer] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const getBeer = async () => {
    const { data } = await axios.get(
      'https://ih-beers-api2.herokuapp.com/beers/random'
    );
    setRandomBeer(data);
    setLoading(true);
  };
  React.useEffect(() => {
    getBeer();
  }, []);
  return (
    <div>
    <NavBar/>
      {loading ? <BeerCard beer={randomBeer}></BeerCard> : <p>Loading...</p>}
    </div>
  );
}
export default RandomBeer;
