import React from "react"; 
import { useParams } from 'react-router-dom'; 
import Header from "../header"; 
import { useState, useEffect } from "react"; 
import axios from "axios"; 

const NewBeer = () => { 

    const [beers, setBeers] = useState([]); 
    const [name, setName] = useState('')
    const [tagline, setTagline] = useState('')
    const [description, setDescription] = useState('')
    const [first_brewed, setFirstBrewed] = useState('')
    const [brewers_tips, setBrewersTips] = useState('')
    const [attentuation_level, setLevel] = useState('')
    const [contributor, setContributor] = useState('')

    const handleSubmit = (e) => {                 
        e.preventDefault();
        const body = { name: name, tagline: tagline, description: description, first_brewed: first_brewed, 
        brewers_tips: brewers_tips, attentuation_level: attentuation_level, contributor: contributor };
        // fetch the data from the api
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', body)
                .then(response => {
                console.log(response.data)
                // set the state of characters
                setBeers(response.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" name="name" onChange={function (e) { setName(e.target.value) }} value={name} />
            </div>

            <div> 
                <label>Tagline:</label>
                <input type="text" name="tagline" onChange={function (e) { setTagline(e.target.value) }} value={tagline} />
            </div>

            <div> 
                <label>Description:</label>
                <input type="text" name="description" onChange={function (e) { setDescription(e.target.value) }} value={description} />
            </div>

            <div>
                <label>First Brewed:</label>
                <input type="text" name="first_brewed" onChange={function (e) { setFirstBrewed(e.target.value) }} value={first_brewed} />
            </div>

            <div>
                <label>Brewer's Tips:</label>
                <input type="text" name="brewers_tips" onChange={function (e) { setBrewersTips(e.target.value) }} value={brewers_tips} />
            </div>

            <div>
                <label>Attenuation Level:</label>
                <input type="text" name="attentuation_level" onChange={function (e) { setLevel(e.target.value) }} value={attentuation_level} />
            </div>

            <div> 
                <label>Contributed By:</label>
                <input type="text" name="contributor" onChange={function (e) { setContributor(e.target.value) }} value={contributor} />
            </div>
            <button type="submit">Add New</button>
        </form>
    );
}

export default NewBeer;