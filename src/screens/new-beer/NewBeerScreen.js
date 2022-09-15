import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import NewBeerForm from '../../components/new-beer-form/NewBeerForm'
import { useNavigate } from 'react-router'
import NavBar from '../../components/ui/nav-bar/NavBar'

function NewBeerScreen() {
  const navigate = useNavigate()
  const [beer, setBeer] = useState([])
  
  const handleCreateBeer = (b) => {
    setBeer([...beer, b])
    axios 
      .post("https://ih-beers-api2.herokuapp.com/beers/new", {...b})
      .then(navigate("/"))
      .catch((error) => console.error(error))
    console.log(b)
  }

  console.log(beer)
  return (
    <div>
      <NavBar />
      <NewBeerForm onCreateBeer={handleCreateBeer}/>
    </div>
  )
}

export default NewBeerScreen