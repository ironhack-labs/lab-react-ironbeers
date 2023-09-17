import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBeerPage() {
    const [name, setName] = useState("")
    const [tagline, setTagline] = useState("")
    const [description, setDescription] = useState("")
    const [first_brewed, setBrewed] = useState("")
    const [brewers_tips, setTips] = useState("")
    const [attenuation_level, setAttenuation] = useState("")
    const [contributed_by, setContribution] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        const beerDetails = {
            name: name,
            tagline: tagline,
            description: description,
            first_brewed: first_brewed,
            brewers_tips: brewers_tips,
            attenuation_level: attenuation_level,
            contributed_by: contributed_by,
        }

        axios.post(`${import.meta.env.VITE_API_URL}/beers/new`, beerDetails)
        .then((response) => {
            console.log("Beer created successfully:", response.data);
            navigate("/beers")
        })
        .catch((e) => {
            console.log("error creating new beer...", e)
        })

        setName("")
        setTagline("")
        setDescription("")
        setBrewed("")
        setTips("")
        setAttenuation("")
        setContribution("")
    }
    return (
        <div>
            <h1>Create a Beer</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Tagline:</label>
                    <input
                        type="text"
                        name="tagline"
                        value={tagline}
                        onChange={(e) => setTagline(e.target.value)}
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <input
                        type="text"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <label>First Brewed:</label>
                    <input
                        type="text"
                        name="first_brewed"
                        value={first_brewed}
                        onChange={(e) => setBrewed(e.target.value)}
                    />
                </div>
                <div>
                    <label>Brewer's Tips:</label>
                    <input
                        type="text"
                        name="brewers_tips"
                        value={brewers_tips}
                        onChange={(e) => setTips(e.target.value)}
                    />
                </div>
                <div>
                    <label>Attenuation Level:</label>
                    <input
                        type="number"
                        name="attenuation_level"
                        value={attenuation_level}
                        onChange={(e) => setAttenuation(e.target.value)}
                    />
                </div>
                <div>
                    <label>Contributed By:</label>
                    <input
                        type="text"
                        name="contributed_by"
                        min={1}
                        value={contributed_by}
                        onChange={(e) => setContribution(e.target.value)}
                    />
                </div>
                <button type="submit">Add Beer</button>
            </form>
        </div>
    );
}

export default AddBeerPage;
