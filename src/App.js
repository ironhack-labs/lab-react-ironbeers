import "./App.css";
import { Link } from "react-router-dom";
import beers from "./assets/beers.png";
import newBeer from "./assets/new-beer.png";
import randomBeer from "./assets/random-beer.png";

function App() {
  return (
    <div className="App">
      <h1>Hello ironhackers!</h1>

      <div>
      <img src={beers} alt="Beers" />
      <h2>
        <Link to="/beers">Beers</Link></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam maecenas sed enim. Vitae tortor condimentum lacinia quis vel eros donec. Nullam eget felis eget nunc lobortis mattis aliquam faucibus purus. Donec et odio pellentesque diam volutpat commodo sed egestas. Feugiat in fermentum posuere urna nec tincidunt praesent. Elementum nibh tellus molestie nunc non blandit massa</p>
      </div>

      <div>
      <img src={newBeer} alt="New beer" />
        <h2><Link to="/random-beer">Random beer</Link></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam maecenas sed enim. Vitae tortor condimentum lacinia quis vel eros donec. Nullam eget felis eget nunc lobortis mattis aliquam faucibus purus. Donec et odio pellentesque diam volutpat commodo sed egestas. Feugiat in fermentum posuere urna nec tincidunt praesent. Elementum nibh tellus molestie nunc non blandit massa</p>
      </div>

      <div>
      <img src={randomBeer} alt="Random beer" />
        <h2><Link to="/random-beer">New beer</Link></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam maecenas sed enim. Vitae tortor condimentum lacinia quis vel eros donec. Nullam eget felis eget nunc lobortis mattis aliquam faucibus purus. Donec et odio pellentesque diam volutpat commodo sed egestas. Feugiat in fermentum posuere urna nec tincidunt praesent. Elementum nibh tellus molestie nunc non blandit massa</p>
      </div>
    </div>
  );
}

export default App;
