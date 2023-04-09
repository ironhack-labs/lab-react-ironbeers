
import './App.css';
import HomePage from './components/home';
import { Route, Routes } from 'react-router-dom';
import ListBeers from './components/list-beers';
import NewBeer from './components/new-beer';
import SingleBeer from './components/single-beer';
import RandomBeer from './components/random-beer';

function App() {
  return (
    <div className="App">
   


    
    <Routes>
    <Route path="/" element={ <HomePage/>}/>
    <Route path="/beers" element= { <ListBeers/>}/>
    <Route path="/create-beer" element={ <NewBeer/>}/>
     <Route path="/beers/:beerId" element={ <SingleBeer/>}/>
     <Route path="/random" element={<RandomBeer/>}/>
    </Routes>
    </div>
  );
}

export default App;
