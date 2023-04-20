import { useEffect, useState } from 'react';
import Card from '../components/Card';
import AllBeersImg from '../assets/beers.png';
import RandomBeerImg from '../assets/random-beer.png';
import AddNewBeerImg from '../assets/new-beer.png';

const HomePage = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const fetcher = async () => {
      //fetcher retorna uma promisse
      const response = await fetch('https://ih-beers-api2.herokuapp.com/beers');
      const json = await response.json();
      setBeers(json);
    };

    fetcher();
  }, []);

  if (!beers.length) return null; //se não tiver beers, nao renderiza nada

  const randomNumber = Math.floor(Math.random() * beers.length);

  return (
    <div>
      <Card
        title='All Beers'
        info='Information about all beers'
        imgUrl={AllBeersImg}
        to='/beers'
        state={beers}
      />
      <Card
        title='Random Beer'
        info='Information about a random beer'
        imgUrl={RandomBeerImg}
        to={'/beers/beerDetails'}
        state={beers[randomNumber]}
      />
      <Card
        title='New Beer'
        info='Create a new beer'
        imgUrl={AddNewBeerImg}
        to='/newBeer'
      />
    </div>
  );
};

export default HomePage;
