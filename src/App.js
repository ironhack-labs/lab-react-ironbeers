import ListBeers from './Pages/ListBeers';
import HomePage from './Pages/HomePage';
import { Route, Routes } from 'react-router-dom'; 
import SingleBeer from './Pages/SingleBeer';
import RandomBeer from './Pages/RandomBeer'
import NewBeer from './Pages/NewBeer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<ListBeers/>}/>
        <Route path="/beers/:beerId" element={<SingleBeer/>}/>
        <Route path="/random-beer" element={<RandomBeer/>}/>
        <Route path="/new-beer" element={<NewBeer/>}/>
      </Routes>
    </div>
  );
}

export default App;
