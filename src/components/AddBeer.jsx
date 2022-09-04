import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const AddBeer = () => {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState();
  const [description, setDescription] = useState("");
  const [first_brewed, setFirst_brewed] = useState("");
  const [attenuationlevel, setAttenuationlevel] = useState();
  const [contributedby, setContributedby] = useState("");
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {name, tagline, description, first_brewed, attenuationlevel})
    .then((response) =>  {
    navigate('/');
    console.log(response.status)
  })
    .catch(err => console.log(err))
  }

  return (
  <div>
    <div>AddBeer</div>
    <form onSubmit={handleSubmit} >
          <label>Name</label>
          <input value={name} type="text" onChange={(event)=> setName(event.target.value)} />
    
          <label>Tagline</label>
          <input value={tagline} type="text" onChange={(event)=> setTagline(event.target.value)} />
    
          <label>Description</label>
          <input value={description} type="text" onChange={(event)=> setDescription(event.target.value)} />

          <label>first-brewed</label>
          <input value={first_brewed} type="text" onChange={(event)=> setFirst_brewed(event.target.value)} />

          <label>attenuation_level</label>
          <input value={attenuationlevel} type="number" onChange={(event)=> setAttenuationlevel(event.target.value)} />

          <label>contributed_by</label>
          <input value={contributedby} type="text" onChange={(event)=> setContributedby(event.target.value)} />
    
          <button type="submit">Create</button>
        </form>
  </div>

  )
}

export default AddBeer;