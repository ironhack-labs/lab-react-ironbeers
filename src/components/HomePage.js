import { NavLink } from "react-router-dom";
import beers from "../assets/beers.png"
import newBeer from "../assets/new-beer.png"
import randomBeer from "../assets/random-beer.png"

function HomePage() {
  return(
    <div>
      <h1>Welcome to Iron Beers</h1>
      <div>
        <NavLink to="/beers">
          <img src={beers} alt="beer"/>
          <h2>All Bears</h2>
        </NavLink>
      </div>
      <div>
        <NavLink to="/random-beer">
          <img src={randomBeer} alt="random-beers"/>
          <h2>Random Beer</h2>
        </NavLink>
      </div>
      <div>
        <NavLink to="/new-beer">
          <img src={newBeer} alt="new-beer"/>
          <h2>New Beer</h2>
        </NavLink>
      </div>
    </div>
  )
}

export default HomePage;