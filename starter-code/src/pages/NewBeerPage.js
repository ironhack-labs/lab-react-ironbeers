import React, {useState} from 'react';
import Header from './../components/Header';
import {addBeer} from './../services/beerService';


const NewBeerPage = () => {
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [first_brewed, setFirstBrewed] = useState('');
  const [brewers_tips, setBrewersTips] = useState('');
  const [attenuation_level, setAttenuationLevel] = useState('');
  const [contributed_by, setContributedBy] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await addBeer({name, tagline, attenuation_level, first_brewed, description, contributed_by });
    console.log(res);
    setName('');
    setTagline('');
    setDescription('');
    setFirstBrewed('');
    setBrewersTips('');
    setAttenuationLevel('');
    setContributedBy('');
  };

  return(
    <div>
      <Header/>

      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}></input>
        <label htmlFor='tagline'>Tag Line</label>
        <input type="text" id="tagline" value={tagline} onChange={(e) => setTagline(e.target.value)}></input>
        <label htmlFor='description'>Description</label>
        <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)}></input>
        <label htmlFor='first_brewed'>First Brewed</label>
        <input type="text" id="first_brewed" value={first_brewed} onChange={(e) => setFirstBrewed(e.target.value)}></input>
        <label htmlFor='brewers_tips'>Brewers Tips</label>
        <input type="text" id="brewers_tips" value={brewers_tips} onChange={(e) => setBrewersTips(e.target.value)}></input>
        <label htmlFor='attenuation_level'>Attenuation Level</label>
        <input type="number" id="attenuation_level" value={attenuation_level} onChange={(e) => setAttenuationLevel(e.target.value)}></input>
        <label htmlFor='contributed_by'>Contributed By</label>
        <input type="text" id="contributed_by" value={contributed_by} onChange={(e) => setContributedBy(e.target.value)}></input>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default NewBeerPage;