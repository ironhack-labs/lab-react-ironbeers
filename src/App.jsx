import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './page/HomePage'
import NavBar from './components/Navigation/Navigation'
import AllBeers from './components/AllBeers/AllBeers'
import RandomBeer from './components/RandomBeer/RandomBeer'
import NewBeer from './page/NewBeer'
import BeerDetails from './page/BeerDetails'
import Footer from './components/Footer/Footer'


function App() {

  return (

    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<AllBeers />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/beers/:beer_id" element={<BeerDetails />} />
      </Routes>
      <Footer />


    </div>

  )
}

export default App;
