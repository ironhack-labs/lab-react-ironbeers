import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default function Beers(props) {
    const [beers, setBeers] = useState([])

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${props.search}`)
        .then(response => {
            console.log(response.data)
            setBeers(response.data)        
        })
        .catch(err => console.log(err))
    }, [props.search])


/*     const handleSearch = event => {
        console.log(event.target)
        setSearch(event.target.value)
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${search}`)
        .then(response => {
            console.log(search)
            setBeers(response.data)
        })
    } */

  return (
    <div>

{/*         <label><h3>Search for a Beer</h3></label>
        <input type='text' value={search} onChange={handleSearch} placeholder='search for a beer' />
        <br /> */}

    {beers.map(beer => (
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
