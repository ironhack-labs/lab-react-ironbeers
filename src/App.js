import { Route, Routes } from 'react-router-dom'
import BeerDetails from './components/BeerDetails'
import Beers from './components/Beers'
import CreateBeer from './components/CreateBeer'
import HomePage from './components/HomePage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/beers/:id" element={<BeerDetails />} />
        <Route path="/random-beer" element={<BeerDetails />} />
        <Route path="/new-beer" element={<CreateBeer />} />
      </Routes>
    </>
  )
}

export default App
