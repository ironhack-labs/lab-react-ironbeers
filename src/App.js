import {Route, Routes} from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from 'axios'



import './App.css';
import Homepage from "./components/Homepage";
import Navbar from './components/Navbar.js';
import AllBeers from './components/AllBeers'
import Beer from './components/Beer'
import NewBeer from './components/NewBeer' 

function App() {

  let [beers, setBeers] = useState([])

    useEffect( () => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then( response => {
                 setBeers(response.data)

                })
            .catch( err => console.log(err))
    }, [])

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage  />} />
        <Route path='/beers' element={<AllBeers beers={beers}  />} />
        <Route path='/beers/:id' element={<Beer beers={beers}  />} />
        <Route path='/beers/new' element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
