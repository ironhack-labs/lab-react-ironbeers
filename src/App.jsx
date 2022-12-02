import { Route, Routes } from 'react-router-dom'

import './App.css'
import HomePage from './components/HomePage/HomePage'
import ListBeers from './components/ListBeers/ListBeers'
import Navigation from './components/Navigation/Navigation'
import NewBeer from './components/NewBeer/NewBeer'
import RandomBeer from './components/RandomBeer/RandomBeer'


function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/beers' element={<ListBeers />} />
        <Route path='/random-beer' element={<RandomBeer />} />
        <Route path='/new-beer' element={<NewBeer />} />
      </Routes>
    </div>
  )
}

export default App
