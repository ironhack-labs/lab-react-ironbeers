import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Beers from './pages/Beers'
import RandomBeer from './pages/RandomBeer'
import NewBeer from './pages/NewBeer'
import Axios from 'axios'
import SingleBeer from './pages/SingleBeer'
import ErrorPage from './pages/ErrorPage'


function App() {
  const [BeerApi, setBeerApi] = useState([])

  useEffect(() => {
    Axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then((res) => setBeerApi(res.data))
  }, [])

  return (
    <div className="App">
      <Router>
        {/* nav */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/beers' element={<Beers  beerApi={BeerApi} />} />
          <Route path='/beers/:id' element={<SingleBeer beerApi={BeerApi} />} />
          <Route path='/random-beer' element={<RandomBeer beerApi={BeerApi}  />} />
          <Route path='/new-beer' element={<NewBeer  />} />
          <Route path='*' element={<ErrorPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
