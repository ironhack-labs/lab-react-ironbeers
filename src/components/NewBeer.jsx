import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import axios from 'axios';

function NewBeer() {
      const [name, setName] = useState('')
      const [tagline, setTagline] = useState('')
      const [description, setDescription] = useState('')
      const [firstBrewed, setFirstBrewed] = useState('')
      const [brewersTips, setBrewersTips] = useState('')
      const [attenuationLevel, setAttenuationLevel] = useState('')
      const [contributedBy, setContributedBy] = useState("");



      const navigate = useNavigate() 

 // Add Handlers
    const handleName = (e) => setName(e.target.value);
    const handleTagline = (e) => setTagline(e.target.value);
    const handleDescription = (e) => setDescription(e.target.value);
    const handleFirstBrewed = (e) => setFirstBrewed(e.target.value);
    const handleBrewersTips = (e) => setBrewersTips(e.target.value);
    const handleAttenuationLevel = (e) => setAttenuationLevel(e.target.value);
    const handleContributedBy = (e) => setContributedBy(e.target.value);


  const handleSubmit = async (e) =>{
    e.preventDefault();

    const newBeer = {
      name, 
      tagline,
      description,
      firstBrewed,
      brewersTips,
      attenuationLevel,
      contributedBy
    }

        try {
          await axios.post(
            "https://ih-beers-api2.herokuapp.com/beers/new",
            newBeer
          );

          //redirect using navigate
           navigate('/'); 
          alert("added Beer");
        } catch (error) {
          console.log(error);
        }
  }


  return (
    <div>
      <h3>Add new beer</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={name} onChange={handleName} />

        <label htmlFor="tagline">Tagline</label>
        <input
          type="text"
          name="tagline"
          value={tagline}
          onChange={handleTagline}
        />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={handleDescription}
        />

        <label htmlFor="firstBrewed">First brewed</label>
        <input
          type="number"
          name="firstBrewed"
          value={firstBrewed}
          onChange={handleFirstBrewed}
        />

        <label htmlFor="brewersTips">Brewers tips</label>
        <input
          type="text"
          name="brewersTips"
          value={brewersTips}
          onChange={handleBrewersTips}
        />

        <label htmlFor="attenuationLevel">Attenuation level</label>
        <input
          type="text"
          name="attenuationLevel"
          value={attenuationLevel}
          onChange={handleAttenuationLevel}
        />

        <label htmlFor="contributedBy">Contributed by: </label>
        <input
          type="text"
          name="contributedBy"
          value={contributedBy}
          onChange={handleContributedBy}
        />

        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
}

export default NewBeer