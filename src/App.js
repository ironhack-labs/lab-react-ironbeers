import { useState, useEffect } from 'react';
import './App.css';
import BeersList from './components/BeersList/BeersList';
import { getBeers } from './services/beersService'

function App() {

  const [beersData, setBeersData] = useState([]);

  useEffect(() => {
    getBeers()
      .then(beers => setBeersData(beers))
  })

  return (
    <div className="App">
      <BeersList beersData={beersData} />
    </div>
  );
}

export default App;
