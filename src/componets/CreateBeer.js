import React from 'react'
import AddBeerForm from './AddBeerForm';
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';


export default function CreateBeer() {
  const navigate = useNavigate()

  const addNewBeer= async (event) => {
      event.preventDefault();
      try {
          const { title, pricePerDay, img } = event.target;

          let newBeer = {
              title: title.value,
              pricePerDay: pricePerDay.value,
              img: img.value
          }

          await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
          navigate("/")
      }
      catch(error) {
          console.log("Something went wrong while creating a new apartment", error)
      }
  return (
    <div>
    <Header />

    <AddBeerForm />
    
    CreateBeer</div>
  )
}
}
