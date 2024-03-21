import "./App.css";
import {Routes, Route} from 'react-router-dom';
import AddBeerPage from "./pages/AddBeerPage";
import AllBeersPage from "./pages/AddBeerPage";
import BeerDetailsPage from "./pages/BeerDetailsPage";
import HomePage from "./pages/HomePage";
import RandomBeerPage from "./pages/RandomBeerPage"

function App() {
  return (
    <div className="App">
      <h1>LAB | React IronBeers</h1>
      <Routes>
        <Route path='/new-beer' element={<AddBeerPage/>}/>
        <Route path='/beers' element={<AllBeersPage/>}/>
        <Route path='/beers/:beerId' element={<BeerDetailsPage/>}/>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/random-beer' element={<RandomBeerPage/>}/>
        

      </Routes>
    </div>
  );
}

export default App;
