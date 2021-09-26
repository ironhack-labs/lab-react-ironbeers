import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react';

// import { Input, Button } from "antd";


export default function NewBeer(props) {

    const [beers, setBeers] = useState([]);


    // const [foods, setFoods] = useState(foods)
    const [name, setName] = useState('')
    const [tagline, setTagline] = useState('')
    const [description, setDescription] = useState('')
    const [first_brewed, setFirst_brewed] = useState('')
    const [brewers_tips, setBrewers_tips] = useState('')
    const [attenuation_level, setAttenuation_level] = useState('')
    const [contributed_by, setContributed_by] = useState('')


    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by)
        // const newBeer = {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by}
        // console.log(newBeer)
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
            name, 
            tagline, 
            description, 
            first_brewed, 
            brewers_tips, 
            attenuation_level, 
            contributed_by})
            .then((response) => {
                console.log(response);
                alert('Your beer has been successfully uploaded to the database!')
              }, (error) => {
                console.log(error);
              });
      }

    const handleNameChange = event => {
        event.preventDefault()
        setName(event.target.value)
      }

      const handleTaglineChange = event => {
        event.preventDefault()
        setTagline(event.target.value)
      }

      const handleDescriptionChange = event => {
        event.preventDefault()
        setDescription(event.target.value)
      }

      const handleFirstBrewedChange = event => {
        event.preventDefault()
        setFirst_brewed(event.target.value)
      }

      const handleBrewersTipsChange = event => {
        event.preventDefault()
        setBrewers_tips(event.target.value)
      }

      const handleAttenutationLevelChange = event => {
        event.preventDefault()
        setAttenuation_level(event.target.value)
      }

      const handleContributedByChange = event => {
        event.preventDefault()
        setContributed_by(event.target.value)
      }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name" >Name: </label>
                <input value={name} type="text" onChange={handleNameChange} />
                <label htmlFor="tagline" >Tagline: </label>
                <input value={tagline} type="text" onChange={handleTaglineChange} />
                <label htmlFor="description" >Description: </label>
                <input value={description} type="text" onChange={handleDescriptionChange} />
                <label htmlFor="first_brewed" >First Brewed: </label>
                <input value={first_brewed} type="text" onChange={handleFirstBrewedChange} />
                <label htmlFor="brewers_tips" >Brewers Tips: </label>
                <input value={brewers_tips} type="text" onChange={handleBrewersTipsChange} />
                <label htmlFor="attenuation_level" >Attenutation Level: </label>
                <input value={attenuation_level} type="number" onChange={handleAttenutationLevelChange} />
                <label htmlFor="contributed_by" >Contributed By: </label>
                <input value={contributed_by} type="text" onChange={handleContributedByChange} />
                <button type="submit">Add New</button>
            </form>
        </div>
    )
}