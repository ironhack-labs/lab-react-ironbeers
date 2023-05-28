import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Newbeer() {
    const navigate = useNavigate();
    const [beerName, setBeerName] = useState('')
    const [beertagline, setBeertagline] = useState('')
    const [beerdescription, setBeerdescription] = useState('')
    const [beerfirst_brewed, setBeerfirst_brewed] = useState('')
    const [beerbrewer_tips, setBeerbrewer_tips] = useState('')
    const [beerattenuation, setBeerattenuation] = useState(0)
    const [beercontributed, setBeercontributed] = useState('')



const handleSubmit = (e)=>{

    e.preventDefault();

    const newBeerData = {
        name: beerName,
        tagline: beertagline,
        description: beerdescription,
        first_brewed: beerfirst_brewed,
        brewer_tips: beerbrewer_tips,
        attenuation_level: beerattenuation,
        contributed_by: beercontributed,

    };

    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeerData)
    .then((response)=>{
        setBeerName('');
        setBeerattenuation(0);
        setBeercontributed('');
        setBeerbrewer_tips('');
        setBeerfirst_brewed('');
        setBeerdescription('');
        setBeertagline('');
        navigate('/beers');
    })




}



    return (
    <div>
   <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={beerName} onChange={(e)=>setBeerName(e.target.value)} />

      <label htmlFor="tagline">Tagline:</label>
      <input type="text" id="tagline" name="tagline" value={beertagline} onChange={(e)=>setBeertagline(e.target.value)} />

      <label htmlFor="description">Description:</label>
      <input type="text" id="description" name="description" value={beerdescription} onChange={(e)=>setBeerdescription(e.target.value)} />

      <label htmlFor="first_brewed">First Brewed:</label>
      <input type="text" id="first_brewed" name="first_brewed" value={beerfirst_brewed} onChange={(e)=>setBeerfirst_brewed(e.target.value)} />

      <label htmlFor="brewers_tips">Brewers Tips:</label>
      <input type="text" id="brewers_tips" name="brewers_tips" value={beerbrewer_tips} onChange={(e)=>setBeerbrewer_tips(e.target.value)} />

      <label htmlFor="attenuation_level">Attenuation Level:</label>
      <input type="number" id="attenuation_level" name="attenuation_level" value={beerattenuation} onChange={(e)=>setBeerattenuation(e.target.value)} />

      <label htmlFor="contributed_by">Contributed By:</label>
      <input type="text" id="contributed_by" name="contributed_by" value={beercontributed} onChange={(e)=>setBeercontributed(e.target.value)} />

      <button type="submit">Create Beer</button>
    </form>



    </div>
  )
}

export default Newbeer