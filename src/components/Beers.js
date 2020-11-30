import React, { useState, useEffect} from 'react';
import './Beers.css';
import Nav from './Nav';
import { Link } from 'react-router-dom';

function Beers() {
  const [beersArray, setBeersArray] = useState([]);

  useEffect(() => {
    fetchBeers();
  }, []);

  const fetchBeers = async () => {
    const data = await fetch('https://ih-beers-api2.herokuapp.com/beers');
    const beers = await data.json();
    setBeersArray(beers)
  }

  return (
    <div className="Beers">
      <Nav />
      <h1>Beers</h1>
      <div className='beersList'>
        {beersArray.map((beer) => (
          <Link  key={beer._id} style={{textDecoration:'none'}} to={`beer/${beer._id}`}>
            <div className='beerList'>
              <div className='beerListImage'>
                <img src={beer.image_url} alt={beer.name}></img>
              </div>
              <div className='beerListText'>
                <h2>{beer.name}</h2>
                <h3>{beer.tagline}</h3>
                <h4>{beer.contributed_by}</h4>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Beers;