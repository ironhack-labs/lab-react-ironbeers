import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Routes from './Routes'
import Nav from './Navbar'

function App() {
  
  return (
    <div>

     <Nav />
      <main>
       <Routes />
      </main>

    </div>
  );
}

export default App;
