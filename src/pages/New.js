import axios from 'axios'
import React, { useState } from 'react'

export default function New() {

const [name, setName] = useState('')
const [tagline, setTagline] = useState('')
const [description, setDescription] = useState('')
const [first_brewed, setFirstBrewed] = useState('')
const [brewers_tips, setBrewersTips] = useState('')
const [attenuation_level, setAttenuationLevel] = useState(null)
const [contributed_by, setContributedBy] = useState('')

const handleSubmit = e => {
  e.preventDefault()

  axios.post('https://ih-beers-api2.herokuapp.com/beers/new', { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by})
      .then(response => {
        console.log(response)
      })
      .catch(err => console.log(err))
}

// reset the form
// setName('')
// setDescription('')
// }

  return (
    <>
    <header><a href="/">Home</a></header>
    <h1>Create a New Beer</h1>
    <form onSubmit={handleSubmit}>
      <label>Name: </label>
        <input type="text" name='name'value={name} onChange={e => setName(e.target.value)} />
      <label>Tagline: </label>
       <input type="text" name='tagline' value={tagline} onChange={e => setTagline(e.target.value)} />
      <label>Description: </label>
        <input type="text" name='description' value={description} onChange={e => setDescription(e.target.value)} />
      <label>First Brewed: </label>
        <input type="text" name='firstBrewed' value={first_brewed} onChange={e => setFirstBrewed(e.target.value)} />
      <label>Brewers Tips: </label>
        <input type="text" name='brewersTips' value={brewers_tips} onChange={e => setBrewersTips(e.target.value)} />
      <label>Attenuation Level: </label>
        <input type="number" name='attenuationLevel' value={attenuation_level} onChange={e => setAttenuationLevel(e.target.value)} />
      <label>Contributed By: </label>
        <input type="text" name='contributedBy' value={contributed_by} onChange={e => setContributedBy(e.target.value)} />
      <button type='submit'>ADD NEW</button>
    </form>
    </>
  )
}
