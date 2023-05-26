import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Header from '../../Components/Header';
import { Link } from 'react-router-dom';




const apiURL = "https://ih-beers-api2.herokuapp.com/beers";


export default function ListBeers(props) {
    const [beers, setBeers] = useState ([]) // beers is the data, set is what the data will be

    useEffect(() =>{
        const apiCall = async () => {
            const res = await axios.get(apiURL)
            setBeers(res.data)            
        }
        apiCall()
    }, [])
    const oneBeer = beers.map((beer) => { 
        return (
            <div key={beer._id} className='card mb-3'>
                <Link to={`/beers/${beer._id}`} style={{ textDecoration: 'none' }}>
                    <div className='row g-0 beer-card'>
                        <div className='col-md-4"'>    
                            <img className='img-fluid rounded-start beer-img' src={beer.image_url} alt="Beer"/>
                        </div> 
                        <div className="col-md-8">
                            <div class="card-body">
                                <h1 className='card-title"'>{beer.name}</h1>
                                <h2 className='card-text'>{beer.tagline}</h2>
                                <p className='text-body-secondary'>Created by: {beer.contributed_by}</p>  
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    })
  return (
    <div>
        <Header/>
        <h1>All Beers</h1>
        {oneBeer}
    </div>
  )
}
