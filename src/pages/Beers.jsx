import React from 'react'
import Header from '../components/Header'
import axios from 'axios'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Searchbar from '../components/Searchbar'

const apiURL = "https://ih-beers-api2.herokuapp.com/beers"

function Beers() {
    const [beers, setBeers] = useState([])
    const [searchBeers, setSearchBeers] = useState([])
    const [showBeers, setShowBeers] = useState([])

    const getBeers = async() =>{
        try {
            let response = await axios.get(apiURL)
            setBeers(response.data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getBeers()
    }, [])
    
    const searchBeersList = (query) => {
        let searchedBeers = beers.filter((item) =>{
            return item.name.toLowerCase().includes(query.toLowerCase());
        })
        setShowBeers(searchedBeers)
    }
    const getSearchedBeers = async() =>{
        try {
            let response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchBeers}`)
            setSearchBeers(response.data)


        } catch (error) {
            console.log(error)
        }
    }


  return (
    <div>
        <Header />
        <Searchbar searchBeersList={searchBeersList}/>
        {beers.map((item) =>{
            return (
                <>
                <Link to={`/beers/${item._id}`}>
                <img src={item.image_url}/>
                <h2>{item.name}</h2>
                <h3>{item.tagline}</h3>
                <p><b>Created by: </b>{item.contributed_by}</p>
                </Link>
                </>
            )
        })}
    </div>
  )
}

export default Beers