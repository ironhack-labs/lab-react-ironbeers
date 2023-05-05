import { useEffect, useState } from "react"
import axios from "axios"
import NavBar from "../components/NavBar"
import { useNavigate } from "react-router-dom"

function NewBeerPage() {
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

    return (
        <div>
            <NavBar />
            <br /><br />
            <form onSubmit={handleSubmit} className="add-beer-form">

            <label className="add-beer-label">Name</label>
            <input type="text" value={name} onChange={handleNameChange} name="name" className="add-beer-input" />

            <label className="add-beer-label">Tagline</label>
            <input type="text" value={tagline} onChange={handleTaglineChange} name="tagline" className="add-beer-input" />

            <label className="add-beer-label">Description</label>
            <input type="text" value={description} onChange={handleDescriptionChange} name="description" className="add-beer-input-description" />

            <label className="add-beer-label">First brewed</label>
            <input type="text" value={firstBrewed} onChange={handleFirstBrewedChange} name="firstBrewed" className="add-beer-input" />

            <label className="add-beer-label">Brewers tips</label>
            <input type="text" value={brewersTips} onChange={handleBrewersTipsChange} name="brewersTips" className="add-beer-input" />

            <label className="add-beer-label">Attenuation level</label>
            <input type="number" value={attenuationLevel} onChange={handleAttenuationLevelChange} name="attenuationLevel" className="add-beer-input" />

            <label className="add-beer-label">Contributed by</label>
            <input type="text" value={contributedBy} onChange={handleContributedByChange} name="contributedBy" className="add-beer-input" />

            <button type="submit" className="add-beer-button">ADD NEW</button>

        </form>
        </div>
    )
}

export default NewBeerPage