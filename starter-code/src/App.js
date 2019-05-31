import React from 'react';
import beers from './beers.png';
import newbeer from './new-beer.png';
import randombeer from './random-beer.png';
import './App.css';
import Beers from './Beers';

function App() {
  return (
    <div className="App">
      {/* <Beers /> */}
      <main className="container" style={{"textAlign": "left", "margin-left": "30%", "border": "1px solid grey", "width": "44rem"}}>
        <div className="card">
          <img src={beers} class="card-img-top" alt="..." />
          <div className="card-body" style={{"width": "45rem"}}>
            <h1>All Beers</h1>
            <p className="card-text">Lorem ipsum dolor sit amet, duo ex essent verear, mazim blandit lucilius id per. Mei et omnes animal, putent vituperata ea vis. Mea dolore vituperata ne, autem forensibus qui no, vim graecis electram assentior id. Ut duo omnium eruditi deserunt.</p>
          </div>
        </div>
        <div className="card">
          <img src={newbeer} class="card-img-top" alt="..." />
          <div className="card-body" style={{"width": "45rem"}}>
            <h1>Random Beer</h1>
            <p className="card-text">Lorem ipsum dolor sit amet, duo ex essent verear, mazim blandit lucilius id per. Mei et omnes animal, putent vituperata ea vis. Mea dolore vituperata ne, autem forensibus qui no, vim graecis electram assentior id. Ut duo omnium eruditi deserunt.</p>
          </div>
        </div>
        <div className="card">
          <img src={randombeer} class="card-img-top" alt="..." />
          <div className="card-body">
            <h1>New Beer</h1>
            <p className="card-text"  style={{"width": "45rem"}}>Lorem ipsum dolor sit amet, duo ex essent verear, mazim blandit lucilius id per. Mei et omnes animal, putent vituperata ea vis. Mea dolore vituperata ne, autem forensibus qui no, vim graecis electram assentior id. Ut duo omnium eruditi deserunt.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
