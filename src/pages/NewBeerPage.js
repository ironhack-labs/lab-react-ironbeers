import React from 'react';
import { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";  //esto es para REDIRIGIR
import Navbar from '../components/Navbar';

function NewBeerPage() {
  const [name, setName] = useState("");
  const [tagline , setTagline] = useState("");
  const [description , setDescription] = useState("");
  const [first_brewed , setFirst_brewed] = useState("");
  const [brewers_tips , setBrewers_tips] = useState("");
  const [attenuation_level , setAttenuation_level] = useState("");
  const [contributed_by  , setContributed_by] = useState("");
 
  const history = useHistory(); //esto es para REDIRIGIR

  const handleSubmit = (e) => {
    // Prevent page reload on submit    
    e.preventDefault();
    // Create the body for the POST request    
    const body = { name ,tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by};
    
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
      .then((response) => {
        // Reset the state
        setName("");
        setTagline("");
        setDescription("");
        setFirst_brewed("");
        setBrewers_tips("");
        setAttenuation_level("");
        setContributed_by("");
      
        // Navigate to the `/` page
        history.push('/beers'); //esto es para REDIRIGIR
      });
  };


  return (
    <div>
    <Navbar/>
    <div className="NewBeerPage">
      <h3>Add New Beer</h3>
      
      <form onSubmit={handleSubmit} className="row col-10 col-sm-10 col-md-8 col-lg-6 col-xl-4 mx-auto mt-3">
        <label>Name</label>
        <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name}/>
        <label>Tagline</label>
        <input type="text" name="tagline" onChange={(e) => setTagline(e.target.value)} value={tagline}/>
        <label>Description</label>
        <input type="text" name="description" onChange={(e) => setDescription(e.target.value)} value={description}/>
        <label>First Brewed</label>
        <input type="text" name="first_brewed" onChange={(e) => setFirst_brewed(e.target.value)} value={first_brewed}/>
        <label>Brewers Tips</label>
        <input type="text" name="brewers_tips" onChange={(e) => setBrewers_tips(e.target.value)} value={brewers_tips}/>
        <label>Atenueation Level</label>
        <input type="text" name="attenuation_level " onChange={(e) => setAttenuation_level(e.target.value)} value={attenuation_level}/>
        <label>Contributed By </label>
        <input type="text" name="contributed_by  " onChange={(e) => setContributed_by (e.target.value)} value={contributed_by}/>

        <button type="submit" className="btn btn-warning mt-2">Create Beer</button>
        
      </form>
    </div>
    </div>
  );
}

export default NewBeerPage;