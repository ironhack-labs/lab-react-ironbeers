import { useEffect, useState } from 'react';
import './App.css';
import BeerList from './components/BeersList/BeerList';
import { getBeers } from './services/BeersService';

function App() {

  const [beersData, setBeersData] = useState([])

  useEffect(() => {
    getBeers()
      .then(beers => {
        setBeersData(beers)
      })
  }, [])


  return (
    <div className="App d-flex justify-content-center">
      <BeerList beersData={beersData} />
    </div>
  );
}

export default App;
