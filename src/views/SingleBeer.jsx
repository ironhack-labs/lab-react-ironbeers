import React from 'react'
import axios from "axios"
import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import BeerDetails from '../components/BeerDetails'

const apiURL = "https://ih-beers-api2.herokuapp.com/beers"

const SingleBeer = (props) => {

    const params = useParams()
    
    const [beer, setBeer] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    const apiCall = `${apiURL}/${params.id}`

    useEffect( ()=> {
        axios.get(apiCall)
            .then( response => {
                setBeer(response.data)
                setIsLoading(false)
            })
            .catch(error => {
                setIsError(true)
                console.log(error)
            })
    } , [params.id, apiCall])      // so that it runs useEffect every time user clicks new country

    return <BeerDetails beer={beer} isLoading={isLoading} isError={isError} />
}

export default SingleBeer
