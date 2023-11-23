import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"


function AddBeerPage() {
    const [name, setName] = useState("")
    const [tagline, setTagline] = useState("")
    const [description, setDescription] = useState("")
    const [firstBrewed, setFirstBrewed] = useState("")
    const [brewersTips, setBrewersTips] = useState("")
    const [attenuationLevel, setAttenuationLevel] = useState(0)
    const [contributedBy, setContributedBy] = useState("")

    const navigate = useNavigate()

    const addBeer = newBeer => {
        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
            .then(response => {
                // navigate("/")
                console.log(newBeer)
            })
            .catch(err => console.log("ERROR", err))



    }


    const handleNameValue = e => {
        const { value } = e.target
        setName(value)
    }

    const handleTaglineValue = e => {
        const { value } = e.target
        setTagline(value)
    }

    const handleDescriptionValue = e => {
        const { value } = e.target
        setDescription(value)
    }

    const handleFirstBrewedValue = e => {
        const { value } = e.target
        setFirstBrewed(value)
    }

    const handleBrewersTipsValue = e => {
        const { value } = e.target
        setBrewersTips(value)
    }

    const handleAttenuationLevelValue = e => {
        const { value } = e.target
        setAttenuationLevel(value)
    }

    const handleContributedByValue = e => {
        const { value } = e.target
        setContributedBy(value)
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        const beer = {
            name,
            tagline,
            description,
            first_brewed: firstBrewed,
            brewers_tips: brewersTips,
            attenuation_level: attenuationLevel,
            contributed_by: contributedBy,
        }
        addBeer(beer)
    }
    return (
        <div className="NewBeerForm" onSubmit={handleFormSubmit}>
            <form>
                Name: <input type="text" name="name" value={name} onChange={handleNameValue} />
                <hr />
                Tagline: <input type="text" name="tagline" value={tagline} onChange={handleTaglineValue} />
                <hr />
                Description: <textarea type="text" name="description" value={description} onChange={handleDescriptionValue} />
                <hr />
                First brewed: <input type="text" name="first_brewed" value={firstBrewed} onChange={handleFirstBrewedValue} />
                <hr />
                Brewer tips: <input type="text" name="brewers_tips" value={brewersTips} onChange={handleBrewersTipsValue} />
                <hr />
                Attenuation Level: <input type="number" name="attenuation_level" value={attenuationLevel} onChange={handleAttenuationLevelValue} />
                <hr />
                Contributed by: <input type="text" name="contributed_by" value={contributedBy} onChange={handleContributedByValue} />
                <hr />
                <button type="submit" name="add beer" value="Add Beer">Add Beer</button>
            </form>
        </div>
    )
}

export default AddBeerPage;
