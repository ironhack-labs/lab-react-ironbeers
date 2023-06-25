import BeerDetail from "./components/BeerDetail";
import BeersList from "./components/BeersList";
import FindBeer from "./components/FindBeer";
import NewBeer from "./components/NewBeer";
import RandomBeer from "./components/RandomBeer";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";


import './App.css';
import { Route, Routes} from 'react-router-dom';


function App() {

  return (
    <div className="App">

      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/list' element={<BeersList />} />
        <Route path='/:beerId' element={<BeerDetail />} />
        <Route path='/random' element={<RandomBeer />} />
        <Route path="/new" element={<NewBeer />} />
        <Route path="/search?q={query}" element={<FindBeer />} />
      </Routes>

    </div>
  );
}

export default App;
