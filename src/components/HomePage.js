import { Link, Route, Routes } from "react-router-dom";
import BeersList from "../components/BeersList";
import RandomBeer from "../components/RandomBeer";
import NewBeer from "../components/NewBeer";
import beerImage from "../assets/beers.png";
import randbeerImage from "../assets/random-beer.png";
import newbeerImage from "../assets/new-beer.png"; 
import "./HomePage.css"

function HomePage() {
    return (
      <div className="home">
        
        <Link to="/beers" className="links">
          <img src={beerImage} alt="beers"/>
          <h1>All Beers</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique vel massa sed lobortis. Vivamus consequat varius elementum. Vivamus maximus massa luctus vulputate gravida. Nulla.</p>
        </Link>
  
        <Link to="/random-beer" className="links">
          <img src={randbeerImage} alt="random beer"/>
          <h1>Random Beer</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique vel massa sed lobortis. Vivamus consequat varius elementum. Vivamus maximus massa luctus vulputate gravida. Nulla.</p>
        </Link>

        <Link to="/new-beer" className="links">
          <img src={newbeerImage} alt="new beer"/>
          <h1>New Beer</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique vel massa sed lobortis. Vivamus consequat varius elementum. Vivamus maximus massa luctus vulputate gravida. Nulla.</p>
        </Link>
  
       {/*  <Link to="/new-beer">
          <img src="./random-beer.png" alt=""/>
          <h1>New Beer</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique vel massa sed lobortis. Vivamus consequat varius elementum. Vivamus maximus massa luctus vulputate gravida. Nulla.</p>
        </Link> */}
  
        <Routes>
          <Route path='/beers' element={<BeersList />} />
          <Route path='/random-beer' element={<RandomBeer />} />
          <Route path='/new-beer' element={<NewBeer />} />
        </Routes>
        
      </div>
    );
  }

export default HomePage;