import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import Navigation from '../components/Navigation'
// import Search from '../components/Search'


function AllBeers() {

    const [beers, setBeers] =useState([])
    const [userInput, setUserInput] = useState('')

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then(response => {
            console.log(response.data)
            setBeers(response.data)
        })
    
    }, [])

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${userInput}`)
        .then((response) => {
            console.log(response.data)
            setBeers(response.data)
        })
    }, [userInput])

  return (
    <div className='allbeers'>
    <Navigation/>
    <h1>Ironbeers</h1>

    <input className="searchall" type='text' value={userInput} onChange={(e) => setUserInput(e.target.value)} placeholder='Search for a beer name'/>

    {/* <Search/> */}

    {beers.map(allBeers => {
        return (
            <div key={allBeers._id} className='allbeersTeaser'>
           
            <div className='flexcontainer'>
            <div className='flexleft'>
            <img src={allBeers.image_url} alt='Beer' className='allbeersImg'/>
            </div>
            <div className='flexright'>
            <p className='flexname'>{allBeers.name}</p>
            <p className='flextag'>{allBeers.tagline}</p>
            <p className='flexcontributed'>Created by: {allBeers.contributed_by}</p>
            <Link to={`/beers/${allBeers._id}`} className='flexlink'>
            Beer details 
            </Link>
            </div>
            
            </div>


           
            </div>
        )
    })}

    </div>
  )
}

export default AllBeers