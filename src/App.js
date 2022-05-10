 
import './App.css';
import HomePage from './pages/HomePage'
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import AllBeersPage from './pages/AllBeersPage';
import RandomBeersPage from './pages/RandomBeersPage';
import NewBeersPage from './pages/NewBeersPage';
import BeerDetails from './pages/BeerDetails';


function App() {

  
  return (
    <div className="App">


<Routes>
  
<Route path='/' element={<HomePage/>} />
<Route path='/beers' element={<AllBeersPage/>} />
<Route path='/random-beer' element={<RandomBeersPage/>} />
<Route path='/new-beer' element={<NewBeersPage/>} />
<Route path='/beers/:beerId' element={<BeerDetails/>} />

</Routes>

    </div>
  );
}

export default App;
