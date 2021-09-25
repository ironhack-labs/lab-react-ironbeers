import React from 'react'
import Header from './Header'
import { useState } from "react";
import axios from 'axios';

export default function NewBeer() {
    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [first_brewed, setFirst_brewed] = useState('');
    const [brewers_tips, setBrewers_tips] = useState('');
    const [attenuation_level, setAttenuation_level] = useState(null);
    const [contributed_by, setContributed_by] = useState('');
    
    const handleSubmit = event => {
    event.preventDefault();

    const body = {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by};

    console.log(body)

    axios.post("https://ih-beers-api2.herokuapp.com/beers/new", body )
      .then(function (response) {
        console.log(response)
        setName('');
        setTagline('');
        setDescription('');
        setFirst_brewed('');
        setBrewers_tips('');
        setAttenuation_level('');
        setContributed_by('');
      })
      .catch(function (error) {
        console.log(error);
      });

}

return ( 
  <div>
  <Header/>
  <div className="add-beer-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"><b>Name</b></label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={event => setName(event.target.value)}
          value={name}
        />
        <label htmlFor="tagline"><b>Tagline</b></label>
        <input
          type="text"
          name="tagline"
          id="tagline"
          onChange={event => setTagline(event.target.value)}
          value={tagline}
        />

        <label htmlFor="description"><b>Description</b></label>
        <input
          type="text"
          name="description"
          id="description"
          onChange={event => setDescription(event.target.value)}
          value={description}
        />

        <label htmlFor="first-brewed"><b>First Brewed</b></label>
        <input
          type="text"
          name="first_brewed"
          id="first_brewed"
          onChange={event => setFirst_brewed(event.target.value)}
          value={first_brewed}
        />

        <label htmlFor="attenuation-level"><b>Attenuation Level</b></label>
        <input
          type="number"
          name="attenuation_level"
          id="attenuation-level"
          onChange={event => setAttenuation_level(event.target.value)}
          value={attenuation_level}
        />

        <label htmlFor="contributed"><b>Contributed By</b></label>
        <input
          type="text"
          name="contributed_by"
          id="contributed_by"
          onChange={event => setContributed_by(event.target.value)}
          value={contributed_by}
        />
        
        <button type="submit">ADD NEW</button>
      </form>
      </div>
    </div>
    )
}
