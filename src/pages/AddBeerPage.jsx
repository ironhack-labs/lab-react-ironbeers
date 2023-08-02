import React from "react"
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"

function AddBeerPage() {
    const [name, setName] = useState("")
    const [tagline, setTagline] = useState("")
    const [description, setDescription] = useState("")
    const [first_brewed, setFirstBrewed] = useState("")
    const [brewers_tips, setBrewersTips] = useState("")
    const [attenuation_level, setAttenuationLevel] = useState("")
    const [contributed_by, setContributedBy] = useState("")

    const navigate = useNavigate()

    const handleName = e => setName(e.target.value)
    const handleTagline = e => setTagline(e.target.value)
    const handleDescription = e => setDescription(e.target.value)
    const handleFirstBrewed = e => setFirstBrewed(e.target.value)
    const handleBrewersTips = e => setBrewersTips(e.target.value)
    const handleAttenuationLevel = e => setAttenuationLevel(e.target.value)
    const handleContributedBy = e => setContributedBy(e.target.value)

    const handleSubmit = e => {
        e.preventDefault()

        const newBeer = {
            name,
            tagline,
            description,
            first_brewed,
            brewers_tips,
            attenuation_level,
            contributed_by,
        }

        axios
            .post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
            .then(response => {
                console.log(response)
                setName("")
                setTagline("")
                setDescription("")
                setFirstBrewed("")
                setBrewersTips("")
                setAttenuationLevel("")
                setContributedBy("")
                navigate("/beers")
            })
            .catch(error => console.log(error))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input id="name" value={name} type="text" onChange={handleName} />

            <label htmlFor="tagline">Tagline: </label>
            <input id="tagline" value={tagline} type="text" onChange={handleTagline} />

            <label htmlFor="description">Description: </label>
            <textarea
                id="description"
                value={description}
                type="text"
                onChange={handleDescription}
            />

            <label htmlFor="first-brewed">First brewed: </label>
            <input
                id="first_brewed"
                value={first_brewed}
                type="text"
                onChange={handleFirstBrewed}
            />

            <label htmlFor="brewers-tips">Brewer's tips: </label>
            <input
                id="brewers_tips"
                value={brewers_tips}
                type="text"
                onChange={handleBrewersTips}
            />

            <label htmlFor="attenuation-level">Attenuation level: </label>
            <input
                id="attenuation_level"
                value={attenuation_level}
                type="number"
                onChange={handleAttenuationLevel}
            />

            <label htmlFor="contributed-by">Contributed by: </label>
            <input
                id="contributed_by"
                value={contributed_by}
                type="text"
                onChange={handleContributedBy}
            />

            <button type="submit">Add Beer</button>
        </form>
    )
}

export default AddBeerPage
