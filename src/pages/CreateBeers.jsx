import React from 'react'
import axios from 'axios';
import { useState} from 'react'


function CreateBeers() {
    const [name, setName] = useState('');
    const [tagline, setTagline] = useState('');
    const [description, setDescription] = useState('');
    const [first_brewed, setFirst_brewed] = useState('');
    const [brewers_tips, setBrewers_tips] = useState('');
    const [attenuation_level, setAttenuation_level] = useState('');
    const [contributed_by, setContributed_by] = useState('');


    const handleName = (e) => setName(e.target.value);
    const handleTagline = (e) => setTagline(e.target.value);
    const handleDescription= (e) => setDescription(e.target.value);
    const handleFirst_brewed = (e) => setFirst_brewed(e.target.value);
    const handleBrewers_tips= (e) => setBrewers_tips(e.target.value);
    const handleAttenuation_level = (e) => setAttenuation_level(e.target.value);
    const handleContributed_by = (e) => setContributed_by(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        const body = { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by };

        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', body).then(() => {
            setName('');
            setTagline('');
            setDescription('')
            setFirst_brewed('')
            setBrewers_tips('')
            setAttenuation_level('')
            setContributed_by('')
          });
        };
   


  return (
    <div className="CreateBeers">
    <h3>Create New Beer</h3>

    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" name="title" value={name} onChange={handleName} />

      <label htmlFor="tagline">Tagline</label>
      <input type="text" name="tagline" value={tagline} onChange={handleTagline} />

      <label htmlFor="description">Description</label>
      <input type="text" name="description" value={description} onChange={handleDescription} />

      <label htmlFor="first_brewed">First Brewed</label>
      <input type="text" name="first_brewed" value={first_brewed} onChange={handleFirst_brewed} />

      <label htmlFor="brewers_tips">Brewers tips</label>
      <input type="text" name="brewers_tips}" value={brewers_tips} onChange={handleBrewers_tips} />

      <label htmlFor="attenuation_level">Attenuation_levele</label>
      <input type="number" name="attenuation_level" value={attenuation_level} onChange={handleAttenuation_level} />

      <label htmlFor="contributed_by">Contributed_by</label>
      <input type="text" name="contributed_by" value={contributed_by} onChange={handleContributed_by} />

      <button type="submit">Create beer</button>
    </form>
    </div>
  );
}


export default CreateBeers