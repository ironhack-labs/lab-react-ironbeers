import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles.css'

const NewBeer = () => {
  const [name, setName] = useState("")
  const [tagline, setTagline] = useState("")
  const [description, setDescription] = useState("")
  const [firstBrewed, setFirstBrewed] = useState("")
  const [brewersTips, setBrewersTips] = useState("")
  const [attenuationLevel, setAttenuationLevel] = useState(0)
  const [contributedBy, setContributedBy] = useState("")

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()

    const body = { name, tagline, description, firstBrewed, brewersTips, attenuationLevel, contributedBy };

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
      .then(() => {
        setName("")
        setTagline("")
        setDescription("")
        setFirstBrewed("")
        setBrewersTips("")
        setAttenuationLevel(0)
        setContributedBy("")
        navigate('/beers')
      })
      .catch(console.log)
  }

  return (
    <div className='formCard'>
      <form onSubmit={handleSubmit} className='form'>
        <label>Name</label>
        <input 
          type='text'
          name="name"
          value={name} 
          onChange={(e) => setName(e.target.value )}
        />

        <label>Tagline</label>
        <input 
          type="text"
          name="tagline"
          value={tagline} 
          onChange={(e) => setTagline(e.target.value )}
        />

        <label>Description</label>
        <input 
          type="text"
          name="description"
          value={description} 
          onChange={(e) => setDescription(e.target.value )}
        />

        <label>First Brewed</label>
        <input 
          type="text"
          name="first_brewed"
          value={firstBrewed} 
          onChange={(e) => setFirstBrewed(e.target.value )}
        />

        <label>Brewers Tips</label>
        <input 
          type="text"
          name="brewers_tips"
          value={brewersTips} 
          onChange={(e) => setBrewersTips(e.target.value )}
        />

        <label>Attenuation Level</label>
        <input 
          type="number"
          name="attenuation_level"
          value={attenuationLevel} 
          onChange={(e) => setAttenuationLevel(e.target.value )}
        />

        <label>Contributed By</label>
        <input 
          type="text"
          name="contributed_by"
          value={contributedBy} 
          onChange={(e) => setContributedBy(e.target.value )}
        />

        <button type='submit' className='button'>ADD NEW</button>
      </form>
    </div>
  )
}

export default NewBeer