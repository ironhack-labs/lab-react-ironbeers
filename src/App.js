import './App.css';
import HomePage from './components/HomePage';
import { Routes, Route } from 'react-router-dom'
import Beers from './pages/Beers'
import NewBeer from './pages/NewBeer'
import RandomBeer from './pages/RandomBeer'
import Navbar from './components/Navbar';
import BeersDetails from './pages/BeersDetails';


function App() {

  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/beers" element={<Beers/>}/>
          <Route path="/beers/:beerId" element={<BeersDetails/>}/>
          <Route path="/new-beer" element={<NewBeer/>}/>
          <Route path="/random-beer" element={<RandomBeer/>}/>
        </Routes> 
    </div>
  );
}

export default App;
