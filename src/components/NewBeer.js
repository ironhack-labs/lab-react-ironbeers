import './NewBeer.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Form } from 'react-router-dom';

const NewBeer = ({random}) => {

    const baseUrl = "https://ih-beers-api2.herokuapp.com/beers";
    const [inputs, setInputs] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(`${baseUrl}/new`, inputs)
            .then(response => {
                console.log(response)
                setInputs({});
            })
            .catch(e => console.log(e))
    }

    const handleChange = (e) => {
        setInputs({...inputs, [e.target.name]: e.target.value})
    }


    return <div className="NewBeer">
        <form onSubmit={handleSubmit}>
            <label>
                Name: 
                <input type="text" name="name" value={inputs.name || ""} onChange={handleChange}></input>
            </label>
            <br />
            <label>
                Tagline: 
                <input type="text" name="tagline" value={inputs.tagline || ""} onChange={handleChange}></input>
            </label>
            <br />
            <label>
                Description: 
                <textarea name="description" value={inputs.description || ""} onChange={handleChange}></textarea>
            </label>
            <br />
            <label>
                First Brewed: 
                <input type="text" name="first_brewed" value={inputs.first_brewed || ""} onChange={handleChange}></input>
            </label>
            <br />
            <label>
                Brewers Tips: 
                <input type="text" name="brewers_tips" value={inputs.brewers_tips || ""} onChange={handleChange}></input>
            </label>
            <br />
            <label>
                Attenuation Level: 
                <input type="number" name="attenuation_level" value={inputs.attenuation_level || 0} onChange={handleChange}></input>
            </label>
            <br />
            <label>
                Contributed By: 
                <input type="text" name="contributed_by" value={inputs.contributed_by || ""} onChange={handleChange}></input>
            </label>
            <br />
            <button type="submit"> Add Beer </button>
        </form>
    </div>
}

export default NewBeer;