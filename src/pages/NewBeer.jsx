import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'

function NewBeer() {
    const [name, setName] = useState('')
    const [tagline, setTagline] = useState('')
    const [description, setDescription] = useState('')
    const [first_brewed, setFirst_brewed] = useState('')
    const [brewers_tips, setBrewers_tips] = useState('')
    const [attenuation_level, setAttenuation_level] = useState(0)
    const [contributed_by, setContributed_by] = useState('')

    const navigate = useNavigate()

    const handleName = (e) => setName(e.target.value)
    const handleTagline = (e) => setTagline(e.target.value)
    const handleDescription = (e) => setDescription(e.target.value)
    const handleFirst_brewed = (e) => setFirst_brewed(e.target.value)
    const handleBrewers_tips = (e) => setBrewers_tips(e.target.value)
    const handleAttenuation_level = (e) => setAttenuation_level(Number(e.target.value))
    const handleContributed_by = (e) => setContributed_by(e.target.value)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newBeer = {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by}

        try {
          await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)

          navigate("/beers")

        } catch (error) {
          console.log(error)
        }
    }

  return (
    <div>
    <Header />
      <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name</label>
            <input type="text" name="name" value={name} onChange={handleName}/>
            <label htmlFor='tagline'>Tagline</label>
            <input type="text" name="tagline" value={tagline} onChange={handleTagline}/>
            <label htmlFor='description'>Description</label>
            <textarea type="textarea" name="description" value={description} onChange={handleDescription}/>
            <label htmlFor='first_brewed'>First Brewed</label>
            <input type="text" name="first_brewed" value={first_brewed} onChange={handleFirst_brewed}/>
            <label htmlFor='brewers_tip'>Brewers Tips</label>
            <input type="text" name="brewers_tip" value={brewers_tips} onChange={handleBrewers_tips}/>
            <label htmlFor='attenuation_level'>Attenuation Level</label>
            <input type="number" name="attenuation_level" placeholder="0" value={attenuation_level} onChange={handleAttenuation_level}/>
            <label htmlFor='contributed_by'>Contributed By</label>
            <input type="text" name="contributed_by" value={contributed_by} onChange={handleContributed_by}/>

            <button type="submit">ADD NEW</button>
      </form>


    </div>
  )
}

export default NewBeer