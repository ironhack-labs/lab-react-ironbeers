import React from 'react';
import './App.css';
import ContextProvider from './Context';
import Router from './Router';

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Router />
      </ContextProvider>
    </div>
  );
}

export default App;
