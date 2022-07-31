import axios from 'axios';
import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";


function CreateBeer(props) {

    const [name, setName] = useState("")
    const [tagline, setTagline] = useState("")
    const [description, setDescription] = useState("")
    const [first_brewed, setFirst_brewed] = useState("")
    const [brewers_tips, setBrewers_tips] = useState("")
    const [attenuation_level, setAttenuation_level] = useState("")
    const [contributed_by, setContributed_by] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        const newBeer = {
            name,
            tagline,
            description,
            first_brewed,
            brewers_tips,
            attenuation_level,
            contributed_by
          }

        axios
        .post(process.env.REACT_APP_API_BASE_URL + '/beers/new', newBeer)
        .then((response) => {
          console.log("axios create Beer response:",response.data);
        navigate("/beers")
        })
        .catch((e) => {
          console.log(e);
        });

      }

    return (
        <>
            <p>This is the CreateBeer Form</p>
            <header>
                <NavLink to="/">Home</NavLink>
            </header>

            {/* <form action={process.env.REACT_APP_API_BASE_URL + '/Beers'} method="POST"> */}
            <form onSubmit={handleSubmit}>
                <label>Name:
                    <input name="name" type="text" onChange={(e) => {setName(e.target.value)}}/>
                </label>
                <label>Tagline:
                    <input name="tagline" type="text" onChange={(e) => {setTagline(e.target.value)}} />
                </label>
                <label>Description:
                    <input name="description" type="text" onChange={(e) => {setDescription(e.target.value)}}/>
                </label>
                <label>First brewed:
                    <input name="first_brewed" type="text" onChange={(e) => {setFirst_brewed(e.target.value)}}/>
                </label>
                <label>Brewers Tips :
                    <input name="brewers_tips" type="text" onChange={(e) => {setBrewers_tips(e.target.value)}} />
                </label>
                <label>Attenuation Level:
                    <input name="attenuation_level" type="text" onChange={(e) => {setAttenuation_level(e.target.value)}}/>
                </label>
                <label>Contributed by:
                    <input name="contributed_by" type="text" onChange={(e) => {setContributed_by(e.target.value)}}/>
                </label>
                <button type="submit">Create Beer</button>
            </form>

            <NavLink to="/beers">back to the List of Beers</NavLink>
        </>
    )

}

export default CreateBeer;