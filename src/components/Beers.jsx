import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Beers() {
    const [beers, setBeers] = useState([]);
    const [fetching, setFetching] = useState(true);
    const [query, setQuery] = useState('');

    const handleQuery = (e) => setQuery(e.target.value);


    const getBeers = async () => {
        try {
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
            const beers = response.data;
            console.log(beers)
            setBeers(beers);
            setFetching(false);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getBeers();
    }, [query])

if(fetching) {
    return <h1>Loading...</h1>

} else {
  return (
    <div>
        <input type = "text" placeholder='Search..' value={query} onChange = {handleQuery}/>
        {beers.map((beer) => {
            return (
                <div key={beer._id}>
                <Link to = {`/details/${beer._id}`}>
                  <h1>{beer.name}</h1>  
                  </Link>
                  <img className="beer_image" src={beer.image_url}></img>
                  <p>{beer.tagline}</p>
                  <p>Created by: {beer.contributed_by}</p>
                  <hr/>

                
                </div>
            )
        })}
    </div>
  )
}
}
export default Beers