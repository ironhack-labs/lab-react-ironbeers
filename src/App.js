import React from 'react';
import './App.css';
import BeerList from './components/beerlist/BeerList';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <BeerList />
    </div>
  );
}

export default App;
