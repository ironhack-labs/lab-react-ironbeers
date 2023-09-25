import React from 'react'
import Homebutton from './Homebutton'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Newbeer() {
  const [name, setName] = useState('')
  const [tagline, setTagline] = useState('')
  const [description, setDescription] = useState('')
  const [first_brewed, setFirst_brewed] = useState('')
  const [brewers_tips, setBrewers_tips] = useState('')
  const [attenuation_level, setAttenuation_level] = useState(0)
  const [contributed_by, setContributed_by] = useState('')

  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();

    const newBeer = { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by }
    axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`, newBeer)
      .then((response) => {
        setName("")
        setTagline("")
        setDescription("")
        setFirst_brewed("")
        setBrewers_tips("")
        setAttenuation_level(0)
        setContributed_by("")
        alert("New Beer Created")
        navigate('/')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <Homebutton></Homebutton>
      <div className='card-form'>
        <form onSubmit={handleSubmit}>
          <label>
            Name of Beer:
            <br />
            <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
          </label>
          <br />
          <label>
            Tagline:
            <br />
            <input type="text" value={tagline} onChange={(e) => { setTagline(e.target.value) }} />
          </label>
          <br />
          <label>
            Description:
            <br />
            <input type="text" value={description} onChange={(e) => { setDescription(e.target.value) }} />
          </label>
          <br />
          <label>
            First Brewed:
            <br />
            <input type="text" value={first_brewed} onChange={(e) => { setFirst_brewed(e.target.value) }} />
          </label>
          <br />
          <label>
            Brewers Tip:
            <br />
            <input type="text" value={brewers_tips} onChange={(e) => { setBrewers_tips(e.target.value) }} />
          </label>
          <br />
          <label>
            Attenuation Level:
            <br />
            <input type="text" value={attenuation_level} onChange={(e) => { setAttenuation_level(e.target.value) }} />
          </label>
          <br />
          <label>
            Contributed By:
            <br />
            <input type="text" value={contributed_by} onChange={(e) => { setContributed_by(e.target.value) }} />
          </label>
          <br />
          <button>Add New Beer</button>
        </form>
      </div>
    </div>
  )
}

export default Newbeer

// name - must be type text
// tagline - must be type text
// description - must be type text
// first_brewed - must be type text
// brewers_tips - must be type text
// attenuation_level - must be type number !!!
// contributed_by - must be type text