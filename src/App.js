import './App.css';
import Home from './components/Home'
import Header from './components/Header';
import AllBeers from './components/AllBeers';
import SingleBeer from './components/SingleBeer';
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer';
import {Routes,Route,NavLink} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='' element={<Home />}/>
      <Route path='/all-beers' element={
        <div>
          <Header />
          <AllBeers />
        </div>
      }/>
      <Route path='/single-beer/:beerId' element={
        <div>
          <Header />
          <SingleBeer />
        </div>
      }/>
      <Route path='/random-beer' element={
        <div>
          <Header />
          <RandomBeer />
        </div>
      }/>
      <Route path='/new-beer' element={
      <div>
        <Header />
        <NewBeer />
      </div>
      }/>
    </Routes>
    </div>
  );
}

export default App;
