import React from 'react';
import {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import axios from "axios"

function NewBeer(props){
    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [firstBrewed, setFirstBrewed] = useState("");
    const [brewersTips, setBrewersTips] = useState("");
    const [attenuationLevel, setAttenuationLevel] = useState(0);
    const [contributedBy, setContributedBy] = useState("");

    const handleNameInput = e => setName(e.target.value);
    const handleTaglineInput = e => setTagline(e.target.value);
    const handleDescriptionInput = e => setDescription(e.target.value);
    const handleFirstBrewedInput = e => setFirstBrewed(e.target.value); 
    const handleBrewersTipsInput = e => setBrewersTips(e.target.value); 
    const handleAttenuationLevelInput = e => setAttenuationLevel(e.target.value); 
    const handleContributedByInput = e => setContributedBy(e.target.value); 

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBeer = { "name": name, "tagline": tagline, "description": description, "first-brewed": firstBrewed,  "brewers_tips": brewersTips, "attenuation_level": attenuationLevel, "contributed_by": contributedBy };


        axios
            .post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
            .then((response) => {
                console.log("New Beer: " , newBeer)
                setName("");
                setTagline("");
                setDescription("");
                setFirstBrewed("");
                setBrewersTips("");
                setAttenuationLevel(0);
                setContributedBy("");
            })
    }




    return (
        <div>
             <div className="link-home-page">
                <Link to="/">Home Page</Link>
            </div>
            <h2>New Beer</h2>

            <form onSubmit={handleSubmit}>
                <label>Name:</label> <br/>
                <input value={name} type="text" onChange={handleNameInput} /> <br/>
                <label>Tagline:</label> <br/>
                <input value={tagline} type="text" onChange={handleTaglineInput} /> <br/>
                <label>Description:</label> <br/>
                <input value={description} type="text" onChange={handleDescriptionInput} /> <br/>
                <label>First Brewed:</label> <br/>
                <input value={firstBrewed} type="text" onChange={handleFirstBrewedInput} /> <br/>
                <label>Brewers tips:</label> <br/>
                <input value={brewersTips} type="text" onChange={handleBrewersTipsInput} /> <br/>
                <label>Attenuation level:</label> <br/>
                <input value={attenuationLevel} type="number" onChange={handleAttenuationLevelInput} /> <br/>
                <label>Contributed by:</label> <br/>
                <input value={contributedBy} type="text" onChange={handleContributedByInput} /> <br/>

                <button type="submit" value="Submit">Add</button>
            </form>
        </div>
    )
}

export default NewBeer