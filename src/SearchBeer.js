import React from 'react';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';

export default function SearchBeer() {
    const[searchBeer, setSearchBeer] = useState('');
    const[beerList, setBeerList] = useState([]);

    const handleSearch = event => {
        console.log(event.target)
        setSearchBeer(event.target.value)
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchBeer}`)
        .then(response => {
            console.log(searchBeer)
            setBeerList(response.data)
        })
    }

  return (
    <div>
        <label><h3>Search for a Beer</h3></label>
        <input type='text' value={searchBeer} onChange={handleSearch} />
        <br />

         {beerList.map(beer => (
        <div key={beer._id}>
        <div>
            <img src={beer.image_url} height='90' alt='beerPic' />
        </div>
        <h2>
            {beer.name}
        </h2>        
        <br />
        <Link to={`/beers/${beer._id}`}>Beer Details</Link>
        <h4>
            {beer.tagline}
        </h4>
        <p>
            {beer.contributed_by}
        </p>
        
        </div>
    ))} 
    </div>
  )
}
