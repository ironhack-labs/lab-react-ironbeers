import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import Navbar from '../../components/Navbar/Navbar'
import  Box  from '@mui/material/Box'


const BeerNew = () => {
    
    const [form, setForm] = useState({
        name:'',
        tagline:'',
        description:'',
        first_brewed:'',
        brewers_tips:'',
        attenuation_level:'',
        contributed_by:'',
    })

    const {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by
    } = form


const handleInputChange = (e) => {
  const {name, value} = e.target
  setForm({...form, [name] : value })
  
}

const handleSubmitForm = (event) => {
  event.preventDefault();
  const body = {...form}
  axios
    .post(`https://ih-beers-api2.herokuapp.com/beers/new`, body)
    .then(response => {
      setForm({
        name:'',
        tagline:'',
        description:'',
        first_brewed:'',
        brewers_tips:'',
        attennuation_level:'',
        contributed_by:'',
      })
    })
    .catch(err => console.log(err))
}

  return (
    <div>
      <Navbar />
           
      <Box 
        component="form" 
        onSubmit={handleSubmitForm}
        sx={{
          my: 1,
          mx: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h3>Create a New Beer</h3>
        <label htmlFor="">Name:</label>
        <input type="text" name='name' value={name} onChange={handleInputChange}/>

        <label htmlFor="">Tagline:</label>
        <input type="text" name='tagline' value={tagline} onChange={handleInputChange}/>

        <label htmlFor="">Description:</label>
        <input type="textarea" name='description' value={description} onChange={handleInputChange}/>

        <label htmlFor="">First Brewed:</label>
        <input type="text" name='first_brewed' value={first_brewed} onChange={handleInputChange}/>

        <label htmlFor="">Brewertips:</label>
        <input type="text" name='brewers_tips' value={brewers_tips} onChange={handleInputChange}/>

        <label htmlFor="">Attenuation Level:</label>
        <input type="number" name='attenuation_level' value={attenuation_level} onChange={handleInputChange}/>

        <label htmlFor="">Contributed By:</label>
        <input type="text" name='contributed_by' value={contributed_by} onChange={handleInputChange}/>
        <br />
        <button type='submit' >Create</button>
      </Box>
        
      
    </div>
  )
}

export default BeerNew