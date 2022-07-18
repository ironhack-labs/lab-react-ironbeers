import React from 'react'; 
import { Link } from 'react-router-dom'; 
import Header from "../header"; 
import { useState, useEffect } from 'react'; 
import axios from 'axios';

const Beers = (props) => { 
    const [beers, setBeers] = useState([]); 

    useEffect(() => {
        // fetch data from beers api
        axios.get('https://ih-beers-api2.herokuapp.com/beers') 
        .then(response => {
            console.log(response.data)
            // set state of characters
            setBeers(response.data)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            {beers?.map(function (beer) {
                return (
                    <div key={beer._id} className='beer'>
                        <div>
                            <img src={beer.image_url} alt='beer-img' className='beer-img' />
                        </div>
                        
                        <div className='beer-text'>
                            <Link className='beer-name' to={`/singlebeer/${beer._id}`}>
                            {beer.name}</Link>
                        </div>

                        <div>
                            <span className='beer-tagline'>{beer.tagline}</span>
                            <span className='beer-contributor'>{beer.contributed_by}</span>
                        </div>

                    </div>
                )
            })}          
        </div>
    );
} 

export default Beers;