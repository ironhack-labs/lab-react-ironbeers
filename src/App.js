import React from 'react';

//components
import Navbar from './components/Navbar/Navbar'
import Router from './components/Router/Router'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="">
        <Navbar/>
      </header>
      <main>
        <Router/>
      </main>
      <footer>
    
      </footer>
    </div>
  );
}

export default App;
