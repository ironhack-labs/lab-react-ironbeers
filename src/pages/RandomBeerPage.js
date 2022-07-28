import axios from 'axios';
import { useEffect, useState } from 'react';
import BeerDetails from '../components/BeerDetails';
import Header from '../components/Header';

function RandomBeerPage(){

  const [beerInfo, setBeerInfo] = useState(null);

  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then(response => {
        console.log(response.data)
        setBeerInfo(response.data);
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <Header />
      {!beerInfo && <h1>Loading beer info</h1>}
      {beerInfo && (
        <BeerDetails beerInfo={beerInfo} />
      )}
    </div>
    
  );

}

export default RandomBeerPage;