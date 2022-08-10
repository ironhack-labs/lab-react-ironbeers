import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Beers from './pages/Beers'
import RandomBeer from './pages/RandomBeer'
import NewBeer from './pages/NewBeer'
import Axios from 'axios'
import SingleBeer from './pages/SingleBeer'


function App() {
  const [BeerApi, setBeerApi] = useState([])

  useEffect(() => {
    Axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then((res) => setBeerApi(res.data))
  }, [])

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/beers' element={<Beers  beerApi={BeerApi} />} />
          <Route path='/beers/:id' element={<SingleBeer beerApi={BeerApi} />} />
          <Route path='/random-beer' element={<RandomBeer  />} />
          <Route path='/new-beer' element={<NewBeer  />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
