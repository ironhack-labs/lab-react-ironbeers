import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';

const NewBeer = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuation, setAttenuation] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newBeer = await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", {
        name,
        tagline,
        description,
        first_brewed: firstBrewed,
        brewers_tips: brewersTips,
        attenuation_level: attenuation,
        contributed_by: contributedBy
      });
      console.log(newBeer);
      navigate("/beers")
    }
    catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <Navbar/>
      <form className='new-beer-form' onSubmit={handleSubmit}>
        <label>Name</label>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>

        <label>Tagline</label>
        <input type='text' value={tagline} onChange={(e)=>setTagline(e.target.value)}/>

        <label>Description</label>
        <textarea type='text' value={description} onChange={(e)=>setDescription(e.target.value)}/>

        <label>First Brewed</label>
        <input type='text' value={firstBrewed} onChange={(e)=>setFirstBrewed(e.target.value)}/>

        <label>Brewers Tips</label>
        <input type='text' value={brewersTips} onChange={(e)=>setBrewersTips(e.target.value)}/>

        <label>Attenuation Level</label>
        <input type='number' value={attenuation} onChange={(e)=>setAttenuation(e.target.value)}/>

        <label>Contributed By</label>
        <input type='text' value={contributedBy} onChange={(e)=>setContributedBy(e.target.value)}/>

        <button>ADD NEW</button>
      </form>
    </div>
  )
}

export default NewBeer;