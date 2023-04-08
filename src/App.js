import { useState, useEffect } from 'react'
import './App.css';
import BeersList from './components/BeersList';
import { getBeers } from './services/BeersService'

function App() {
  const [beersList, setBeersList] = useState([])

  useEffect(() => {
    getBeers()
    .then((beers) => {
      setBeersList(beers)
    })
    .catch((error) => console.error(error))
  }, [])

  console.log(beersList);

  return (
    <div className="App">
      <BeersList beers={beersList}/>
    </div>
  );
}

export default App;
