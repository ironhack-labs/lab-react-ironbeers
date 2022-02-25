import { NavLink } from "react-router-dom";
import AllBeers from "./AllBeers";
import RandomBeer from "./RandomBeer";
import NewBeer from "./NewBeer";
import allBeersImage from "./../assets/beers.png";
import randomBeerImage from "./../assets/random-beer.png";
import newBeerImage from "./../assets/new-beer.png";

function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 w-100">
          <img className="imagesHomePage" src={allBeersImage} alt="beers" />
          <NavLink
            to="/all-beers"
            element={<AllBeers />}
            className="NavlinksBelowImages"
          >
            <h1 className="homepageLinkHeadings">All Beers</h1>
          </NavLink>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <img className="imagesHomePage" src={randomBeerImage} alt="beers" />
          <NavLink
            to="/random"
            element={<RandomBeer />}
            className="NavlinksBelowImages"
          >
            <h1 className="homepageLinkHeadings">Random Beer</h1>
          </NavLink>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <img className="imagesHomePage" src={newBeerImage} alt="beers" />
          <NavLink
            to="/new-beer"
            element={<NewBeer />}
            className="NavlinksBelowImages"
          >
            <h1 className="homepageLinkHeadings">New Beer</h1>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Home;
