import { useState } from 'react';

function AddBeer(props) {
    const { createBeer } = props;
  
    
    const [name, setName] = useState('');
    const [tagline, setTagline] = useState('');
    const [description , setDescription] = useState('');
    const [first_brewed, setFirst_brewed] = useState('');
    const [brewers_tips, setBrewers_tips] = useState('');
    const [attenuation_level , setAttenuation_level] = useState(0);
    const [contributed_by  , setContributed_by] = useState('');
  
    const handleName = (e) => setName(e.target.value);
    const handleTagline = (e) => setTagline(e.target.value);
    const handleDescription = (e) => setDescription(e.target.value);
    const handleFirst_brewed = (e) => setFirst_brewed(e.target.value);
    const handleBrewers_tips = (e) => setBrewers_tips(e.target.value);
    const handleAttenuation_level = (e) => setAttenuation_level(e.target.value);
    const handleContributed_by = (e) => setContributed_by(e.target.value);
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const newBeer = { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by};
      createBeer(newBeer);

      setName('');
      setTagline('');
      setDescription('');
      setFirst_brewed('');
      setBrewers_tips('');
      setAttenuation_level('0');
      setContributed_by('');
      
      
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={name} onChange={handleName} />
  
          <label htmlFor="tagline">Tagline</label>
          <input type="text" name="Tagline" value={tagline} onChange={handleTagline} />
  
          <label htmlFor="description">Description</label>
          <input type="number" name="description" value={description} onChange={handleDescription} />
  
          <label htmlFor="first_brewed">First_brewed</label>
          <input type="number" name="first_brewed" value={first_brewed} onChange={handleFirst_brewed} />
  
          <label htmlFor="brewers_tips">Brewers_tips</label>
          <input type="number" name="brewers_tips" value={brewers_tips} onChange={handleBrewers_tips} />
  
          <label htmlFor="description">Attenuation_level</label>
          <input type="number" name="attenuation_level" value={attenuation_level} onChange={handleAttenuation_level} />
  
          <label htmlFor="contributed_by">Contributed_by</label>
          <input type="number" name="contributed_by" value={contributed_by} onChange={handleContributed_by} />
  

  
          <button type="submit">Create Beer</button>
        </form>
      </div>
    );
  }
  
  export default AddBeer;