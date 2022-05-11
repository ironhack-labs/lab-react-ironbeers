import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';

function NewBeerPage() {

    const [name, setName] = useState('')
    const [tagline, setTagline] = useState('')
    const [description, setDescription] = useState('')
    const [first_brewed, setFirstBrewed] = useState('')
    const [brewers_tips, setBrewersTips] = useState('')
    const [attenuation_level, setAttenuationLevel] = useState('')
    const [contributed_by, setContributedBy] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();
        const body = { 
            name : name, 
            tagline : tagline,
            description : description,
            first_brewed : first_brewed,
            brewers_tips : brewers_tips,
            attenuation_level : attenuation_level,
            contributed_by : contributed_by
        }

        axios
        .post('https://ih-beers-api2.herokuapp.com/beers/new', body)
        .then((response) => {
            setName('')
            setTagline('')
            setDescription('')
            setFirstBrewed('')
            setBrewersTips('')
            setAttenuationLevel('')
            setContributedBy('')

            console.log(body)
        })
    }

    return (
        <div>
            <Link to='/'>Header</Link>  
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}></input>

                <label>Tagline</label>
                <input type="text" name="tagline" value={tagline} onChange={(e) => setTagline(e.target.value)}></input>

                <label>Description</label>
                <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)}></input>

                <label>First Brewed</label>
                <input type="text" name="first_brewed" value={first_brewed} onChange={(e) => setFirstBrewed(e.target.value)}></input>

                <label>Brewers Tips</label>
                <input type="text" name="brewers_tips" value={brewers_tips} onChange={(e) => setBrewersTips(e.target.value)}></input>

                <label>Attenuation Level</label>
                <input type="number" name="attenuation_level" value={attenuation_level} onChange={(e) => setAttenuationLevel(e.target.value)}></input>

                <label>Contributed By</label>
                <input type="text" name="contributed_by" value={contributed_by} onChange={(e) => setContributedBy(e.target.value)}></input>

                <input type="submit" value="ADD NEW"></input>
            </form>
        </div>
    )


}

export default NewBeerPage;