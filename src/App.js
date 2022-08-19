
import './App.css';
import beer from '/assets/beers';
import RandomBeers from '/assets/RandomBeers';
import newBeers from '/assets/RandomBeers';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={'/assets/beers'} className="beers-logo" alt="beers" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="listBeers"
          href="/components/ListBeers"
          target="_blank"
          rel="noopener noreferrer"
        >
          All Beers
        </a>
        <img src={'/assets/random-beer'} className="randomBeer" alt="random-beers" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="randomBeers"
          href="/components/RandomBeers"
          target="_blank"
          rel="noopener noreferrer"
        >
          Random Beers
        </a>
        <img src={'/assets/new-beer'} className="newBeer" alt="new-beers" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="/components/SingleBeers"
          target="_blank"
          rel="noopener noreferrer"
        >
         New Beers
        </a>
      </header>
    </div>
  );
}

export default App;
