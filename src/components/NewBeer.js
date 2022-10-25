import homeImg from '../assets/20326047.png';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function NewBeer() {

    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [first_brewed, setFirstBrewed] = useState("");
    const [brewers_tips, setBrewersTips] = useState("");
    const [attenuation_level, setAttenuationLevel] = useState(0);
    const [contributed_by, setContributedBy] = useState("");

    const redirect = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const newBeer = {
            name: name,
            tagline: tagline,
            description: description,
            first_brewed: first_brewed,
            brewers_tips: brewers_tips,
            attenuation_level: attenuation_level,
            contributed_by: contributed_by
        }
        axios.post(process.env.REACT_APP_API_URL + "/beers/new", newBeer)
            .then((response) => {
                
                //console.log(response);

                redirect("/");
            })
            .catch((error) => {
                console.log(error);
            });
        //clear form
        setName("");
        setTagline("");
        setDescription("");
        setFirstBrewed("");
        setBrewersTips("");
        setAttenuationLevel(0);
        setContributedBy("");
        

    }

    return (
        <div>
            <Link to="/">
                < header > <img src={homeImg} alt="No" /></header>
            </Link>
            <form onSubmit={handleFormSubmit}>

                <input
                    type="text"
                    name="name"
                    placeholder="enter the name"
                    value={name}
                    onChange={(e) => { setName(e.target.value) }}
                />

                <input
                    type="text"
                    name="tagline"
                    placeholder="enter tagline"
                    value={tagline}
                    onChange={(e) => { setTagline(e.target.value) }}
                />

                <input
                    type="textarea"
                    name="description"
                    placeholder="enter description"
                    value={description}
                    onChange={(e) => { setDescription(e.target.value) }}
                />

                <input
                    type="text"
                    name="first_brewed"
                    placeholder="enter first brewed date"
                    value={first_brewed}
                    onChange={(e) => { setFirstBrewed(e.target.value) }}
                />

                <input
                    type="text"
                    name="brewers_tips"
                    placeholder="enter brewed tips"
                    value={brewers_tips}
                    onChange={(e) => { setBrewersTips(e.target.value) }}
                />

                <input
                    type="number"
                    name="attenuation_level"
                    min={0}
                    max={100}
                    value={attenuation_level}
                    onChange={(e) => { setAttenuationLevel(e.target.value) }}
                />

                <input
                    type="text"
                    name="contributed_by"
                    placeholder="contributed_by"
                    value={contributed_by}
                    onChange={(e) => { setContributedBy(e.target.value) }}
                />

                <button>Create new beer</button>
            </form>

        </div>

    )
}

export default NewBeer;