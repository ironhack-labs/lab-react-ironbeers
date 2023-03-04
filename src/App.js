import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import ListBeersPage from './components/ListBeersPage'
import RandomBeerPage from './components/RandomBeerPage'
import NewBeerPage from './components/NewBeerPage'
import Navbar from './components/Navbar'
import SingleBeerPage from './components/SingleBeerPage';

function App() {
  return (
<div>
  
 

  <Router>
  <Navbar/>
    <Routes>

    <Route path="/" 
      element={ <HomePage /> } />
 
      <Route path="/beers" 
      element={ <ListBeersPage /> } />

        <Route path="/random-beer" 
        element={ <RandomBeerPage /> } />

          <Route path="/new-beer" 
          element={ <NewBeerPage /> } />

          <Route path="/beers/:beerId" 
          element={ <SingleBeerPage /> } />

    </Routes>

  </Router>

</div>
  );
 
}

export default App;
