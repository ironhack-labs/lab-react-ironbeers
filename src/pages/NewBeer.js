import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
export default function NewBeer() {
  const [name, setName] = useState('')
  const [tagline, setTagline] = useState('')
  const [description, setDescription] = useState('')
  const [level, setlevel] = useState(0)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', {
        name,
        tagline,
        description,
        level,
      })
      .then((response) => {
        console.log(response)
        navigate('/')
      })
      .catch((err) => console.log(err))
  }

  return (
    <>
      <h1>Add Bears</h1>
      <form onSubmit={handleSubmit}>
        <input
          id='name'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='enter name'
        />
        <input
          id='tagline'
          type='text'
          value={tagline}
          onChange={(e) => setTagline(e.target.value)}
          placeholder='enter tagline'
        />
        <input
          id='description'
          type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder='enter description'
        />
        <input
          id='title'
          type='number'
          value={level}
          onChange={(e) => setlevel(e.target.value)}
          placeholder='enter level'
        />

        <button type='submit'> Add beer</button>
      </form>
    </>
  )
}
