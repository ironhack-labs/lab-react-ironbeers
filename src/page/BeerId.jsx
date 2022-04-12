import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import BeerDetails from '../components/BeerDetails'

const BeerId = () => {
  const [ beer, setBeer ] = useState( null )
  const [ loading, setLoading ] = useState( true )
  
  const { id } = useParams()
  useEffect( () => {
    axios.get( `https://ih-beers-api2.herokuapp.com/beers/${id}` )
      .then( ( resFromApi ) => {
        setBeer( resFromApi.data )
        setLoading( false )
      })
      .catch( ( error ) => console.log( error ) )
  }, [])

  return (
    <>
      { !loading ? <BeerDetails { ...beer } /> : <h2>Loading...</h2> }
    </>
  )
}


export default BeerId