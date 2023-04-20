import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header';

const NewBeer = () => {

  const [name, setName]= useState("")
  const [tagline, setTagline]= useState("")
  const [description, setDescription]= useState("")
  const [firstBrewed, setFirstBrewed]= useState("")
  const [brewersTips, setBrewersTips]= useState("")
  const [attenuationLevel, setAttenuationLevel]= useState("")
  const [contributedBy, setContributedBy]= useState("")
  
  const navigate = useNavigate()
  
  const handleNameChange = (e) => setName(e.target.value)
  const handleTaglineChange = (e) => setTagline(e.target.value)
  const handleDescriptionChange = (e) => setDescription(e.target.value)
  const handleFirstBrewedChange = (e) => setFirstBrewed(e.target.value)
  const handleBrewersTipsChange = (e) => setBrewersTips(e.target.value)
  const handleAttenuationLevelChange = (e) => setAttenuationLevel(e.target.value)
  const handleContributedByChange = (e) => setContributedBy(e.target.value)
  

  const handleSubmit = (e) => {
    e.preventDefault()

    const beer = {
      name,
      tagline,
      description,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation_level: attenuationLevel,
      contributed_by: contributedBy
    }

    axios.post("https://ih-beers-api2.herokuapp.com/beers/new", beer)
    .then(res => {
      navigate("/")
    })
  }

  return (
    <div>
      <Header />

      <div className='mt-3 mx-5 text-start'>
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <label className="form-label fw-bold">Name</label>
            <input className="form-control rounded-5" onChange={handleNameChange} value={name} />  
          </div>
          
          <div class="mb-3">
            <label className="form-label fw-bold">Tagline</label>
            <input className="form-control rounded-5" onChange={handleTaglineChange} value={tagline} />  
          </div>

          <div class="mb-3">
            <label className="form-label fw-bold">Description</label>
            <textarea className="form-control rounded-5" onChange={handleDescriptionChange} value={description} />  
          </div>

          <div class="mb-3">
            <label className="form-label fw-bold">First Brewed</label>
            <input className="form-control rounded-5" onChange={handleFirstBrewedChange} value={firstBrewed} />  
          </div>

          <div class="mb-3">
            <label className="form-label fw-bold">Brewers Tips</label>
            <input className="form-control rounded-5" onChange={handleBrewersTipsChange} value={brewersTips} />  
          </div>
          
          <div class="mb-3">
            <label className="form-label fw-bold">Attenuation Level</label>
            <input className="form-control rounded-5" onChange={handleAttenuationLevelChange} value={attenuationLevel} type='number' />  
          </div>
          
          <div class="mb-3">
            <label className="form-label fw-bold">Contributed By</label>
            <input className="form-control rounded-5" onChange={handleContributedByChange} value={contributedBy} />  
          </div>
          
          <div className="d-grid gap-2">
            <button type="submit button" className='btn btn-info rounded-5 mt-3 text-white text-uppercase'>Add new</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewBeer