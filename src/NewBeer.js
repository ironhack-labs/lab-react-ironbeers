import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const NewBeer = () => {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setfirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");
  const navigate = useNavigate()



  const handleSubmit = event => {
    event.preventDefault()

  axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
    name: name, 
    tagline: tagline, 
    description: description,
    first_brewed: firstBrewed,
    brewers_tips: brewersTips,
    attenuation_level: attenuationLevel,
    contributed_by: contributedBy
  })
  .then(response => {
    console.log(response)
    navigate('/beers')
  })  

  }
  
  return (
    <div>
      <div> 
        <Navbar />
        <form onSubmit={handleSubmit}>
          <label>Name:<input onChange={(event)=>setName(event.target.value)} type="text" name="name" value={name} /></label>
          <br />
          <label>Tagline:<input onChange={(event)=>setTagline(event.target.value)} type="text" name="tagline" value={tagline} /></label>
          <br />
          <label>Description:<input onChange={(event)=>setDescription(event.target.value)} type="text" name="description" value={description} /></label>
          <br />
          <label>First Brewed:<input onChange={(event)=>setfirstBrewed(event.target.value)} type="text" name="firstBrewed" value={firstBrewed} /></label>
          <br />
          <label>Brewers Tips:<input onChange={(event)=>setBrewersTips(event.target.value)} type="text" name="brewers-tips" value={brewersTips}/></label>
          <br />
          <label>Attenuation Level:<input onChange={(event)=>setAttenuationLevel(event.target.value)} type="number" name="attenuationLevel" value={attenuationLevel} /></label>
          <br />
          <label>Conrtibuted By:<input onChange={(event)=>setContributedBy(event.target.value)} type="text" name="contributedBy" value={contributedBy} /></label>
          <br />
          <button type="submit">Add new</button>
        </form>
      </div>
    </div>
  );
};

export default NewBeer;