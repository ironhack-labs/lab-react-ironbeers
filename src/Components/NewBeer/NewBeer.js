import React, { useState } from 'react'
import axios from '../../axios/axiosinstance'

function NewBeer() {
  const [newForm, setNewForm] = useState({})
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const submitHandler = e => {
    e.preventDefault()
    //TODO add some Validation we asume we are ok for now
    axios.post('/new', { ...newForm })
      .then(data => {
        console.log(data)
        data.status === 200 ? setIsSuccess(true) : setError("Something happend in Server Please try again")
      }).catch(err => {
        setError("Something happend in Server Please try again, see the cosole")
        console.log(err)
      })
  }


  const handleChange = e => {
    const { name: key, value } = e.currentTarget;
    setNewForm(prevState => ({ ...prevState, [key]: value }))
  }
  return (
    <div>
      <form class="flex center newBeer" onSubmit={submitHandler}>

        <label>Name: <input type="text" name="name" onChange={handleChange} /></label>
        <label>Tag Line : <input type="text" name="tagline" onChange={handleChange} /></label>
        <label>Description : <input type="text" name="description" onChange={handleChange} /></label>
        <label>First Brewed : <input type="text" name="first_brewed" onChange={handleChange} /></label>
        <label>Brewers Tips :<input type="text" name="brewers_tips" onChange={handleChange} /></label>
        <label>Attenuation level : <input type="text" name="attenuation_level" onChange={handleChange} /></label>
        <label>Contributed by :<input type="text" name="contributed_by" onChange={handleChange} /></label>
        <button type="submit">Submit</button>
      </form>
      {isSuccess && "SuccessFully added new Beer to the Data base"}
      {error}
    </div>
  )
}

export default NewBeer
