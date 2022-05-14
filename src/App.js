import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import BeersList from "./components/BeersList";
import RandomBeer from "./components/RandomBeer"
import NewBeer from "./components/NewBeer"

const baseUrl = process.env.REACT_APP_BASE_URL;

function App() {
  const [beers, setBeers] = useState("");

  // GET request to get beers from API
  useEffect(() => {
    axios.get(baseUrl)
      .then(response => {
        console.log(response.data);
        setBeers(response.data)
      })
      .catch(e => console.log("Error getting elements from API: ", e))
  }, [])

  // Home Page
  const renderHomePage = () => {
    return (
      <div className='Box'>
      <section className='AllBeers'>
        <h1>All Beers</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim neque provident autem adipisci rerum voluptates nisi quibusdam, accusamus excepturi, minus architecto dolore ducimus laborum saepe ipsam.</p>
        <NavLink to="/beers"> + More</NavLink>
      </section>
      <section className='RandomBeer'>
        <h1>Ramdon Beer</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim neque provident autem adipisci rerum voluptates nisi quibusdam, accusamus excepturi, minus architecto dolore ducimus laborum saepe ipsam.</p>
        <NavLink to="/random-beer"> + More</NavLink>
      </section>
      <section className='NewBeer'>
        <h1>New Beer</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim neque provident autem adipisci rerum voluptates nisi quibusdam, accusamus excepturi, minus architecto dolore ducimus laborum saepe ipsam.</p>
        <NavLink to="/new-beer"> + More</NavLink>
      </section>
      </div>
    )
  }

  return (
    <div className="App">
      {/* Define Routes */}
      <Routes>
        <Route path="/" element={renderHomePage()} />
        <Route path="/beers" element={<BeersList beers={beers} />} />
        <Route path="/random-beer" element={<RandomBeer beers={beers} />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;