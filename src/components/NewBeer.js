import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Header from './Header.js';

function NewBeer() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [tagline, setTagline] = useState('');
    const [description, setDescription] = useState('');
    const [firstBrewed, setFirstBrewed] = useState('');
    const [brewersTips, setBrewersTips] = useState('');
    const [attenuationLevel, setAttenuationLevel] = useState(0);
    const [contributedBy, setContributedBy] = useState('');

    const handleNameChange = event => {
        setName(event.target.value);
    }

    const handleTaglineChange = event => {
        setTagline(event.target.value);
    }

    const handleDescriptionChange = event => {
        setDescription(event.target.value);
    }

    const handleFirstBrewedChange = event => {
        setFirstBrewed(event.target.value);
    }

    const handleBrewersTipsChange = event => {
        setBrewersTips(event.target.value);
    }

    const handleAttenuationLevelChange = event => {
        setAttenuationLevel(event.target.value);
    }

    const handleContributedByChange = event => {
        setContributedBy(event.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: name,
            tagline: tagline,
            description: description,
            firstBrewed: firstBrewed,
            brewersTips: brewersTips,
            attenuationLevel: attenuationLevel,
            contributedBy: contributedBy
        };

        fetch('https://ih-beers-api2.herokuapp.com/beers/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => console.log(response))
        .then(() => {
            navigate('/')
        })
    };

    return (
        <div className='NewBeer'>
            <Header></Header>
            <div className='new-beer-form'>
                <form onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input type='text' name='name' value={name} onChange={handleNameChange}></input>

                    <label>Tagline</label>
                    <input type='text' name='tagline' value={tagline} onChange={handleTaglineChange}></input>

                    <label>Description</label>
                    <input type='text' name='description' value={description} onChange={handleDescriptionChange}></input>

                    <label>First brewed</label>
                    <input type='text' name='first_brewed' value={firstBrewed} onChange={handleFirstBrewedChange}></input>

                    <label>Brewers Tips</label>
                    <input type='text' name='brewers_tips' value={brewersTips} onChange={handleBrewersTipsChange}></input>

                    <label>Attenuation Level</label>
                    <input type='number' name='attenuation_level' value={attenuationLevel} onChange={handleAttenuationLevelChange}></input>

                    <label>Contributed By</label>
                    <input type='text' name='contributed_by' value={contributedBy} onChange={handleContributedByChange}></input>

                    <button type='submit'>Add New</button>
                </form>
            </div>

        </div>
    )
}

export default NewBeer;