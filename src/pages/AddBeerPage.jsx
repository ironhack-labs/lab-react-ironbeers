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

        const requestBody = {
            name: name,
            tagline: tagline,
            description: description,
            first_brewed: firstBrewed,
            brewers_tips: brewersTips,
            attenuation_level: attenuationLevel,
            contributed_by: contributedBy
        }

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
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" name="name" className="form-control" value={name} onChange={(event) => setName(event.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="tagline" className="form-label">Tagline</label>
                    <input type="text" name="tagline" className="form-control" value={tagline} onChange={(event) => setTagline(event.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea type="text" name="description" className="form-control" value={description} onChange={(event) => setDescription(event.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="first_brewed" className="form-label">First Brewed</label>
                    <input type="text" name="first_brewed" className="form-control" value={firstBrewed} onChange={(event) => setFirstBrewed(event.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="brewers_tips" className="form-label">Brewers Tips</label>
                    <input type="text" name="brewers_tips" className="form-control" value={brewersTips} onChange={(event) => setBrewersTips(event.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="attenuation_level" className="form-label">Attenuation Level</label>
                    <input type="number" name="attenuation_level" className="form-control" value={attenuationLevel} onChange={(event) => setAttenuationLevel(event.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="contributed_by" className="form-label">Contributed By</label>
                    <input type="text" name="contributed_by" className="form-control" value={contributedBy} onChange={(event) => setContributedBy(event.target.value)} required />
                </div>
                <button type="submit" className="btn btn-primary">Add Beer</button>
            </form>
        </div>
    )
}

export default AddBeerPage;
