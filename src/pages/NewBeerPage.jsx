import { useState } from "react";  
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function NewBeerPage() {
    const [name, setName] = useState("")
    const [tagline, setTagline] = useState("")
    const [description, setDescription] = useState("")
    const [first_brewed, setFristBrewed] = useState("")
    const [brewers_tips, setBrewersTips] = useState("")
    const [attenuation_level, setAttenuationLevel] = useState(1)
    const [contributed_by, setContributedBy] = useState("")

    const navigate = useNavigate()

    const API_URL = process.env.REACT_APP_BASE_URL; 

    const handleSubmit = (e) => {
        e.preventDefault();

        const newBeer = {name: name, tagline:tagline, description:description, first_brewed:first_brewed, brewers_tips: brewers_tips, attenuation_level: attenuation_level, contributed_by: contributed_by }
    
        axios.post(`${API_URL}/beers/new`, newBeer)
            .then(response => navigate('/beers'))
            .catch(err => console.log('err', err))
    }

    return (
        <div className="AddNewBeer">
        <h1>Add New Beer</h1>
        <form onSubmit={handleSubmit} >
            <label>Name</label>
            <input
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            <br/>

            <label>Tagline</label>
            <input
                type="text"
                name="tagline"
                onChange={(e) => setTagline(e.target.value)}
                value={tagline}
            /> <br/>

            <label>Description</label>
            <input
                type="text"
                name="description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            /> <br/>

            <label>First Brewed</label>
            <input
                type="text"
                name="first_brewed"
                onChange={(e) => setFristBrewed(e.target.value)}
                value={first_brewed}
            /> <br/>

            <label>Brewers Tips</label>
            <input
                type="text"
                name="brewers_tips"
                onChange={(e) => setBrewersTips(e.target.value)}
                value={brewers_tips}
            /> <br/>

            <label>Attenuation Level</label>
            <input
                type="number"
                name="attenuation_level"
                onChange={(e) => setAttenuationLevel(e.target.value)}
                value={attenuation_level}
            /> <br/>

            <label>Contributed by</label>
            <input
                type="text"
                name="contributed_by"
                onChange={(e) => setContributedBy(e.target.value)}
                value={contributed_by}
            /> <br/>

            <button type="submit">Create New Beer</button>
        </form>
        </div>
    )
}

export default NewBeerPage;