import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BeerDetails from '../components/BeerDetails';
import Header from '../components/Header';

function SingleBeerPage(){

  const [beerInfo, setBeerInfo] = useState(null);

  const { beerId } = useParams();

  useEffect(() => {
    console.log(beerId)
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then(response => {
        console.log(response.data)
        setBeerInfo(response.data);
      })
      .catch(err => console.log(err))
  }, [ beerId ])

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

export default SingleBeerPage;