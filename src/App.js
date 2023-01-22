
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import BeerDetails from './components/BeerDetails';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ListOfBeers from "./components/ListOfBeers"
import NewBeer from './components/NewBeer';

function App() {

  // to get the path
const location =useLocation()

  return (
   <div className="App">
    
    <div>
        {/* only shows the header when the path is no "/" */}
        {location.pathname!== "/" && <Header/>}

        <Routes>
          <Route path='/' element={<HomePage/>}/>
          
            <Route path="/beers" element={<ListOfBeers/>}/>
            <Route path="beers/:beerId" element={<BeerDetails/>}/>
            <Route path="random-beer" element={<BeerDetails/>}/>
            <Route path="new-beer" element={<NewBeer/> }/>
            <Route path="/beers/search" element={<ListOfBeers newPage={true}/>}/>
        
        </Routes>
    </div>
</div>
  );
}

export default App;
