import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function AddBeerPage() {

    const apiURL = "https://ih-beers-api2.herokuapp.com/beers/new"

    const [name, setName] = useState("")
    const [tagline, setTagline] = useState("")
    const [description, setDescription] = useState("")
    const [firstBrewed, setFirstBrewed] = useState("")
    const [brewersTips, setBrewersTips] = useState("")
    const [attenuationLevel, setAttenuationLevel] = useState("")
    const [contributedBy, setContributedBy] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        const requestBody = {
            name: name,
            tagline: tagline,
            description: description,
            first_brewed: firstBrewed,
            brewers_tips: brewersTips,
            attenuation_level: attenuationLevel,
            contributed_by: contributedBy
        }

        axios.post(apiURL, requestBody)
            .then((response) => {
                navigate("/beers")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        required={true}
                        value={name}
                        onChange={(e) => { setName(e.target.value) }} />
                </label>

                <label>
                    Tagline
                    <input
                        type="text"
                        name="tagline"
                        required={true}
                        value={tagline}
                        onChange={(e) => { setTagline(e.target.value) }} />
                </label>

                <label>
                    Description
                    <input
                        type="text"
                        name="description"
                        required={true}
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }} />
                </label>

                <label>
                    First Brewed
                    <input
                        type="text"
                        name="first_brewed"
                        required={true}
                        value={firstBrewed}
                        onChange={(e) => { setFirstBrewed(e.target.value) }} />
                </label>

                <label>
                    Brewer's Tips
                    <input
                        type="text"
                        name="brewers_tips"
                        required={true}
                        value={brewersTips}
                        onChange={(e) => { setBrewersTips(e.target.value) }} />
                </label>

                <label>
                    Attenuation Level
                    <input
                        type="number"
                        name="attenuation_level"
                        required={true}
                        value={attenuationLevel}
                        onChange={(e) => { setAttenuationLevel(e.target.value) }} />
                </label>

                <label>
                    Contributed By
                    <input
                        type="text"
                        name="contributed_by"
                        required={true}
                        value={contributedBy}
                        onChange={(e) => { setContributedBy(e.target.value) }} />
                </label>

                <button>Add Beer</button>

            </form>
        </div>
    )
}

export default AddBeerPage
