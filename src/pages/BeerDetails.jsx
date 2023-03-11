import React from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react';  
import Navigation from '../components/Navigation';

function BeerDetails() {

    const [beer, setBeer] = useState({})
    
    const { beerId } = useParams()
    console.log('beerId', beerId)

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then(response => {
            console.log(response.data)
            setBeer(response.data)
        })
        .catch((error) => console.error(error));
    }, [beerId])

  return (
    <div className='detailpages'>
    <Navigation/>

    <h1>You want to know more about: </h1>
    <p className='detailselected'>{beer.name}</p>

    {!beer && <h3>Beer is sold out!</h3>}

    

    {beer && (
    <>
    <div className='detailbox'>
    <div className='detailcontainer'>
    <div className='imgflex'>
    <img src={beer.image_url} alt='Beer' className='detailImg'/>
    </div>
    <div className='contentflex'>
    <div className='detailheader'>
    <div className='headerleft'>
    <p className='detailname'>{beer.name}</p>
    <p className='detailtag'>{beer.tagline}</p>
    </div>
    <div className='headerright'>
    <p className='detailatt'>{beer.attenuation_level}</p>
    <p className='detailbrewed'>{beer.first_brewed}</p>
    
    </div>
    </div>

    <div className='detailcontent'> 
    <p className='detaildescription'>{beer.description}</p>
    <p className='detailcontributed'>{beer.contributed_by}</p>

    <Link to="/beers" className='detailback'>Back to all beers</Link> 
    </div> 
    </div>
    </div>
    </div>
    </>
    )}
    </div>
  )
}

export default BeerDetails