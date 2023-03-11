import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import Navigation from '../components/Navigation'
import Search from '../components/Search'


function AllBeers() {

    const [beers, setBeers] =useState([])
    const [beerSearch, setBeerSearch] = useState()

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then(response => {
            console.log(response.data)
            setBeers(response.data)
        })
    
    }, [])

  return (
    <div className='allbeers'>
    <Navigation/>
    <h1>AllBeers</h1>

    <Search/>

    {beers.map(allBeers => {
        return (
            <div key={allBeers._id} className='allbeersTeaser'>
            <img src={allBeers.image_url} alt='Beer' className='allbeersImg'/>
            <p>{allBeers.name}</p>
            <p>{allBeers.tagline}</p>
            <p>{allBeers.contributed_by}</p>
            <Link to={`/beers/${allBeers._id}`}>
            Beer details 
            </Link>



            </div>
        )
    })}

    </div>
  )
}

export default AllBeers