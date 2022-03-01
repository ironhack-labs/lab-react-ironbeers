import {React, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

export default function Beer() {

const [beers, setBeers] = useState([]);
const [search, setSearch] = useState('')

const handleSearchInput = searchInput => {
     console.log(searchInput.target.value)
    setSearch(searchInput.target.value)}

useEffect(() => {
    axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${search}`)
        .then((response) => {
        console.log('response.data', response.data)
        setBeers(response.data)
    })
}, [search])

  return (
    <>
    <header><a class="home-link" href="/">Home</a></header>
    <input class="searchbar" type="search"  value={search} onChange={handleSearchInput} placeholder='Search...'/>
    <div>
        {beers.map((beer) => (
        <div class="beer-container" key={beer._id}>
            <div class="img-container">
                 <img class="beer-pic" src={beer.image_url} alt="Bierflasche" />
            </div>
            <div class="beer-info">
                <h2>{beer.name}</h2>
                <h3>{beer.tagline}</h3>
                <h4>Created by: {beer.contributed_by}</h4>
                <Link to={`/beers/${beer._id}`}>Click for Details</Link>
            </div>
        </div>
        ))}
    </div>
    </>
  )
}
