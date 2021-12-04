import React from 'react';
import { useState } from 'react';
import axios from 'axios';

import Header from '../components/Header';

const apiURL = 'https://ih-beers-api2.herokuapp.com/beers';

function AddBeersPage() {
    const [name, setName] = useState('');
    const [tagline, setTagline] = useState('');
    const [description, setDescription] = useState('');
    const [firstBrewed, setFirstBrewed] = useState('');
    const [brewersTips, setBrewersTips] = useState('');
    const [attenuationLevel, setAttenuationLevel] = useState(1);
    const [contributedBy, setContributedBy] = useState('');
    const [errorMessage, setErrorMessage] = useState(undefined);

    const handleName = (event) => setName(event.target.value);
    const handleTagline = (event) => setTagline(event.target.value);
    const handleDescription = (event) => setDescription(event.target.value);
    const handleFirstBrewed = (event) => setFirstBrewed(event.target.value);
    const handleBrewersTips = (event) => setBrewersTips(event.target.value);
    const handleAttenuationLevel = (event) => setAttenuationLevel(event.target.value);
    const handleContributedBy = (event) => setContributedBy(event.target.value);

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();

            const newBeer = {
                name: name,
                tagline: tagline,
                description: description,
                firstBrewed: firstBrewed,
                brewersTips: brewersTips,
                attenuationLevel: attenuationLevel,
                contributedBy: contributedBy,
            };

            await axios.post(`${apiURL}/new`, newBeer);

            setName('');
            setTagline('');
            setDescription('');
            setFirstBrewed('');
            setBrewersTips('');
            setAttenuationLevel(0);
            setContributedBy('');
        }
        catch (error) {
            setErrorMessage('Something went wrong! Try again...');
        }
    };

    if (errorMessage) return <p>{errorMessage}</p>;

    return (
        <div className='AddBeersPage col-auto'>
            <Header />
            <h2> Add beers page </h2>
            <form onSubmit={handleSubmit}>
                {errorMessage && <p>{errorMessage}</p>}

                <label>Name</label>
                <input type="text" name="name" value={name} onChange={handleName} />

                <label>Tagline</label>
                <input type="text" name="tagline" value={tagline} onChange={handleTagline} />

                <label>Description</label>
                <input className="input" type="text" name="description" value={description} onChange={handleDescription} />

                <label>First Brewed</label>
                <input type="text" name="firstBrewed" value={firstBrewed} onChange={handleFirstBrewed} />

                <label>Brewers Tips</label>
                <input type="text" name="brewersTips" value={brewersTips} onChange={handleBrewersTips} />

                <label>Attenuation Level</label>
                <input type="number" name="attenuationLevel" value={attenuationLevel} onChange={handleAttenuationLevel} />

                <label>Contributed By: </label>
                <input type="text" name="contributedBy" value={contributedBy} onChange={handleContributedBy} />

                <button type="submit"> ADD NEW </button>
            </form>

        </div>
    );
}

export default AddBeersPage;

