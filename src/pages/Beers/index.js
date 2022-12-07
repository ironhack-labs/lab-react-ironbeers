import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar';
import BeerCard from '../../components/BeerCard';

const apiURL = 'https://ih-beers-api2.herokuapp.com/beers';

const Beers = () => {
  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const getBeers = async () => {
      try {
        const beersData = await axios.get(apiURL);
        setBeers(beersData.data);
      }
      catch (err) {
        console.log(err);
      }
    }
    getBeers();
  }, []);

  const handleSearch = async (e) => {
    try {
      const query = e.target.value;
      setSearch(e.target.value);
      const searchBeers = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`);
      setBeers(searchBeers.data);
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <Navbar/>
      <div className='search'>
        <label>Search</label>
        <input type='text' value={search} onChange={handleSearch}/>
      </div>
      <div className='beers-container'>
        {beers.map(({_id, image_url, name, tagline, contributed_by}) =>
          <BeerCard
            key={_id}
            _id={_id}
            image_url={image_url}
            name={name}
            tagline={tagline}
            contributed_by={contributed_by}
          />
        )}
      </div>
    </div>
  )
}

export default Beers;