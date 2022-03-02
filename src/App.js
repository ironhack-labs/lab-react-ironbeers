import './App.css';
import Home from './components/Home'
import ListBeers from './components/ListBeers'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'
import SingleBeer from './components/SingleBeer'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';

function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}></Route>   
        <Route path="/beers" element={<ListBeers />}></Route>
        <Route path="/random-beer" element={<RandomBeer />}></Route>
        <Route path="/new-beer" element={<NewBeer />}></Route>
        <Route path="/beers/:beerId" element={<SingleBeer />}></Route>
      </Routes>
    </div>
  );
}

export default App;
