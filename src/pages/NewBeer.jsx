import React from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useState } from 'react'

function NewBeer() {
  const [ nameImput, setNameImput ] = useState("")
  const [ taglineImput, setTaglineImput ] = useState("")
  const [ descriptionImput, setDescriptionImput ] = useState("")
  const [ firstBrewedImput, setFirstBrewedImput ] = useState("")
  const [ brewersTipsImput, setBrewersTipsImput ] = useState("")
  const [ attenuationLevelImput, setAttenuationLevelImput ] = useState(0)
  const [ contributedByImput, setContributedByImput ] = useState("")

  const handleNameChange = (event) => setNameImput(event.target.value)
  const handleTaglineChange = (event) => setTaglineImput(event.target.value)
  const handleDescriptionChange = (event) => setDescriptionImput(event.target.value)
  const handleFirstBrewedChange = (event) => setFirstBrewedImput(event.target.value)
  const handleBrewersTipsChange = (event) => setBrewersTipsImput(event.target.value)
  const handleAttennuationLevelChange = (event) => setAttenuationLevelImput(event.target.value)
  const handleContributedByChange = (event) => setContributedByImput(event.target.value)

  const handleSubmit = async (event) => {
    event.preventDefault()

    const newBeer = {
      name: nameImput,
      tagline: taglineImput,
      description: descriptionImput,
      first_brewed: firstBrewedImput,
      brewers_tips: brewersTipsImput,
      attenuation_level: attenuationLevelImput,
      contributed_by: contributedByImput
    }

    try{
       await axios.post('https://ih-beers-api2.herokuapp.com/beers/new',newBeer )
    }
    catch(err){
      console.log(err)
    }
  }


  return (
    <div>
        <h3>Cervezas nuevas</h3>
        <Navbar/>

        <form className='form'>
          <label htmlFor="name">Name:</label>
          <input value={nameImput} type="text" name='title' onChange={handleNameChange}/>
          <br/>
          <label htmlFor="tagLine">Tagline:</label>
          <input value={taglineImput} type="text" name='tagline' onChange={handleTaglineChange}/>
          <br/>
          <label htmlFor="description">Description:</label>
          <textarea value={descriptionImput} type="text" name='description' onChange={handleDescriptionChange}/>
          <br/>
          <label htmlFor="firstBrewed">First Brewed:</label>
          <input value={firstBrewedImput} type="text" name='firstBrewed' onChange={handleFirstBrewedChange}/>
          <br/>
          <label htmlFor="brewersTips">Brewers Tips:</label>
          <input value={brewersTipsImput} type="text" name='brewersTips' onChange={handleBrewersTipsChange}/>
          <br/>
          <label htmlFor="attenuationLevel">Attenuation Level:</label>
          <input value={attenuationLevelImput} type="number" name='attenuationLevel' onChange={handleAttennuationLevelChange}/>
          <br/>
          <label htmlFor="contributedBy">Contributed By:</label>
          <input value={contributedByImput} type="text" name='contributedBy' onChange={handleContributedByChange}/>
          <br/>
          <button onClick={handleSubmit}>Agregar</button>

        </form>
    </div>
  )
}

export default NewBeer