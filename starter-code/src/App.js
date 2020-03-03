import React, { Component } from 'react';
import beersall from './images/beers.png';
import randombeer from './images/random-beer.png';
import newbeer from './images/new-beer.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <ul>
          <img src={beersall} alt="Beers" height="140" width="400"/>
          <li>All Beers</li>
          <p>Ldasjd djsd skd dieieur  dhjfd eiurei s dsadu aisduasd iadu aisdaid iaud asiduasdy f asgag datasdga d tafdt adta tfa sdsa</p>
          <img src={randombeer} alt="Beers" height="140" width="400"/>
          <li>Random Beers</li>
          <p>Ldasjd djsd skd dieieur  dhjfd eiurei s dsadu aisduasd iadu aisdaid iaud asiduasdy f asgag datasdga d tafdt adta tfa sdsa</p>
          <img src={newbeer} alt="Beers" height="140" width="400"/>
          <li>New Beers</li>
          <p>Ldasjd djsd skd dieieur  dhjfd eiurei s dsadu aisduasd iadu aisdaid iaud asiduasdy f asgag datasdga d tafdt adta tfa sdsa</p>
        </ul>
      </div>
    );
  }
}

export default App;
