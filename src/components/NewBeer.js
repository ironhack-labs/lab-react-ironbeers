import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


function NewBeer () {

    const [name, setName] = useState('')
    const [tagline, setTagline] = useState('')
    const [description, setDescription] = useState('')
    const [first_brewed, setFirst_Brewed] = useState('')
    const [brewers_tips, setBrewers_tips] = useState('')
    const [attenuation_level, setAttenuation_level] = useState(0)
    const [contributed_by, setContributed_by] = useState('')

    let navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBeerEntry = {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by};
        axios
            .post(process.env.REACT_APP_API_BASE_URL + 'beers/new', newBeerEntry)
            .then( (response) => {
                // console.log(response);
                navigate('/beers', {replace:true});
            })
            .catch((err) => {
                console.log(err)
              })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label> Name: <input value={name} type="text" onChange={(e) => {setName(e.target.value)}} /></label>
            <label> Tagline: <input value={tagline} type="text" onChange={(e) => {setTagline(e.target.value)}} /></label>
            <label> Description: <input value={first_brewed} type="text" onChange={(e) => {setDescription(e.target.value)}} /></label>
            <label> First Brewed: <input value={description} type="text" onChange={(e) => {setFirst_Brewed(e.target.value)}} /></label>
            <label> Brewers Tips: <input value={brewers_tips} type="text" onChange={(e) => {setBrewers_tips(e.target.value)}} /></label>
            <label> Attentuation Level: <input value={attenuation_level} type="number" onChange={(e) => {setAttenuation_level(e.target.value)}} /></label>
            <label> Contributed By: <input value={contributed_by} type="number" onChange={(e) => {setContributed_by(e.target.value)}} /></label>
            <button>Create</button>
        </form>
    )
}


export default NewBeer;