import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers/";

function AddBeerPage() {
    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [firstBrewed, setFirstBrewed] = useState("");
    const [brewersTip, setBrewersTip] = useState("");
    const [attenuationLevel, setAttenuationLevel] = useState("");
    const [contributedBy, setContributedBy] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const requestBody = {
            name: name,
            tagline: tagline,
            description: description,
            first_brewed: firstBrewed,
            brewers_tip: brewersTip,
            attenuation_level: attenuationLevel,
            contributed_by: contributedBy,
        };

        axios.post(`${API_URL}/new`, requestBody)
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                console.log("Error creating beer from the API...");
                console.log(error);
            });
    };

    return (
        <form className="formContainer" onSubmit={handleSubmit}>
            <div className="labelForm">
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        className="inputField"
                        value={name}
                        onChange={(e) => { setName(e.target.value); }}
                    />
                </label>
                <label>
                    Tagline
                    <input
                        type="text"
                        name="tagline"
                        className="inputField"
                        value={tagline}
                        onChange={(e) => { setTagline(e.target.value); }}
                    />
                </label>
                <label>
                    Description
                    <input
                        type="text"
                        name="description"
                        className="inputField"
                        value={description}
                        onChange={(e) => { setDescription(e.target.value); }}
                    />
                </label>
                <label>
                    First Brewed
                    <input
                        type="text"
                        name="first_brewed"
                        className="inputField"
                        value={firstBrewed}
                        onChange={(e) => { setFirstBrewed(e.target.value); }}
                    />
                </label>
                <label>
                    Brewer's Tips
                    <input
                        type="text"
                        name="brewers_tip"
                        className="inputField"
                        value={brewersTip}
                        onChange={(e) => { setBrewersTip(e.target.value); }}
                    />
                </label>
                <label>
                    Attenuation Level
                    <input
                        type="number"
                        name="attenuation_level"
                        className="inputField"
                        value={attenuationLevel}
                        onChange={(e) => { setAttenuationLevel(e.target.value); }}
                    />
                </label>
                <label>
                    Contributed By
                    <input
                        type="text"
                        name="contributed_by"
                        className="inputField"
                        value={contributedBy}
                        onChange={(e) => { setContributedBy(e.target.value); }}
                    />
                </label>
                <button type="submit" className="submitBtn">
                    Add Beer
                </button>
            </div>
        </form>
    );
}



export default AddBeerPage;
