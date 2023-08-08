import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header.js";
import axios from 'axios'

const NewBeer = () => {

    const [name, setName] = useState("")
    const [tagline, setTagline] = useState("")
    const [description, setDescription] = useState("")
    const [firstBrewed, setFirstBrewed] = useState("")
    const [brewersTips, setBrewersTips] = useState("")
    const [attenuationLevel, setAttenuationLevel] = useState("")
    const [contributedBy, setContributedBy] = useState("")

    const navigate = useNavigate();

    function handleSubmit(e) {

        e.preventDefault();

        const newBeer = {
            name: name,
            tagline: tagline,
            description: description,
            first_brewed: firstBrewed,
            brewers_tips: brewersTips,
            attenuation_level: attenuationLevel,
            contributed_by: contributedBy,
        }

        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
        .then( data => {
            console.log("New Beer Created:", data)
            navigate("/")
            })
        } 
    

    return (
            <>
                <Header />
                <form onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)}></input>
                    <label>Tagline</label>
                    <input type="text" id="tagline" name="tagline" value={tagline} onChange={(e) => setTagline(e.target.value)}></input>
                    <label>Description</label>
                    <input type="text" id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)}></input>
                    <label>First Brewed</label>
                    <input type="text" id="first_brewed" name="first_brewed" value={firstBrewed} onChange={(e) => setFirstBrewed(e.target.value)}></input>
                    <label>Brewers Tips</label>
                    <input type="text" id="brewers_tips" name="brewers_tips" value={brewersTips} onChange={(e) => setBrewersTips(e.target.value)}></input>
                    <lable>Attenuation Level</lable>
                    <input type="number" id="attenuation_level" name="attenuation_level" value={attenuationLevel} onChange={(e) => setAttenuationLevel(e.target.value)}></input>
                    <label>Contributed By</label>
                    <input type="text" id="contributed_by" name="contributed_by" value={contributedBy} onChange={(e) => setContributedBy(e.target.value)}></input>
                    <button type="submit">Create a New Beer</button>
                </form>
            </>
   
    )
}

export default NewBeer;