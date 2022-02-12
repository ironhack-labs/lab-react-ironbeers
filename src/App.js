import "./App.css";
import React, {useEffect, useState} from 'react';
import { Home, Navbar, Beers } from "./components";
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

function App() {

  const [beers, setBeers] = useState([]);
  const [beerId, setBeerId] = useState();


  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then(res => {
        setBeers(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  const handleBeerId = (id) => {
    setBeerId(id);
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/beers" element={<Beers beers={beers} />} />
      <Route path="/beers/:beerId" element={<Beers beers={beerId} handleBeerId={handleBeerId} />} />
      </Routes>
    </div>
  );
}

export default App;
