import React from 'react'
import Header from '../components/Header'
import BeerDetailsInList from '../components/BeerDetailsInList'
import { useState, useEffect } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import Spinner from '../components/Spinner'

const apiURL = "https://ih-beers-api2.herokuapp.com/beers"

const BeersList = () => {

    const [beers, setBeers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const [query, setQuery] = useState("")
    const [isFilteringLoading, setIsFilteringLoading] = useState(true)

    useEffect(() => {
        axios
          .get(apiURL)
          .then((response) => {
            setBeers(response.data)
            setIsLoading(false)
          })
          .catch(console.log)
      }, []);    

    useEffect( () => {
        axios
            .get(`${apiURL}/search?q=${query}`)
            .then( (response) => {
                setBeers(response.data)
                setIsFilteringLoading(false)
            })
            .catch()
    }, [query])  

    const handleSearchInput = (e) => {
        let userQuery = e.target.value
        setQuery(userQuery)
    }

    return (
        <div>
            <Header />

            <div className="filter-beers">
                Filter beers: <input type="text" value={query || ""} name="querySearch" onChange={ (e) => handleSearchInput(e)} />
            </div>

            <div className="beers-list">
                { (isLoading || isFilteringLoading) && <Spinner /> }
                { beers.map( (beer) => {
                    return(
                        <Link to={`/beers/${beer._id}`} key={beer._id}>
                            <BeerDetailsInList beer={beer} />
                        </Link> 
                    )
                })}
            </div>
        </div>
    )
}

export default BeersList
