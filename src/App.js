import axios from 'axios';
import './App.css';
import {Link} from "react-router-dom"
import imgBeers from "./assets/beers.png"
import imgRandomBeer from "./assets/random-beer.png"
import imgNewBeer from "./assets/new-beer.png"

function App() {
  return (
    <div className="App">
      <Link to='/beers'><img src={imgBeers} alt='bar of a pub'/>Show me your Beers!</Link>
      <Link to='/random-beers'><img src={imgRandomBeer} alt='beer dispensers'/>A Random Beer!</Link>
      <Link to='/new-beer'><img src={imgNewBeer} alt='beer'/>Add me a new Beer!</Link>
    </div>
  );
}

export default App;
