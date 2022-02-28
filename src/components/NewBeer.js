import React from 'react';
import homeLinkHeader from '../assets/ironhack-lab-react-ironbeers-home-header.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

const NewBeer = () => {
    const [name, setName] = React.useState("");
    const [tagline, setTagline] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [first_brewed, setFirstBrewed] = React.useState("");
    const [brewers_tips, setBrewersTips] = React.useState("");
    const [attenuation_level, setAttenuationLevel] = React.useState(0);
    const [contributed_by, setContributedBy] = React.useState("");

    const createBeer = (e) => {
        e.preventDefault();

        axios
            .post("https://ih-beers-api2.herokuapp.com/beers/new", {
                name: name,
                tagline: tagline,
                description: description,
                first_brewed: first_brewed,
                brewers_tips: brewers_tips,
                attenuation_level: attenuation_level,
                contributed_by: contributed_by,
            })
            .then((results) => {
                console.log("New Beer: ", results.data);
            })
            .catch((err) => {
                console.error(err.message);
            });
    }

    return (
        <div>
            <header>
                <Link to="/">
                    <img className="homeLinkHeader" src={homeLinkHeader} alt="Link to Homepage"/>
                </Link>
            </header>
            <h1>Add a New Beer</h1>
            <div>
                <form>
                    <label for="name">Name:</label>{" "}
                    <input
                        name="name" 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label for="tagline">Tagline: </label>{" "}
                    <input
                        name="tagline" 
                        type="text" 
                        value={tagline} 
                        onChange={(e) => setTagline(e.target.value)}
                    />
                    <label for="description">Description: </label>{" "}
                    <input
                        name="description" 
                        type="text" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <label for="first_brewed">First brewed: </label>{" "}
                    <input
                        name="first_brewed" 
                        type="text" 
                        value={first_brewed} 
                        onChange={(e) => setFirstBrewed(e.target.value)}
                    />
                    <label for="brewers_tips">Brewers tips: </label>{" "}
                    <input
                        name="brewers_tips" 
                        type="text" 
                        value={brewers_tips} 
                        onChange={(e) => setBrewersTips(e.target.value)}
                    />
                    <label for="attenuation_level">Attenuation level:</label>{" "}
                    <input
                        name="attenuation_level" 
                        type="number" 
                        value={attenuation_level} 
                        onChange={(e) => setAttenuationLevel(e.target.value)}
                    />
                    <label for="contributed_by">Contributed by: </label>{" "}
                    <input
                        name="contributed_by" 
                        type="text" 
                        value={contributed_by} 
                        onChange={(e) => setContributedBy(e.target.value)}
                    />
                    <button type="submit" onClick={(e) => createBeer(e)}>Add Beer</button>
                </form>
            </div>
        </div>
    )
};

export default NewBeer;