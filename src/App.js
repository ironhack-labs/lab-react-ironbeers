import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import HomePage from './components/HomePage';
import Header from './components/Header';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import BeerDetails from './components/BeerDetails';
import AddNewBeer from './components/NewBeer';



function App() {
    return (
      <Router>
        <div className="App">  
        
         <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/beers" element={<Beers />} />
          <Route path="/random-beer" element={<RandomBeer />} />
          <Route path="/new-beer" element={<NewBeer />} />
          <Route path="/beers/:id" element= {<BeerDetails />} />
          <Route path="/random-beer" element= {<RandomBeer />} />

        </Routes>

        <Header showHeader={window.location.pathname !== '/'} />
        </div>
      </Router>
    );
  }
  

export default App;






