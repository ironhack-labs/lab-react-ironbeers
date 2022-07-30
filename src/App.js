import { Route, Routes } from 'react-router-dom'
import BeerDetails from './components/BeerDetails'
import Beers from './components/Beers'
import HomePage from './components/HomePage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/beers/:id" element={<BeerDetails />} />
        <Route path="/random-beer" element={<BeerDetails />} />
        <Route path="/new-beer" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
