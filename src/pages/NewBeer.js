import React from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function NewBeer() {
    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [first_brewed, setFirstBrewed] = useState("");
    const [brewers_tips, setTips] = useState("");
    const [attenuation_level, setAttenuation_level] = useState(0);
    const [contributed_by, setContributed_by] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const body =
        {
            name: name,
            tagline: tagline,
            description: description,
            first_brewed: first_brewed,
            brewers_tips: brewers_tips,
            attenuation_level: attenuation_level,
            contributed_by: contributed_by
        }

        axios
            .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
            .then((response) => {
                //Reset the state
                setName("");
                setTagline("");
                setDescription("");
                setFirstBrewed("");
                setTips("");
                setAttenuation_level(0);
                setContributed_by("")

                navigate("/beers");
            })
            .catch(err => console.log(err));
    }


    return (
        <div className="addBeer">
            <h3>Add New Beer</h3>

            <form onSubmit={handleSubmit}>   {/* <== ADD EVENT  */}
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />

                <label>Tagline</label>
                <input
                    type="text"
                    name="tagline"
                    onChange={(e) => setTagline(e.target.value)}
                    value={tagline}
                />
                <label>Description</label>
                <input
                    type="text"
                    name="description"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                />
                <label>Date of First Time Brewed</label>
                <input
                    type="text"
                    name="first_brewed"
                    onChange={(e) => setFirstBrewed(e.target.value)}
                    value={first_brewed}
                />
                <label>Brewer Tips</label>
                <input
                    type="text"
                    name="brewers_tips"
                    onChange={(e) => setTips(e.target.value)}
                    value={brewers_tips}
                />
                <label>Attenuation Level</label>
                <input
                    type="number"
                    name="attenuation_level"
                    onChange={(e) => setAttenuation_level(e.target.value)}
                    value={attenuation_level}
                />
                <label>Contributed by</label>
                <input
                    type="text"
                    name="contributed_by"
                    onChange={(e) => setContributed_by(e.target.value)}
                    value={contributed_by}
                />


                <button type="submit">Create Beer</button>
            </form>
        </div>
    );
}

export default NewBeer;

// name - must be type text
// tagline - must be type text
// description - must be type text
// first_brewed - must be type text
// brewers_tips - must be type text
// attenuation_level - must be type number !!!
// contributed_by - must be type text