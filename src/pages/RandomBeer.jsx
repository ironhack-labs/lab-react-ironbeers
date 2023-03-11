import React from 'react'
import axios from 'axios'
import Navigation from '../components/Navigation'
import { useState, useEffect } from 'react';  
import { Link } from 'react-router-dom'

function RandomBeer() {
 
    const [randomBeer, setRandomBeer] = useState()
    

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
        .then(response => {
            console.log(response.data)
            setRandomBeer(response.data)
        })
        .catch((error) => console.error(error));
    }, [])

  return (
    <div className='detailpages'>
    <Navigation/>

    <h1>And our recommendation is: </h1>
   

    {!randomBeer && <h3>Beer is sold out!</h3>}

    {randomBeer && (
    <>
    <div className='detailbox'>
    <div className='detailcontainer'>
    <div className='imgflex'>
    <img src={randomBeer.image_url} alt='Beer' className='detailImg'/>
    </div>
    <div className='contentflex'>
    <div className='detailheader'>
    <div className='headerleft'>
    <p className='detailname'>{randomBeer.name}</p>
    <p className='detailtag'>{randomBeer.tagline}</p>
    </div>
    <div className='headerright'>
    <p className='detailatt'>{randomBeer.attenuation_level}</p>
    <p className='detailbrewed'>{randomBeer.first_brewed}</p>
    </div>
    </div>
    <div className='detailcontent'> 
    <p className='detaildescription'>{randomBeer.description}</p>
    <p className='detailcontributed'>{randomBeer.contributed_by}</p>
  

    <Link to="/beers" className='detailback'>Back</Link> 
    </div>
    </div>
    </div>
    </div>
    </>
    )}
    </div>
  )
}

export default RandomBeer