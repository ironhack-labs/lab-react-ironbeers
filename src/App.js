import logo from './logo.svg';
import './App.css';
import beers from "./assets/beers.png";
import randomBeers from "./assets/random-beer.png";
import newBeer from "./assets/new-beer.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Home">
         <img src={beers} alt="beers"/>
         <h1>All beers</h1>
         <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</span>
       </div>
       <div className="Home">
        <img src={randomBeers} alt="random-beers"/>
        <h1>Random beer</h1>
        <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</span>
      </div>
      <div className="Home">
        <img src={newBeer} alt="new-beer" />
        <h1>New beer</h1>
        <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</span>
      </div>
      </header>
    </div>
  );
}

export default App;
