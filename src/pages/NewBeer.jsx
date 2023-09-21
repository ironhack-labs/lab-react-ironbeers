import axios from 'axios'
import React, { useState } from 'react'
import Header from '../components/Header'

function NewBeer(props) {
  const [name, setName] = useState('')
  const [tagline, setTagline] = useState('')
  const [description, setDescription] = useState('')
  const [firstBrewed, setFirstBrewed] = useState('')
  const [brewersTips, setBrewersTips] = useState('')
  const [attenuationLevel, setAttenuationLevel] = useState('')
  const [contributedBy, setContributedBy] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [success, setSuccess] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    try {
      axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {name, tagline, description, first_brewed: firstBrewed, brewers_tips:brewersTips, attenuation_level:attenuationLevel, image_url: imageUrl, contributed_by: contributedBy})
      .then(result => {
        setSuccess(true)
      })
    }
    catch (err) {
      console.log(err)
    }
  }
  return (
    <div>
      <Header></Header>
      <div className='newBeer'>
        <form onSubmit={handleSubmit} method='POST'>
          <p>Name</p>
          <input onChange={e => setName(e.target.value)} name="name"></input>
          <p>Tagline</p>
          <input onChange={e => setTagline(e.target.value)} name="tagline"></input>
          <p>Description</p>
          <textarea onChange={e => setDescription(e.target.value)} rows='5' name="description"></textarea>
          <p>First Brewed</p>
          <input onChange={e => setFirstBrewed(e.target.value)} name="first_brewed"></input>
          <p>Brewers Tips</p>
          <input onChange={e => setBrewersTips(e.target.value)} name="brewers_tips"></input>
          <p>Attenuation Level</p>
          <input onChange={e => setAttenuationLevel(e.target.value)} name="attenuation_level" type='number'></input>
          <p>Image</p>
          <input onChange={e => setImageUrl(e.target.value)} name="image_url"></input>
          <p>Contributed By</p>
          <input onChange={e => setContributedBy(e.target.value)} name="contributed_by"></input>
          <button type='submit'>ADD NEW</button>
          {success && <div className='success'>Beer saved successfully</div>}
        </form>
      </div>  
    </div>
  )
}

export default NewBeer