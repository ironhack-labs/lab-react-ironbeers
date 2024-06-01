import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddBeerPage() {

    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [firstBrewed, setFirstBrewed] = useState("");
    const [brewersTips, setBrewersTips] = useState("");
    const [attenuationLevel, setAttenuationLevel] = useState("");
    const [contributedBy, setContributedBy] = useState("");
    const navigate = useNavigate();

    const handleName = (event) => {
        setName(event.target.value);
    }
    const handleTagline = (event) => {
        setTagline(event.target.value);
    }
    const handleDescription = (event) => {
        setDescription(event.target.value);
    }
    const handleFirstBrewed = (event) => {
        setFirstBrewed(event.target.value);
    }
    const handleBrewersTips = (event) => {
        setBrewersTips(event.target.value);
    }
    const handleAttenuationLevel = (event) => {
        setAttenuationLevel(event.target.value);
    }
    const handleContributedBy = (event) => {
        setContributedBy(event.target.value);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const beerData = {
                name,
                tagline,
                description,
                first_brewed: firstBrewed,
                brewers_tips: brewersTips,
                attenuation_level: Number(attenuationLevel), // Convert to number
                contributed_by: contributedBy
            };

            await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', beerData);

            navigate("/beers");
        } catch (error) {
            console.log('error creating the beer', error);
        }
    }

    return (
        <div>
            <h2>Add Beer</h2>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" value={name} onChange={handleName} />
                <label>Tagline</label>
                <input type="text" name="tagline" value={tagline} onChange={handleTagline} />
                <label>Description</label>
                <textarea name="description" value={description} onChange={handleDescription} />
                <label>First Brewed</label>
                <input type="text" name="first_brewed" value={firstBrewed} onChange={handleFirstBrewed} />
                <label>Brewer's Tips</label>
                <input type="text" name="brewers_tips" value={brewersTips} onChange={handleBrewersTips} />
                <label>Attenuation Level</label>
                <input type="number" name="attenuation_level" value={attenuationLevel} onChange={handleAttenuationLevel} />
                <label>Contributed By</label>
                <input type="text" name="contributed_by" value={contributedBy} onChange={handleContributedBy} />
                <button type="submit">Add Beer</button>
            </form>
        </div>
    );
}

export default AddBeerPage;
