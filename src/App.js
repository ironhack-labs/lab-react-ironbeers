import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <div className="App">

        <AppRouter />

        <footer className="App-footer text-white bg-dark mt-3 p-3">
          <p>Ironhack Lab developed by <a className="App-link" href='https://github.com/xavirepi'>Javier Repilado</a> using React <img src={logo} style={{height: '2rem'}} className="App-logo" alt="logo" /></p>
        </footer>
    </div>
  );
}

export default App;
