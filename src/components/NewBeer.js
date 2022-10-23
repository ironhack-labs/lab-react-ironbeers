import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function NewBeer() {

    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [first_brewed, setFirst_brewed] = useState("");
    const [brewers_tips, setBrewers_tips] = useState("");
    const [attenuation_level, setAttenuation_level] = useState(0);
    const [contributed_by, setContributed_by] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Create the body for the POST request
        const body = {
            name: name,
            presentation: tagline,
            description: description,
            first_brewed: first_brewed,
            brewers_tips: brewers_tips,
            attenuation_level: attenuation_level,
            contributed_by: contributed_by
        };


        axios
            .post("https://ironbnb-m3.herokuapp.com/new", body)
            .then((response) => {
                // Reset the state
                setName("");
                setTagline("");
                setDescription("");
                setFirst_brewed("");
                setBrewers_tips("");
                setAttenuation_level(0);
                setContributed_by("");
                navigate('/');
            });
    };

    return (
        <div className="AddApartmentPage">
            <h3>Add New Apartment</h3>

            <form >
                <label>name</label>
                <input
                    type="text"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />

                <label>presentation</label>
                <input
                    type="string"
                    name="tagline"
                    onChange={(e) => setTagline(e.target.value)}
                    value={tagline}
                />
                <label>description</label>
                <input
                    type="string"
                    name="description"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                />
                <label>first brewed</label>
                <input
                    type="string"
                    name="first_brewed"
                    onChange={(e) => setFirst_brewed(e.target.value)}
                    value={first_brewed}
                />
                <label>brewers tips</label>
                <input
                    type="string"
                    name="brewers_tips"
                    onChange={(e) => setBrewers_tips(e.target.value)}
                    value={brewers_tips}
                />
                <label>attenuation level</label>
                <input
                    type="number"
                    name="attenuation_level"
                    onChange={(e) => setAttenuation_level(e.target.value)}
                    value={attenuation_level}
                />
                <label>contributed by</label>
                <input
                    type="string"
                    name="contributed_by"
                    onChange={(e) => setContributed_by(e.target.value)}
                    value={contributed_by}
                />

                <button type="submit">Create New Beer</button>

            </form>
        </div>
    );
}

