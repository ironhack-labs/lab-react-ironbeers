import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NewBeer() {

  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [first_brewed, setFirst_brewed] = useState('');
  const [brewers_tips, setBrewers_tips] = useState('');
  const [attenuation_level, setAttenuation_level] = useState(0);
  const [contributed_by, setContributed_by] = useState('');

  // https://ih-beers-api2.herokuapp.com/beers/new

  const handleSubmit = e => {
    e.preventDefault();
    const body = {name, tagline, description, 
                  first_brewed, brewers_tips, 
                  attenuation_level, contributed_by};
    
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
      .then(res => {
        setName('');
        setTagline('');
        setDescription('');
        setFirst_brewed('');
        setBrewers_tips('');
        setAttenuation_level(0);
        setContributed_by('');
      })

    alert("Your new beer has been added!");
  }

  return (
    <div>

      <Link to="/">
          <img src="../assets/header.png" width="300px" alt="header banner" />
      </Link>
      <br /><br />

      <form onSubmit={handleSubmit}>

        <label htmlFor="name">Name: </label> 
        <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
        <br /><br />

        <label htmlFor="tagline">Tagline: </label> 
        <input type="text" name="tagline" value={tagline} onChange={e => setTagline(e.target.value)} />
        <br /><br />

        <label htmlFor="description">Description: </label> 
        <input type="text" name="description" value={description} onChange={e => setDescription(e.target.value)} />
        <br /><br />

        <label htmlFor="first_brewed">First Brewed: </label> 
        <input type="text" name="first_brewed" value={first_brewed} onChange={e => setFirst_brewed(e.target.value)} />
        <br /><br />

        <label htmlFor="brewers_tips">Brewers Tips: </label> 
        <input type="text" name="brewers_tips" value={brewers_tips} onChange={e => setBrewers_tips(e.target.value)} />
        <br /><br />

        <label htmlFor="attenuation_level">Attenuation Level: </label> 
        <input type="number" name="attenuation_level" value={attenuation_level} onChange={e => setAttenuation_level(e.target.value)} />
        <br /><br />
        
        <label htmlFor="contributed_by">Contributed by: </label> 
        <input type="text" name="contributed_by" value={contributed_by} onChange={e => setContributed_by(e.target.value)} />
        <br /><br />

        <button type="submit">ADD NEW</button>

      </form>

    </div>
  )
}
