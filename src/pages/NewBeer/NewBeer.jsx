import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const NewBeer = () => {
    const [name, setName] = useState('');
    const [tagline, setTagline] = useState('');
    const [description, setDescription] = useState('');
    const [first_brewed, setFirstBrewed] = useState('');
    const [brewers_tips, setBrewersTips] = useState('');
    const [attenuation_level, setAttenuationLevel] = useState('');
    const [contributed_by, setContributedBy] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const beerToCreate = {
            name: name,
            tagline: tagline,
            description: description,
            first_brewed: first_brewed,
            brewers_tips: brewers_tips,
            attenuation_level: attenuation_level,
            contributed_by: contributed_by,
        };
        try {
            await axios.post(
                "https://ih-beers-api2.herokuapp.com/beers/new",
                beerToCreate
            );
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Name: </label>
                <input
                    onChange={(event) => setName(event.target.value)}
                    value={name}
                    type='text'
                    name='name'
                />
            </div>
            <div>
                <label htmlFor='tagline'>Tagline: </label>
                <input
                    onChange={(event) => setTagline(event.target.value)}
                    value={tagline}
                    type='text'
                    name='tagline'
                />
            </div>
            <div>
                <label htmlFor='description'>Description: </label>
                <input
                    onChange={(event) => setDescription(event.target.value)}
                    value={description}
                    type='text'
                    name='description'
                />
            </div>
            <div>
                <label htmlFor='first_brewed'>First brewed: </label>
                <input
                    onChange={(event) => setFirstBrewed(event.target.value)}
                    value={first_brewed}
                    type='text'
                    name='first_brewed'
                />
            </div>
            <div>
                <label htmlFor='brewers_tips'>Brewers tips: </label>
                <input
                    onChange={(event) => setBrewersTips(event.target.value)}
                    value={brewers_tips}
                    type='text'
                    name='brewers_tips'
                />
            </div>
            <div>
                <label htmlFor='attenuation_level'>Attenuation level: </label>
                <input
                    onChange={(event) => setAttenuationLevel(event.target.value)}
                    value={attenuation_level}
                    type='number'
                    name='attenuation_level'
                />
            </div>
            <div>
                <label htmlFor='contributed_by'>Contributed by: </label>
                <input
                    onChange={(event) => setContributedBy(event.target.value)}
                    value={contributed_by}
                    type='text'
                    name='contributed_by'
                />
            </div>
            <button>Create new beer</button>
        </form>
    )
}

export default NewBeer