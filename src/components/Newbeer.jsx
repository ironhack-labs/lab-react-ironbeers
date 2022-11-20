import React, { useState, useEffect } from 'react'
import Header from './Header';
import axios from 'axios';

function NewBeer() {
    const [name, setName] = useState('');
    const [tagline, setTagline] = useState('');
    const [description, setDescription] = useState('');
    const [firstBrewed, setFirstBrewed] = useState('');
    const [attenuationLevel, setAttenuationLevel] = useState(0);
    const [contributedBy, setContributedBy] = useState('');

    const handleName = (e) => setName(e.target.value);
    const handleTagline = (e) => setTagline(e.target.value);
    const handleDescription = (e) => setDescription(e.target.value);
    const handleFirstBrewed = (e) => setFirstBrewed(e.target.value);
    const handleAttenuationLevel = (e) => setAttenuationLevel(e.target.value);
    const handleContributedBy = (e) => setContributedBy(e.target.value);

    const handleNewBeer = async (e) => {
        e.preventDefault();
        try {
            const body = { name, tagline, description, firstBrewed, attenuationLevel, contributedBy };

            await axios.post('https://ih-beers-api2.herokuapp.com/beers/NewBeer', body);

            setName('');
            setTagline('');
            setDescription('');
            setFirstBrewed('');
            setAttenuationLevel(0);
            setContributedBy('');

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <Header/>

            <form onSubmit={handleNewBeer}>
                <label htmlFor="name">Name:</label>
                <input type="text" value={name} onChange={handleName} />

                <label htmlFor="tagline">Tagline:</label>
                <input type="text" value={tagline} onChange={handleTagline} />

                <label htmlFor="description">Description:</label>
                <input type="text" value={description} onChange={handleDescription} />

                <label htmlFor="firstbrewed">First Brewed:</label>
                <input type="text" value={firstBrewed} onChange={handleFirstBrewed} />

                <label htmlFor="attenuationlevel">Attenuation Level:</label>
                <input type="number" value={attenuationLevel} onChange={handleAttenuationLevel} />

                <label htmlFor="countributeby">Countributed By:</label>
                <input type="text" value={contributedBy} onChange={handleContributedBy} />

                <button type="Submit">Add Beer</button>
            </form>
        </div>
    )
}

export default NewBeer