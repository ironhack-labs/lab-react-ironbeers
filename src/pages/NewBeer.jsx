import React from 'react'
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function NewBeer() {

    const [name, setName] = useState('')
    const [tagline, setTagline] = useState('')
    const [description, setDescription] = useState('')
    const [first_brewed, setFirstBrewed] = useState('')
    const [brewers_tips, setBrewersTips] = useState('')
    const [attenuation_level, setAttenuationLevel] = useState(0)
    const [contributed_by, setContributedBy] = useState('')
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault()
        const beerToPost = { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by }
        // axios.post has two arguments, one where we post to 2 is what we are posting 
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', beerToPost)
            .then(() => {
                setName('')
                setTagline('')
                setDescription('')
                setFirstBrewed('')
                setBrewersTips('')
                setAttenuationLevel(0)
                setContributedBy('')
                alert("Cheers, your beer was created!")
            })
        navigate('/')
    }

    return (
        <div className="form-box">
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">
                    Name
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label htmlFor="">
                    Tagline
                    <input type="text" value={tagline} onChange={(e) => setTagline(e.target.value)} />
                </label>
                <label htmlFor="">
                    Description
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                </label>
                <label htmlFor="">
                    First Brewed
                    <input type="date" value={first_brewed} onChange={(e) => setFirstBrewed(e.target.value)} />
                </label>
                <label htmlFor="">
                    Brewers Tips
                    <input type="text" value={brewers_tips} onChange={(e) => setBrewersTips(e.target.value)} />
                </label>
                <label htmlFor="">
                    Attenuation Level
                    <input type="number" value={attenuation_level} onChange={(e) => setAttenuationLevel(e.target.value)} />
                </label>
                <label htmlFor="">
                    Contributed By
                    <input type="text" value={contributed_by} onChange={(e) => setContributedBy(e.target.value)} />
                </label>
                <button className="addBtn">ADD NEW</button>
            </form>
        </div>
    );
}

export default NewBeer;