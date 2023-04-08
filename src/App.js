import './App.css';
import{Route,Routes} from "react-router-dom";
import ListBeers from './components/ListBeers';
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import SingleBeer from './components/SingleBeer';


function App() {
  return (
    <div className="App">
  
    <Navbar/>
     <Routes>
     <Route path='/' element={<HomePage/>}/>
     <Route path='/beers' element={<ListBeers/>}/>
      <Route path='/random-beer' element={<RandomBeer/>}/>
      <Route path='/new-beer' element={<NewBeer/>}/>
      <Route path='/beers/:beerId' element={<SingleBeer/>}/>


     </Routes>
    </div>
  );
}

export default App;
