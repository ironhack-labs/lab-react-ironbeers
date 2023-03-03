import React, {useState} from 'react'
import Header from '../components/Header'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

function NewBeer() {

    const [name, setName] = useState("")
    const [tagline, setTagline] = useState("")
    const [description, setDescription] = useState("")
    const [firstBrewed, setFirstBrewed] = useState("")
    const [brewersTips, setBrewersTips] = useState("")
    const [attenuationLevel, setAttenuationLevel] = useState(0)
    const [contributedBy, setContributedBy] = useState("")

    const navigate = useNavigate()

    const handleName = (e) => setName(e.target.value)
    const handleTagline = (e) => setTagline(e.target.value)
    const handleDescription = (e) => setDescription(e.target.value)
    const handleFirstBrewed = (e) => setFirstBrewed(e.target.value)
    const handleBrewersTips = (e) => setBrewersTips(e.target.value)
    const handleAttenuationLevel = (e) => setAttenuationLevel(e.target.value)
    const handleContributedBy = (e) => setContributedBy(e.target.value)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newBeer = {name, tagline, description, firstBrewed, brewersTips, attenuationLevel, contributedBy}

        try {
            await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
            alert('Beer submited!')
            navigate('/beer-list')
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
        <Header/>
        <h3>Add New Apartment</h3>

        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" value={name} onChange={handleName} />

            <label htmlFor="tagline">Tagline:</label>
            <input type="text" name="tagline" value={tagline} onChange={handleTagline} />

            <label htmlFor="description">Description:</label>
            <input type="text" name="description" value={description} onChange={handleDescription} />

            <label htmlFor="firstbrewed">First Brewed:</label>
            <input type="text" name="firstbrewed" value={firstBrewed} onChange={handleFirstBrewed} />

            <label htmlFor="brewerstips">Brewer's tips::</label>
            <input type="text" name="brewerstips" value={brewersTips} onChange={handleBrewersTips} />

            <label htmlFor="attenuationlevel">Attenuation Level:</label>
            <input type="number" name="attenuationlevel" value={attenuationLevel} onChange={handleAttenuationLevel} />

            <label htmlFor="contributedby">Contributed by::</label>
            <input type="text" name="contributedby" value={contributedBy} onChange={handleContributedBy} />

            <button type="submit">Add Beer</button>
        </form>

    </div>
  )
}

export default NewBeer