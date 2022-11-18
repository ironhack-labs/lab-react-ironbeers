import { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

function NewBeer() {
    const [name, setName] = useState('')
    const [tagline, setTagline] = useState('')
    const [description, setDescription] = useState('')
    const [firstBrewed, setFirstBrewed] = useState('')
    const [brewersTips, setBrewersTips] = useState('')
    const [attenuationLevel, setAttenuationLevel] = useState(0)
    const [contributedBy, setContributedBy] = useState('')

    const handleName = (e) => setName(e.target.value)
    const handleTagline = (e) => setTagline(e.target.value)
    const handleDescription = (e) => setDescription(e.target.value)
    const handleFirstBrewed = (e) => setFirstBrewed(e.target.value)
    const handleBrewersTips = (e) => setBrewersTips(e.target.value)
    const handleAttenuationLevel = (e) => setAttenuationLevel(e.target.value)
    const handleContributedBy = (e) => setContributedBy(e.target.value)

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const body = { name, tagline, description, firstBrewed, brewersTips, attenuationLevel, contributedBy }
            await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', body)

            setName();
            setTagline();
            setDescription();
            setFirstBrewed();
            setBrewersTips();
            setAttenuationLevel();
            setContributedBy();

            navigate('/')

        } catch (error) {
            console.log(error)
        }
    }

    
  return (
    <div>
        <div>
    <Link to='/'>
        <img src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png" alt="navbar" />
    </Link>
    <h3>Add New Beer</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" value={name} onChange={handleName} />

        <label htmlFor="tagline">Tagline:</label>
        <input type="text" value={tagline} onChange={handleTagline} />

        <label htmlFor="description">Description:</label>
        <input type="text" value={description} onChange={handleDescription} />

        <label htmlFor="firstBrewed">First Brewed:</label>
        <input type="text" value={firstBrewed} onChange={handleFirstBrewed} />

        <label htmlFor="brewersTips">Brewers Tips:</label>
        <input type="text" value={brewersTips} onChange={handleBrewersTips} />

        <label htmlFor="attenuationLevel">Attenuation Level:</label>
        <input type="number" value={attenuationLevel} onChange={handleAttenuationLevel} />

        <label htmlFor="contributedBy">Contributed By:</label>
        <input type="text" value={contributedBy} onChange={handleContributedBy} />

        <button type="Submit">Create</button>
      </form>
    </div>



    </div>
  )
}

export default NewBeer