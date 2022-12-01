import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Beer from './components/Beer/Beer'
import RandomBeer from './components/RandomBeer/RandomBeer'
import NewBeer from './components/NewBeer/NewBeer'
import HomePage from './components/HomePage/HomePage';
import BeerDetail from './components/BeersDetails/BeersDetails';


function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<Beer />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/beers/:_id" element={<BeerDetail />} />
        <Route path="/new-beer" element={<NewBeer />} />

      </Routes>

    </div>

  )
}

export default App
