import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

import Header from "../components/Header"

function NewBeer() {

    const[name, setName] = useState("")
    const[tagline, setTagline] = useState("")
    const[description, setDescription] = useState("")
    const[firstBrewed, setFirstBrewed] = useState("")
    const[brewersTips, setBrewersTips] = useState("")
    const[attenuationLevel, setAttenuationLevel] = useState(0)
    const[contributedBy, setContributedBy] = useState("")

    const handleNameChange = (e) => setName(e.target.value)
    const handleTaglineChange = (e) => setTagline(e.target.value)
    const handleDescriptionChange = (e) => setDescription(e.target.value)
    const handleFirstBrewedChange = (e) =>  setFirstBrewed(e.target.value)
    const handleBrewersTipsChange = (e) => setBrewersTips(e.target.value)
    const handleAttenuationLevelChange = (e) => setAttenuationLevel(e.target.value)
    const handleContributedByChange = (e) => setContributedBy(e.target.value)

    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()

        const body = {name, tagline, description, first_brewed :firstBrewed, brewers_tips : brewersTips , attenuation_level: attenuationLevel, contributed_by : contributedBy}
    
        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", body)
            .then(response => {
                setName("")
                setTagline("")
                setDescription("")
                setFirstBrewed("")
                setBrewersTips("")
                setAttenuationLevel(0)
                setContributedBy("")

                navigate("/")
            })
    }

    return(
        <>
        <Header />
        
        <form onSubmit={handleSubmit}>

            <label>Name</label>
            <input type="text" value={name} onChange={handleNameChange} name="name" />

            <label>Tagline</label>
            <input type="text" value={tagline} onChange={handleTaglineChange} name="tagline" />

            <label>Description</label>
            <input type="text" value={description} onChange={handleDescriptionChange} name="description" />
            
            <label>First brewed</label>
            <input type="text" value={firstBrewed} onChange={handleFirstBrewedChange} name="firstBrewed" />

            <label>Brewers tips</label>
            <input type="text" value={brewersTips} onChange={handleBrewersTipsChange} name="brewersTips" />

            <label>Attenuation level</label>
            <input type="number" value={attenuationLevel} onChange={handleAttenuationLevelChange} name="attenuationLevel" />

            <label>Contributed by</label>
            <input type="text" value={contributedBy} onChange={handleContributedByChange} name="contributedBy" />

            <button type="submit">Create a new beer</button>

        </form>
        </>
    )
}

export default NewBeer