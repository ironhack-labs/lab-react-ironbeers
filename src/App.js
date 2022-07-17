import './App.css';
import HomePage from './components/HomePage';
import Header from './components/Header';
import Beers from './components/Beers';
import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import axios from 'axios'


function App() {
  const [beers, setBeers] = useState([])

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then(response => {
        console.log(response.data)

        setBeers(response.data)

      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/beers' element={<Beers beers={beers} /> }  />  
        <Route path='*' element={<h1>404- Not Found </h1>} />
      </Routes>  
    </div>
  );
}

export default App;