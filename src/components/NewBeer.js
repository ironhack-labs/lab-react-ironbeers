import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';

function NewBeer() {

    const [beerName, setBeerName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [firstBrewed, setFirstBrewed] = useState("");
    const [brewerTips, setBrewerTips] = useState("");
    const [attenuationLvl, setAttenuationLvl] = useState("");
    const [contributedBy, setContributedBy] = useState("");





    const handleSubmit = (e) => {                 // <==  ADD A HANDLER FUNCTION
        // Prevent page reload on submit
        e.preventDefault();
        // Create the body for the POST request
        const body = {
            name: beerName,
            tagline: tagline,
            description: description,
            first_brewed: firstBrewed,
            brewers_tips: brewerTips,
            attenuation_level: attenuationLvl,
            contributed_by: contributedBy
        };

        axios
            .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
            .then((response) => {
                // Reset the state
                setBeerName("");
                setTagline("");
                setDescription("");
                setFirstBrewed("");
                setBrewerTips("");
                setAttenuationLvl(0);
                setContributedBy("");
            });
    }

    return (
        <div>
            <header>
                <Link to='/'>Return Home</Link>
            </header>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="Name">Name: </label>
                    <input type="text" id='Name' value={beerName} onChange={(e) => setBeerName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="Tagline">Tagline: </label>
                    <input type="text" id='Tagline' value={tagline} onChange={(e) => setTagline(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="Description" id='Description'>Description: </label>
                    <textarea name="" id="" cols="30" rows="10" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <div>
                    <label htmlFor="First Brewed">First Brewed: </label>
                    <input type="text" id='First Brewed' value={firstBrewed} onChange={(e) => setFirstBrewed(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="Brewer Tips">Brewer Tips: </label>
                    <input type="text" id='Brewer Tips' value={brewerTips} onChange={(e) => setBrewerTips(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="Attenuation Level">Attenuation Level: </label>
                    <input type="Number" id='Attenuation Level' value={attenuationLvl} onChange={(e) => setAttenuationLvl(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="Contributed By">Contributed By:</label>
                    <input type="text" id='Contributed By' value={contributedBy} onChange={(e) => setContributedBy(e.target.value)} />
                </div>
                <button type='submit'>Add New</button>
            </form >
        </div >
    )
}

export default NewBeer