import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const addBeerAPI = "https://ih-beers-api2.herokuapp.com/beers/new"

function AddBeerPage() {
    const [name, setName] = useState("")
    const [tagline, setTagline] = useState("")
    const [description, setDescription] = useState("")
    const [firstBrewed, setFirstBrewed] = useState("")
    const [brewersTips, setBrewersTips] = useState("")
    const [attenuationLevel, setAttenuationLevel] = useState(0)
    const [contributedBy, setContributedBy] = useState("")

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        const requestBody = { name, tagline, description, firstBrewed, brewersTips, attenuationLevel, contributedBy }
        axios
            .post(addBeerAPI, requestBody)
            .then((response) => {
                navigate("/beers")
            })
            .catch((error) => console.log(error))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={name} onChange={(event) => setName(event.target.value)} />

                <label htmlFor="tagline">Tagline</label>
                <input type="text" name="tagline" value={tagline} onChange={(event) => setTagline(event.target.value)} />

                <label htmlFor="description">Description</label>
                <input type="text" name="description" value={description} onChange={(event) => setDescription(event.target.value)} />

                <label htmlFor="first_brewed">First Brewed</label>
                <input type="text" name="first_brewed" value={firstBrewed} onChange={(event) => setFirstBrewed(event.target.value)} />

                <label htmlFor="brewers_tips">Brewers Tips</label>
                <input type="text" name="brewers_tips" value={brewersTips} onChange={(event) => setBrewersTips(event.target.value)} />

                <label htmlFor="attenuation_level">Attenuation Level</label>
                <input type="number" name="attenuation_level" value={attenuationLevel} onChange={(event) => setAttenuationLevel(event.target.value)} />

                <label htmlFor="contributed_by">Contributed By</label>
                <input type="text" name="contributed_by" value={contributedBy} onChange={(event) => setContributedBy(event.target.value)} />

                <button type="submit">Add Beer</button>
            </form>
        </div>
    )
}

export default AddBeerPage;
