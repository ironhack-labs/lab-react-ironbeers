import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CreateBeer = () => {
    const [name, setName] = useState('')
    const [tagline, setTagline] = useState('')
    const [description, setDescription] = useState('')
    const [first_brewed, setFirst_brewed] = useState('')
    const [brewers_tips, setBrewers_tips] = useState('')
    const [attenuation_level, setAttenuation_level] = useState(0)
    const [contributed_by, setContributed_by] = useState('')
    const [image_url, setImage_url] = useState('')
    const [newBeer, setNewBeer] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
            name,
            tagline,
            description,
            first_brewed,
            brewers_tips,
            attenuation_level,
            contributed_by,
            image_url
        }).then(response => {
            setNewBeer(response.data)
            setIsLoading(false)
        })

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={name} onChange={e => setName(e.target.value)} />
                <label htmlFor="tagline">Tagline</label>
                <input type="text" name="tagline" id="tagline" value={tagline} onChange={e => setTagline(e.target.value)} />
                <label htmlFor="description">Description</label>
                <input type="text" name="description" id="description" value={description} onChange={e => setDescription(e.target.value)} />
                <label htmlFor="first_brewed">First Brewed</label>
                <input type="text" name="first_brewed" id="first_brewed" value={first_brewed} onChange={e => setFirst_brewed(e.target.value)} />
                <label htmlFor="brewers_tips">Brewers Tips</label>
                <input type="text" name="brewers_tips" id="brewers_tips" value={brewers_tips} onChange={e => setBrewers_tips(e.target.value)} />
                <label htmlFor="attenuation_level">Attenuation Level</label>
                <input type="number" name="attenuation_level" id="attenuation_level" value={attenuation_level} onChange={e => setAttenuation_level(e.target.value)} />
                <label htmlFor="contributed_by">Contributed By</label>
                <input type="text" name="contributed_by" id="contributed_by" value={contributed_by} onChange={e => setContributed_by(e.target.value)} />
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default CreateBeer