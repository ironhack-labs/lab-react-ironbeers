import axios from 'axios'
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

export const NewBeerPage = () => {
  const [name,setName] = useState('')
  const [tagline,setTagline] = useState('')
  const [description,setDescription] = useState('')
  const [firstBrewed,setFirstBrewed] = useState('')
  const [brewersTips,setBrewersTips] = useState('')
  const [attenuationLevel,setAttenuationLevel] = useState(0)
  const [contributedBy,setContributedBy] = useState('')

  const handleSubmit= async (e)=>{
   e.preventDefault()
   let newBeer = {
    name,
    tagline,
    description,
    first_brewed:firstBrewed,
    brewers_tips:brewersTips,
    attenuation_level: attenuationLevel,
    contributed_by:contributedBy
   }
   await axios.post('https://ih-beers-api2.herokuapp.com/beers/new',newBeer)
   setName('')
   setTagline('')
   setDescription('')
   setFirstBrewed('')
   setBrewersTips('')
   setAttenuationLevel(0)
   setContributedBy('')
   Navigate('/')
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}} /> 
        </div>
        <div>
        <label>Tagline</label>
        <input type='text'value={tagline} onChange={(e)=>{setTagline(e.target.value)}} /> 
        </div>
        <div>
        <label>Description</label>
        <textarea type='text' value={description} onChange={(e)=>{setDescription(e.target.value)}} /> 
        </div>
        <div>
        <label>First Brewed</label>
        <input type='text' value={firstBrewed} onChange={(e)=>{setFirstBrewed(e.target.value)}} /> 
        </div>
        <div>
        <label>Brewers Tips</label>
        <input type='text' value={brewersTips} onChange={(e)=>{setBrewersTips(e.target.value)}} /> 
        </div>
        <div>
        <label>Attenuation Level</label>
        <input type='number' value={attenuationLevel} onChange={(e)=>{setAttenuationLevel(e.target.value)}} /> 
        </div>
        <div>
        <label>Contributed By</label>
        <input type='text' value={contributedBy} onChange={(e)=>{setContributedBy(e.target.value)}}/> 
        </div>
        <div>
          <button>Add New</button>
        </div>
      </form>
    </div>
  )
}
