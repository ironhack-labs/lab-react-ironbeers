import React from 'react'

import NavBar from '../components/NavBar'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
function NewBeer() {
    const [name, setName] = useState('')
    const [tagline, setTagline] = useState('')
    const [description, setDescription ] = useState('')
    const [firstBrewed, setFirstBrewed ]  = useState('')
    const [brewersTips, setBrewersTips] = useState('')
    const [attenuationLevel, setAttenuationLevel] = useState('')
    const [contributedBy, setContributedBy ] = useState('')
    const navigate = useNavigate(); 
    const handleSubmit = (e) => {
        e.preventDefault()
        const body = {
            name: name,
             tagline: tagline,
              description: description,
              first_brewed:firstBrewed,
               brewers_tips:brewersTips,
                attenuation_level:attenuationLevel,
                contributed_by:contributedBy}
        axios
        .post('https://ih-beers-api2.herokuapp.com/beers/new', body)
        .then((res)=>{
            setName('')
            setTagline('')
            setDescription('')
            setFirstBrewed('')
            setBrewersTips('')
            setAttenuationLevel('')
            setContributedBy('')
            navigate('/');    
        })
        .catch((error) => {
            console.error('Error creating beer:', error);
        });
        
    }

  return (
    <div>
        <NavBar></NavBar>
        
        <h2>New Beer</h2>
        <form onSubmit={handleSubmit}>
            <label >Name</label>
            <input type="text" name='name' onChange={(e)=> setName(e.target.value) } value={name}/>

            <label >Tagline</label>
            <input type="text" name='tagline' onChange={(e)=> setTagline(e.target.value) } value={tagline}/>

            <label >Description</label>
            <input type="text" name='description' onChange={(e)=> setDescription(e.target.value) } value={description}/>

            <label >First Brewed</label>
            <input type="text" name='first_brewed' onChange={(e)=> setFirstBrewed(e.target.value) } value={firstBrewed}/>

            <label >Brewers Tips</label>
            <input type="text" name='brewers_tips' onChange={(e)=> setBrewersTips(e.target.value) } value={brewersTips}/>


            <label >Attenuation Level</label>
            <input type="number" name='attenuation_level' onChange={(e)=> setAttenuationLevel(e.target.value) } value={attenuationLevel}/>


            <label >Contributed By</label>
            <input type="text" name='contributed_by' onChange={(e)=> setContributedBy(e.target.value) } value={contributedBy}/>

            <button type='submit'> Create Beer</button>
        </form>
        </div>
  )
}

export default NewBeer