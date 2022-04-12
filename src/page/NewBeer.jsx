import React from 'react'
import { useNavigate } from 'react-router-dom'

import FormNewBeer from '../components/FormNewBeer'
import axios from 'axios'

const NewBeer = () => {
  let navigate = useNavigate();
  const addBeer = (beer) => {
    axios.post( 'https://ih-beers-api2.herokuapp.com/beers/new', beer )
    .then( ( resFromApi ) => {
      console.log(resFromApi)
      navigate('/')
    })
    .catch( ( error ) => console.log( error ) )
  }
  return (
    <>
      <FormNewBeer addBeer={ addBeer } />
    </>
  )
}

export default NewBeer