import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddBeerPage() {
    const [ name, setName ] = useState("");
    const [ tagline, setTagline] = useState("");
    const [ description, setDescription ] = useState("");
    const [ firstBrewed, setFirstBrewed ] = useState("");
    const [ brewersTips, setBrewersTips] = useState("");
    const [ attenuationLevel, setAttenuationLevel ] = useState(0);
    const [ contributedBy, setContributedBy ] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const body = {
            name: name,
            tagline: tagline,
            description: description,
            firstBrewed: firstBrewed,
            brewersTips: brewersTips,
            attenuationLevel: attenuationLevel,
            contributedBy: contributedBy
        };

        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", body)
        .then(() => {
            setName("");
            setTagline("");
            setDescription("");
            setFirstBrewed("");
            setBrewersTips("");
            setAttenuationLevel(0);
            setContributedBy("");
            navigate("/");
        })
    }

    return(
        <div>
            <h2>Add a New Beer</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={name} onChange={(event) => setName(event.target.value)} />
                </label>
                <label>
                    Tagline:
                    <input type="text" name="tagline" value={tagline} onChange={(event) => setTagline(event.target.value)} />
                </label>
                <label>
                    Description:
                    <input type="text" name="description" value={description} onChange={(event) => setDescription(event.target.value)} />
                </label>
                <label>
                    First Brewed:
                    <input type="text" name="first_brewed" value={firstBrewed} onChange={(event) => setFirstBrewed(event.target.value)} />
                </label>
                <label>
                    Brewer's Tips:
                    <input type="text" name="brewers_tips" value={brewersTips} onChange={(event) => setBrewersTips(event.target.value)} />
                </label>
                <label>
                    Attenuation Level:
                    <input type="number" name="attenuation_level" value={attenuationLevel} onChange={(event) => setAttenuationLevel(event.target.value)} />
                </label>
                <label>
                    Contributed By:
                    <input type="text" name="contributed_by" value={contributedBy} onChange={(event) => setContributedBy(event.target.value)} />
                </label>
                <button type="submit">Add a New Beer</button>
            </form>
        </div>
    );
}

export default AddBeerPage;
