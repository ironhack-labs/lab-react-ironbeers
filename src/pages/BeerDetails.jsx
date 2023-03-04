import { Link } from 'react-router-dom'
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'

function BeerDetails() {
    const [oneBeerDetails, setOneBeerDetails] = useState([])
    const {id} = useParams()

    const getOneBeerDetails = async() => {

        try {
            let response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
           setOneBeerDetails(response.data)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=> {
        getOneBeerDetails()
    }, [id])

  return (
    
    <div>
     
     <Header/>
       
        <div key={oneBeerDetails._id}>
        <img src={oneBeerDetails.image_url} alt="one beer details"></img>
        <h3>{oneBeerDetails.name}</h3>
        <h4>{oneBeerDetails.tagline}</h4>
        <p>{oneBeerDetails.first_brewed}</p>
        <p>{oneBeerDetails.description}</p>
        <p>{oneBeerDetails.contributed_by} </p>
 </div>
    </div>
   
  )
}

export default BeerDetails