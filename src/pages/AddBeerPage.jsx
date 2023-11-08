import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_URL = "https://ih-beers-api2.herokuapp.com/beers/new";


function AddBeerPage() {

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [firstBrewed, setFirstBrewed] = useState("");
    const [brewersTips, setBrewersTips] = useState("");
    const [attenuationLevel, setAttenuationLevel] = useState("");
    const [contributedBy, setContributedBy] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();

        const requestBody = {
            name,
            tagline,
            description,
            first_brewed: firstBrewed, 
            brewers_tips: brewersTips, 
            attenuation_level: parseFloat(attenuationLevel), 
            contributed_by: contributedBy,
        };

        axios.post(API_URL, requestBody).then(()=>{
            navigate('/beers')
        })
        .catch((error)=>console.log(error))
    }

    return(
        <div>
            <h1>Add a new Beer</h1>
            <form onSubmit={handleSubmit}>
                <label>Name: 
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <p>
                <label>Tagline:
                    <input type="text" name="tagline" value={tagline} onChange={(e) => setTagline(e.target.value)} />
                </label>
                </p>
                <p>
                <label>Description:
                   <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </label>
                </p>
                <p>
                <label>First Brewed:
                <input type="text" name="firstBrewed" value={firstBrewed} onChange={(e) => setFirstBrewed(e.target.value)} />
                </label>
                </p>
                <p>
                <label>Brewer's Tips:
                <input type="text" name="brewersTips" value={brewersTips} onChange={(e) => setBrewersTips(e.target.value)} />
                </label>
                </p>
                <p>
                <label>Attenuation Level:
                <input type="number" name="attenuationLevel" value={attenuationLevel} onChange={(e) => setAttenuationLevel(e.target.value)} />
                </label>
                </p>
                <p>
                <label>Contributed By:
                <input type="text" name="contributedBy" value={contributedBy} onChange={(e) => setContributedBy(e.target.value)} />
                </label>
                </p>
                <button type="submit">Add New</button>
            </form>
        </div>
    )


}

export default AddBeerPage;
