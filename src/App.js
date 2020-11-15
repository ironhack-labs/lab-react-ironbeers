import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'
import axios from 'axios';

function App() {
  return (
    <div className="App">
      <div className="home-section">
        <img src="" alt="" />
        <h2><Link to={'/beers'}>All Beers</Link></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus quam tellus, quis accumsan ipsum finibus laoreet.</p>
      </div>
      <div className="home-section">
        <img src="" alt="" />
        <h2><Link to={`random-beer`}>Random Beers</Link></h2>
        <p>Quisque in mauris et est pellentesque efficitur. Donec suscipit, ex tristique sollicitudin ultricies, magna justo congue odio,</p>
      </div>
      <div className="home-section">
        <img src="" alt="" />
        <h2><Link to={`new-beer`}>New Beers</Link></h2>
        <p>Praesent in dolor accumsan, porttitor tellus id, laoreet erat. Nunc volutpat finibus dui vehicula lacinia.</p>
      </div>
    </div>
  );
}

export default App;
