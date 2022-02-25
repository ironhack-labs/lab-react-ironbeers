import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'


function BeersList(props) {
    const [searchQuery, setSearchQuery] = useState('')
    const handleInputChange = (e) => {
        setSearchQuery(e.target.value)
    }
    useEffect(() => {

        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchQuery}`)
            .then(response => {
                props.setBeers(response.data)
            })
            .catch(err => console.log(err))
        return () => {

        }
    }, [searchQuery])  //eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <header>
                <Link to='/'>Return Home</Link>
            </header>
            <h1>Beers List</h1>
            <div>
                <label htmlFor="search">Search Beer: </label>
                <input type="search" id='search' onChange={handleInputChange} value={searchQuery} />
            </div>
            {props.beers.map(beer => {
                return (
                    <div key={beer._id} className="beer-container">
                        <img src={beer.image_url} alt="beer" className="beer-img" />
                        <h2>{beer.name}</h2>
                        <h3>{beer.tagline}</h3>
                        <h4>{beer.contributed_by}</h4>
                        <Link to={`/beers/${beer._id}`} >Beer Details</Link >
                    </div>
                )
            })}
        </div >
    )
}

export default BeersList