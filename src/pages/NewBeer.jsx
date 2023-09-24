import React, { useState } from 'react'
import Header from '../components/Header'
import axios from 'axios'


function NewBeer() {
  const [name, setName] = useState("")
  const [tagline, setTagline] = useState("")
  const [description, setDescription] = useState("")
  const [first_brewed, setFirstBrewed] = useState("")
  const [brewers_tips, setBrewerTips] = useState("")
  const [attenuation_level, setAttenuationLevel] = useState("")
  const [contributed_by, setContributedBy] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    const newBeer = { name: name, tagline: tagline, description: description, first_brewed: first_brewed, brewers_tips: brewers_tips, attenuation_level: attenuation_level, contributed_by: contributed_by }
    axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
      .then(() => {

      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <>
      <Header></Header>

      <>
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
          </label>
          <br />
          <br />
          <label>
            Tagline
            <input type="text" value={tagline} onChange={(e) => { setTagline(e.target.value) }} />
          </label>
          <br />
          <br />
          <label>
            Description
            <input type="text" value={description} onChange={(e) => { setDescription(e.target.value) }} />
          </label>
          <br />
          <br />
          <label>
            First brewed
            <input type="text" value={first_brewed} onChange={(e) => { setFirstBrewed(e.target.value) }} />
          </label>
          <br />
          <br />
          <label>
            Brewers Tips
            <input type="text" value={brewers_tips} onChange={(e) => { setBrewerTips(e.target.value) }} />
          </label>
          <br />
          <br />
          <label>
            Attenuation Level
            <input type="number" value={attenuation_level} onChange={(e) => { setAttenuationLevel(e.target.value) }} />
          </label>
          <br />
          <br />
          <label>
            Contributed By
            <input type="text" value={contributed_by} onChange={(e) => { setContributedBy(e.target.value) }} />
          </label>
          <br /><br /><br />
          <button>Submit</button>
        </form>
      </>
    </>

  )
}

export default NewBeer