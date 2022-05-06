import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Route, Routes } from 'react-router-dom'

import HomePage from './components/HomePage/HomePage'
import ListBeers from './components/ListBeers/ListBeers'
import SingleBeer from './components/SingleBeer/SingleBeer'
import RandomBeer from './components/RandomBeer/RandomBeer'
import NewBeer from './components/NewBeer/NewBeer'

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/beers" element={<ListBeers/>}/>
      <Route path="/beers/:id" element={<SingleBeer/>}/>
      <Route path="/random-beer" element={<RandomBeer/>}/>
      <Route path="/new-beer" element={<NewBeer/>}/>
    </Routes>
    </div>
  );
}

export default App;
