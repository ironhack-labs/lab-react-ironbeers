import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers/new"

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
            firstBrewed: firstBrewed,
            brewersTips: brewersTips,
            attenuationLevel: attenuationLevel,
            contributedBt: contributedBy
        }

        axios.post(`${API_URL}`, requestBody)
            .then((response) => {
                navigate("/beers")
            })
            .catch((error) => console.log('Error' + error))
    }

    return (
        <div className="add-new-beer">
            <form onSubmit={handleSubmit}>

                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        placeholder="enter the name of the beer"
                        required={true}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>

                <label>
                    Tagline
                    <input
                        type="text"
                        name="tagline"
                        placeholder="enter the tagline"
                        required={true}
                        value={tagline}
                        onChange={(e) => setTagline(e.target.value)}
                    />
                </label>

                <label className="description">
                    Description
                    <input
                        type="text"
                        name="description"
                        placeholder="enter the description of the beer"
                        required={true}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="custom-height-input" 
                    />
                </label>

                <label>
                    First Brewed
                    <input
                        type="text"
                        name="first-brewed"
                        placeholder="date"
                        required={true}
                        value={firstBrewed}
                        onChange={(e) => setFirstBrewed(e.target.value)}
                    />
                </label>

                <label>
                    Brewers Tips
                    <input
                        type="text"
                        name="brewers-tips"
                        placeholder="enter the tips"
                        required={true}
                        value={brewersTips}
                        onChange={(e) => setBrewersTips(e.target.value)}
                    />
                </label>

                <label>
                    Attenuation Level
                    <input
                        type="number"
                        name="attenuation-level"
                        placeholder="enter number"
                        required={true}
                        value={attenuationLevel}
                        onChange={(e) => setAttenuationLevel(e.target.value)}
                    />
                </label>

                <label>
                    Contributed By
                    <input
                        type="text"
                        name="contributed-by"
                        placeholder="enter contributors"
                        required={true}
                        value={contributedBy}
                        onChange={(e) => setContributedBy(e.target.value)}
                    />
                </label>

                <button>ADD NEW</button>
            </form>
            
            
        </div>
    )
}

export default AddBeerPage;
