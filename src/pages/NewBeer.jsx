import React from 'react';
import axios from 'axios';
import { useState } from 'react';

function NewBeer () {
    const[name, setName] = useState('');
    const[tagline, setTagline] = useState('');
    const[description, setDescription] = useState('');
    const[first_brewed, setFirstBrewed] = useState('');
    const[brewers_tips, setBrewersTips] = useState('');
    const[attenuation_level, setAtenuationLevel] = useState(0);
    const[contributed_by, setContributedBy] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const body = {  name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by };
        
        axios
          .post('https://ih-beers-api2.herokuapp.com/beers/new', body)
          .then(() => {
            setName('');
            setTagline('');
            setDescription('');
            setFirstBrewed('');
            setBrewersTips('');
            setAtenuationLevel(0);
            setContributedBy('');
          });
      };

     
    return (
        <div className="list">
          <h3>Add Product!</h3>
          <form onSubmit={handleSubmit}>
    
            <label>Name:</label>
            <input type="text" value = {name} onChange={(e) => setName(e.target.value)} />
    
            <label>Tagline:</label>
            <input type="text" value = {tagline} onChange={(e) => setTagline(e.target.value)} />
    
            <label>Description:</label>
            <input type="text" value = {description} onChange={(e) => setDescription(e.target.value)}/>
    
            <label>First Brewed:</label>
            <input type="text" value = {first_brewed} onChange={(e) => setFirstBrewed(e.target.value)} />
    
            <label>Brewers Tips:</label>
            <input type="text" value = {brewers_tips} onChange={(e) => setBrewersTips(e.target.value)} />
    
            <label>Attenuation Level:</label>
            <input type="text" value = {attenuation_level} onChange={(e) => setAtenuationLevel(e.target.value)} />
    
            <label>Contributed By:</label>
            <input type="text" value = {contributed_by} onChange={(e) => setContributedBy(e.target.value)}/>
    
            <button type ="Submit">Add New</button>
         </form>
        </div>
      )
    }
export default NewBeer;