import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from "../components/Navbar";

function AddBeerPage() {

    const [name, setName] = useState('');
    const [tagline, setTagline] = useState('');
    const [description, setDescription] = useState('');
    const [firstBrewed, setFirstBrewed] = useState('');
    const [brewersTips, setBrewersTips] = useState('');
    const [attnLvl, setAttnLvl] = useState();
    const [contributor, setContributor] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const requestBody = {
            name: name,
            tagline: tagline,
            description: description,
            firstBrewed: firstBrewed,
            brewersTips: brewersTips,
            attnLvl: attnLvl,
            contributor: contributor
        }

        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', requestBody)
            .then(response => {
                navigate('/new-beer');
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <>
            <h2 className='page-headers'>Add Beer</h2>

            <Navbar />

            <form onSubmit={handleSubmit}>
                <label className='submit-form'>
                    Name
                    <input
                        type='text'
                        name='name'
                        placeholder='name of beer'
                        required={true}
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                        />
                </label>

                <label className='submit-form'>
                    Tagline
                    <input
                        type='text'
                        name='tagline'
                        placeholder='tagline'
                        required={true}
                        value={tagline}
                        onChange={(e) => { setTagline(e.target.value) }}
                        />
                </label>
                
                <label className='submit-form'>
                    Description
                    <textarea
                        type='text'
                        name='description'
                        placeholder='describe the beer'
                        required={true}
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }}
                        />
                </label>

                <label className='submit-form'>
                    First Brewed
                    <input
                        type='text'
                        name='first_brewed'
                        placeholder='when was it first brewed'
                        required={true}
                        value={firstBrewed}
                        onChange={(e) => { setFirstBrewed(e.target.value) }}
                        />
                </label>

                <label className='submit-form'>
                    Brewer's Tips
                    <input
                        type='text'
                        name='brewers_tips'
                        placeholder='Brewer Tips'
                        required={true}
                        value={brewersTips}
                        onChange={(e) => { setBrewersTips(e.target.value) }}
                        />
                </label>

                <label className='submit-form'>
                    Attenuation Level
                    <input
                        type='number'
                        name='attenuation_level'
                        placeholder='Attenuation Level'
                        required={true}
                        value={attnLvl}
                        onChange={(e) => { setAttnLvl(e.target.value) }}
                        />
                </label>

                <label className='submit-form'>
                    Contributed By
                    <input
                        type='text'
                        name='contributed_by'
                        placeholder='Contributed By'
                        required={true}
                        value={contributor}
                        onChange={(e) => { setContributor(e.target.value) }}
                        />
                </label>

                <button type='submit' className='submit-button'>ADD BEER</button>
            </form>
            
        </>
    )
}

export default AddBeerPage;
