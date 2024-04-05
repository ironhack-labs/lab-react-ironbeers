import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const API_URL = "https://ih-beers-api2.herokuapp.com";

function AddBeerPage() {
    const navigate = useNavigate();

    const [beers, setBeer] = useState({})

    const [name, setName] = useState('')
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [firstBrewed, setFirstBrewed] = useState("");
    const [brewersTips, setBrewersTips] = useState("");
    const [attenuationLevel, setAttenuationLevel] = useState(0);
    const [contributedBy, setContributedBy] = useState("");

    const createBeers = (formData) => {
        axios
            .post(`${API_URL}/beers/new`, formData)
            .then((response) => setBeer(response.data))
            .catch((error) => console.log(error));
    };
    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = {name, tagline, description, first_brewed:firstBrewed, brewers_tips:brewersTips, attenuation_level:attenuationLevel, contributed_by:contributedBy}

        createBeers(formData)
        navigate('/beers')
    }
    console.log(beers)
    return (
        <div>
            <form className='addBeerForm' onSubmit={handleSubmit}>
                

                <label className='addBeerLabel' htmlFor="name">Name</label>
                <input className='addAllBeerInput' name="name" value={name} onChange={(e) => setName(e.target.value)} type="text" id="name" />

                <label htmlFor="tagline">Tagline</label>
                <input className='addAllBeerInput' name="tagline" value={tagline} onChange={(e) => setTagline(e.target.value)} type="text" id="tagline" />

                <label htmlFor="description">Description</label>
                <textarea className='addAllBeerInput' name="description" value={description} onChange={(e) => setDescription(e.target.value)} type="text" id="description" />

                <label htmlFor="first_brewed">First Brewed</label>
                <input className='addAllBeerInput' name="first_brewed" value={firstBrewed} onChange={(e) => setFirstBrewed(e.target.value)} type="text" id="first_brewed" />

                <label htmlFor="attenuation_level">Attenuation Level</label>
                <input className='addAllBeerInput' name="attenuation_level" value={attenuationLevel} onChange={(e) => setAttenuationLevel(e.target.value)} type="number" id="attenuation_level" />

                <label htmlFor="brewers_tips">Brewers Tips</label>
                <input className='addAllBeerInput' name="brewers_tips" value={brewersTips} onChange={(e) => setBrewersTips(e.target.value)} type="text" id="brewers_tips" />

                <label htmlFor="contributed_by">Contributed By</label>
                <input className='addAllBeerInput' name="contributed_by" value={contributedBy} onChange={(e) => setContributedBy(e.target.value)} type="text" id="contributed_by" />

                <button className='button-style' type="submit">
                    Add Beer
                </button>
              
            </form>
        </div>
    )
}

export default AddBeerPage;
