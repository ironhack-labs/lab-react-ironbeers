import axios from 'axios'
import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'


function NewBeer() {
    const [name, setName] = useState("")
    const [tagline, setTagline] = useState("")
    const [description, setDescription] = useState("")
    const [first_brewed, setFirstBrewed] = useState("")
    const [brewer_tips, setBrewerTips] = useState("")
    const [attenuation_level, setAttenuationLevel] = useState(0)
    const [contributed_by, setContributedBy] = useState("")

    const handleName = (e) => setName(e.target.value)
    const handleTagline = (e) => setTagline(e.target.value)
    const handleDescription = (e) => setDescription(e.target.value)
    const handleFirstBrewed = (e) => setFirstBrewed(e.target.value)
    const handleBrewerTips = (e) => setBrewerTips(e.target.value)
    const handleAttenuationLevel = (e) => setAttenuationLevel(e.target.value)
    const handleContributedBy = (e) => setContributedBy(e.target.value)

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            const body = {name, tagline, description, first_brewed, brewer_tips, attenuation_level, contributed_by};
            axios.post("https://ih-beers-api2.herokuapp.com/beers/new", body);

            navigate("/beers");
        } catch (error) {
           console.log(error) 
        }


    }
  return (
    <div>
        <Navbar />
        <h2>Add a Beer!</h2>
        <form onSubmit={handleSubmit} className="add-form">
            <label htmlFor="name">Name:</label>
            <input type="text" value={name} onChange={handleName}/>

            <label htmlFor="tagline">Tagline:</label>
            <input type="text" value={tagline} onChange={handleTagline}/>

            <label htmlFor="description">description:</label>
            <input type="text" value={description} onChange={handleDescription}/>

            <label htmlFor="first_brewed">First Brewed:</label>
            <input type="text" value={first_brewed} onChange={handleFirstBrewed}/>

            <label htmlFor="brewer_tips">Brewer Tips:</label>
            <input type="text" value={brewer_tips} onChange={handleBrewerTips}/>

            <label htmlFor="attenuation_level">Attenuation Level:</label>
            <input type="number" value={attenuation_level} onChange={handleAttenuationLevel}/>

            <label htmlFor="contributed_by">Contributed By:</label>
            <input type="text" value={contributed_by} onChange={handleContributedBy}/>

            <button type="submit">Add Beer</button>
        </form>
    </div>
  )
}

export default NewBeer