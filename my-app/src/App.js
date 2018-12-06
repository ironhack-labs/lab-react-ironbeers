import React, { Component } from 'react';

import Beers from './components/Beers/Beers'
import Newbeers from './components/Newbeer/Newbeer'
import Randombeers from './components/Randombeer/Randombeer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
        <Beers/>
        <Randombeers/>
        <Newbeers/>
      

      </div>
      </div>
    );
  }
}

export default App;
