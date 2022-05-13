import { NavLink } from "react-router-dom";
import beers from "../assets/beers.png";
import randomBeer from "../assets/randomBeer.png";
import newBeer from "../assets/newBeer.png";

function HomePage() {
  return (
    <>
      <h1>Welcome To Ironbeers!</h1>
      <p>The one-stop-shop for all things beer related</p>

      <div>
        <NavLink to="/beers"> All Beers </NavLink> <br />
        <img src={beers} alt="beers" />
      </div>
      <br />
      <br />
      <br />

      <div>
        <NavLink to="/ggggg"> Random Beers </NavLink> <br />
        <img src={randomBeer} alt="beers" />
      </div>
      <br />
      <br />
      <br />

      <div>
        <NavLink to="/new"> Create New Beer </NavLink> <br />
        <img src={newBeer} alt="beers" />
      </div>
    </>
  );
}

export default HomePage;
