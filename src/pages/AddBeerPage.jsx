import React, { useState } from "react";
import axios from "axios";


function AddBeerPage(props) {
    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [firstBrewed, setFirstBrewed] = useState("");
    const [brewersTips, setBrewersTips] = useState("");
    const [attenuationLevel, setAttenuationLevel] = useState(0);
    const [contributedBy, setContributedBy] = useState("");

    const handleNameInput = e => setName(e.target.value);
    const handleTaglineInput = e => setTagline(e.target.value);
    const handleDescription = e => setDescription(e.target.value);
    const handleFirstBrewed = e => setFirstBrewed(e.target.value);
    const handleBrewersTips = e => setBrewersTips(e.target.value);
    const handleAttenuationLevel = e => setAttenuationLevel(e.target.value);
    const handleContributedBy = e => setContributedBy(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post("https://ih-beers-api2.herokuapp.com/beers/new",
            name,
            tagline,
            description,
            firstBrewed,
            brewersTips,
            attenuationLevel,
            contributedBy
            )
            .then((response) => {
                console.log("new beer have been created", response.data)
            })
            .catch((error) => {
                console.error("Error creating a new beer", error)
            })
        // const newBeer = {
        //     name,
        //     tagline,
        //     description,
        //     firstBrewed,
        //     brewersTips,
        //     attenuationLevel,
        //     contributedBy
        // }
        // props.addBeer(newBeer);

        // setName("");
        // setTagline("");
        // setDescription("");
        // setFirstBrewed("");
        // setBrewersTips("");
        // setAttenuationLevel(0);
        // setContributedBy("");
    }

    return(

        <div className="AddBeer">
        <h4>Add a Beer</h4>

        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input 
                type="text" 
                name="name" 
                value={name}
                onChange={handleNameInput} 
            />

            <label>Tagline:</label>
            <input 
                type="text" 
                name="tagline" 
                value={tagline}
                onChange={handleTaglineInput} 
            />

            <label>Description:</label>
            <textarea
                type="text" 
                name="description" 
                value={description} 
                onChange={handleDescription}
            />

            <label>First Brewed:</label>
            <input 
                type="text" 
                name="first_brewed" 
                value={firstBrewed}
                onChange={handleFirstBrewed}
            />

            <label>Brewers Tips:</label>
            <input 
                type="text" 
                name="brewers_tips" 
                value={brewersTips}
                onChange={handleBrewersTips}
            />

            <label>Attenuation Level:</label>
            <input 
                type="number" 
                name="attenuation_level" 
                value={attenuationLevel}
                onChange={handleAttenuationLevel}
            />

            <label>Contributed by:</label>
            <input 
                type="text" 
                name="contributed_by" 
                value={contributedBy}
                onChange={handleContributedBy}
            />

            <button type="submit">Add a Beer</button>

        </form>
    </div>

    )
}

export default AddBeerPage;
