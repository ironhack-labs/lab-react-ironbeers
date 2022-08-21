import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateBeer() {


    const [name, setName] = useState('')
    const [tagline, setTagline] = useState('')
    const [description, setDescription] = useState('')
    const [first_brewed, setFirstBrewed] = useState('')
    const [brewers_tips, setBrewersTips] = useState('')
    const [attenuation_level, setAttenuationLevel] = useState(0)
    const [contributed_by, setContributedBy] = useState('')

    const navigate = useNavigate();

    const handleName = (e) => setName(e.target.value);
    const handleTagline = (e) => setTagline(e.target.value);
    const handleDescription = (e) => setDescription(e.target.value);
    const handleFirstBrewed = (e) => setFirstBrewed(e.target.value);
    const handleBrewersTips = (e) => setBrewersTips(e.target.value);
    const handleAttenuation = (e) => setAttenuationLevel(e.target.value);
    const handleContributedBy = (e) => setContributedBy(e.target.value);


    const handleSubmit = (e) => {
        e.preventDefault();
    
        const newBeer = {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by }
    
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer).then((response) => {
        console.log(response);

        setName('');
        setTagline('');
        setDescription('');
        setFirstBrewed ('');
        setBrewersTips ('');
        setAttenuationLevel(0);
        setContributedBy('');
         
    
          navigate('/');
        });
      };
    

  return (
    <div>
        <form className='form-beer' onSubmit={handleSubmit}>

        <label htmlFor="name">Name</label>
        <input type="text" name='name' value={name} onChange={handleName} />

        <label htmlFor="tagline">Tagline</label>
        <input type="text" name='tagline' value={tagline} onChange={handleTagline}/>

        <label htmlFor="description">Description</label>
        <input type="text" name='description' value={description} onChange={handleDescription}/>

        <label htmlFor="first_brewed">First Brewed</label>
        <input type="text" name='first_brewed' value={first_brewed} onChange={handleFirstBrewed}/>

        <label htmlFor="brewers_tips">Brewers tips</label>
        <input type="text" name='brewers_tips' value={brewers_tips} onChange={handleBrewersTips}/>

        <label htmlFor="attenuation_level">Attenuation level</label>
        <input type="number" name='attenuation_level' value={attenuation_level} onChange={handleAttenuation}/>

        <label htmlFor="contributed_by">Contributed by</label>
        <input type="text" name='contributed_by' value={contributed_by} onChange={handleContributedBy}/>

        <button type='submit'>ADD NEW</button>

        </form>


    </div>
  )
}

export default CreateBeer