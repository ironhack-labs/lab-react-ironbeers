import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
const API_URL =  process.env.REACT_APP_BASE_URL

function Beers () {
    const [beers, setBeers] = useState([])
    
    const [query, setQuery] = useState("")

    useEffect(() => {
        if(query === "") {
            axios.get(`${API_URL}`)
            .then(res => setBeers(res.data))
            .catch(err => console.log(err))
        } else {
            axios.get(`${API_URL}/search?q=${query}`)
            .then(res => setBeers(res.data))
            .catch(err => console.log(err))
        }
        
    }, [query])

    

    if(beers.length === 0) <p>Loading...</p>

    return (
      <div>
       <label>Search</label>
        <input 
        type="text" 
        name="query" 
        onChange={(e) => setQuery(e.target.value)}
        value= {query}
        />

      {beers.map((beer) => {
        return(
        <div key={beer._id}>
            <Link to={`/beers/${beer._id}`} >
                <img src={beer.image_url} alt='beer' />
                <div>
                    <h2>{beer.name}</h2>
                    <h3>{beer.tagline}</h3>
                    <p>Created by: {beer.contributed_by}</p>
                </div> 
            </Link>
                       
        </div>
      )})}
        
      </div>
    )
}


export default Beers