import { useNavigate } from "react-router-dom"
import { useState} from "react"
import axios from "axios"
const NewBeer = () => {
    const [name, setName] = useState("")
    const [tagline, setTagline] = useState("")
    const [description, setDescription] = useState("")
    const [firstBrewed, setFirstBrewed] = useState("")
    const [brewersTips, setBrewersTips] = useState("")
    const [attenuationLevel, setAttenuationLevel] = useState("")
    const [contributedBy, setContributedBy] = useState("")
    const navigate = useNavigate()
    
    const handleClick = (e) => {
        e.preventDefault()
        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", {name, tagline, description, first_brewed: firstBrewed, brewers_tips: brewersTips, attenuation_level: attenuationLevel, contributed_by: contributedBy}).then(results => {
            navigate("/beers")
        })
        
    }

    return (
        <form onSubmit={handleClick}>
            <div style={{display: "flex", flexDirection: "column"}}>
                <input type="text" placeholder="Beer Name" name="name" value={name} onChange={e => setName(e.target.value)}/>
                <input type="text" placeholder="Tagline" name="tagline" value={tagline} onChange={e => setTagline(e.target.value)}/>
                <input type="text" placeholder="Description" name="description" value={description} onChange={e => setDescription(e.target.value)}/>
                <input type="text" placeholder="First Brewed Date" name="first_brewed" value={firstBrewed} onChange={e => setFirstBrewed(e.target.value)}/>
                <input type="text" placeholder="Brewers Tips" name="brewers_tips" value={brewersTips} onChange={e => setBrewersTips(e.target.value)}/>
                <input type="number" placeholder="Attenuation Level" name="attenuation_level" value={attenuationLevel} onChange={e => setAttenuationLevel(e.target.value)}/>
                <input type="text" placeholder="Your Name" name="contributed_by" value={contributedBy} onChange={e => setContributedBy(e.target.value)}/>
                <button type="submit">Add Beer</button>
            </div>
        </form>
    )
}

export default NewBeer