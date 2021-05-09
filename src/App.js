import React from 'react';
import Homepage from './components/Homepage'
import './App.css';
import Header from './components/Header'

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Homepage />
      </div>
    </div>
  );
}

export default App;
