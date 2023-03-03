import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const apiURL = 'https://ih-beers-api2.herokuapp.com/beers'

function ListBeer() {
    const [beers, setBeers] = useState([])

    const getAllBeers = async() => {
        try {
            let response = await axios.get(apiURL)
            setBeers(response.data)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=> {
        getAllBeers()
    }, [])

  
  return (
    <div>
    <Link to='/'></Link>
    <h3>All Beers</h3>
    {beers.map((beer)=> (
       
        <>
        { console.log(beer)}

            <div key={beer.name} className='card-beer' >
                <img src={beer.image_url} alt="all beers" style={{ height: "20vh" }}/>
                <div className="beer-info">
                <h3>  <Link to={`/beer/${beer._id}`}>{beer.name}</Link></h3>
                <h4>Tagline: {beer.tagline}</h4>
                <p>Created by: {beer.contributed_by} </p>
                </div>
            </div>
        </>
    ))}
    </div>
  )
}

export default ListBeer