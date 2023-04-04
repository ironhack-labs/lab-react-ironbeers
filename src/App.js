import { useEffect, useState } from 'react';
import './App.css';
import BeerList from './components/BeersList/BeerList';
import { getBeers } from './services/BeersService';

function App() {

  const [beersData, setBeersData] = useState([])

  useEffect(() => {
    getBeers()
      .then(beers => {
        console.log(beers)
        setBeersData(beers)})
  }, [])


  return (
    <div className="App">
    <BeerList  beersData={beersData} />
    </div>
  );
}

export default App;
