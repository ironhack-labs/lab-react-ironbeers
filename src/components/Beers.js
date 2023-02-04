import React from 'react';
import { useState, useEffect } from 'react';
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
    return 
} else {
  return (
    <div>        
        {beers.map((beer) => {
            return (
             <div key={beer._id}>
                <Link to = {`/details/${beer._id}`}>
                <h1>{beer.name}</h1>  
                </Link>
                <img src={beer.image_url}></img>              
                <hr/>                
            </div>
            )
        })}
    </div>
  )
}
}
export default Beers