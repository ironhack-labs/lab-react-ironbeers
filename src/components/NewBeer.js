import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function NewBeer() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [first_brewed, setFirstBrewed] = useState("");
    const [brewers_tips, setBrewersTips] = useState("");
    const [attenuation_level, setAttenuationLevel] = useState(0);
    const [contributed_by, setContributedBy] = useState("");
    const navigate = useNavigate();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const body = { name: name, description: description, first_brewed: first_brewed, 
                        brewers_tips: brewers_tips, attenuation_level: attenuation_level, contributed_by: contributed_by};
        axios
        .post('https://ih-beers-api2.herokuapp.com/beers/new', body)
        .then((responce)  => {
        console.log("BODY", body);
        setName("");
        setDescription("");
        setFirstBrewed("");
        setBrewersTips("");
        setAttenuationLevel(0);
        setContributedBy("");
        navigate("/"); 
      });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }}
            />
            <label htmlFor="description">Description</label>
            <input
                type="text"
                name="description"
                value={description}
                onChange={(e) => {
                    setDescription(e.target.value);
                }}
            />
            <label htmlFor="first_brewed">First brewed:</label>
            <input
                type="text"
                name="first_brewed "
                value={first_brewed}
                onChange={(e) => {
                    setFirstBrewed(e.target.value);
                }}
            />
            <label htmlFor="brewers_tips">Brewers tips:</label>
            <input
                type="text"
                name="brewers_tips"
                value={brewers_tips}
                onChange={(e) => {
                    setBrewersTips(e.target.value);
                }}
            />
            <label htmlFor="attenuation_level">Attention level:</label>
            <input
                type="number"
                name="attenuation_level"
                value={attenuation_level}
                onChange={(e) => {
                    setAttenuationLevel(e.target.value);
                }}
            />
            <label htmlFor="contributed_by">Contributed By:</label>
            <input
                type="text"
                name="contributed_by"
                value={contributed_by}
                onChange={(e) => {
                    setContributedBy(e.target.value);
                }}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default NewBeer;