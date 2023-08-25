import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React from "react";

function AddBeerPage() {
    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [first_brewed, setBrewed] = useState("");
    const [tips, setTips] = useState("");
    const [attenuation, setAttenuation] = useState(0);
    const [contributed, setContributed] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        // preventing the default action of the form to happen , when submitted
        e.preventDefault();

        const body = {
            name: name, 
            tagline: tagline, 
            description: description, 
            first_brewed: first_brewed, 
            brewers_tips: tips, 
            attenuation_level: attenuation, 
            contributed_by: contributed
        };

    axios.post("https://ih-beers-api2.herokuapp.com/beers/new", body).then(() => {
            // time to reset State Values
            setName("");
            setTagline("");
            setDescription("");
            setBrewed("");
            setTips("");
            setAttenuation(0);
            setContributed("");
            // Same thing as res.redirect("/") that we had on Express
            navigate("/beers");
        })
        .catch(error => {
            console.error("Error adding beer:", error);
        });
    }

        return (
            <div>
                <h3>Add New Beer</h3>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name
                        <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name}/>
                    </label>
                    <label>
                        Tagline
                        <input type="text" name="tagline" onChange={(e) => setTagline(e.target.value)} value={tagline}/>
                    </label>
                    <label>
                        Description
                        <textarea type="text" name="description" onChange={(e) => setDescription(e.target.value)} value={description}/>
                    </label>
                    <label>
                        First Brewed
                        <input type="text" name="first_brewed" onChange={(e) => setBrewed(e.target.value)} value={first_brewed}/>
                    </label>
                    <label>
                        Brewer's Tips
                        <input type="text" name="brewers_tips" onChange={(e) => setTips(e.target.value)} value={tips}/>
                    </label>
                    <label>
                        Attenuation Level
                        <input type="number" name="attenuation_level" onChange={(e) => setAttenuation(e.target.value)} value={attenuation}/>
                    </label>
                    <label>
                        Contributed By
                        <input type="text" name="contributed_by" onChange={(e) => setContributed(e.target.value)} value={contributed} />
                    </label>
                    <button type="submit">
                        Add Beer
                    </button>
                </form>
            </div>
        )
    }


export default AddBeerPage;
