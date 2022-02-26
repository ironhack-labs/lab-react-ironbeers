//inspiration for when you need to work on this.
import { useState } from "react";
import axios from 'axios';
import { Navigate, Link, useNavigate} from "react-router-dom";

function NewBeer() {
  const [name, setName] = useState("");
  const [tagline , setTagline ] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed , setFirst_Brewed ] = useState("");
  const [brewers_tips , setBrewers_Tips] = useState("");
  const [attenuation_level, setAttenuation_Level] = useState(0);
  const [contributed_by , setContributed_By] = useState("");
  
  const handleNameInput = e => setName(e.target.value);
  const handleTaglineInput = e => setTagline(e.target.value);
  const handleDescriptionInput = e => setDescription(e.target.value);
  const handleFirst_BrewedInput = e => setFirst_Brewed(e.target.value);
  const handleBrewers_TipsInput = e => setBrewers_Tips(e.target.value);
  const handleAttenuation_LevelInput = e => setAttenuation_Level(e.target.value);
  const handleContributed_ByInput = e => setContributed_By(e.target.value);
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {        // <==  ADD
    e.preventDefault();
    const newBeer = { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by};   
    
    axios 
        .post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
        .then((response) => {

        
        setName("");
        setTagline("");
        setDescription("");
        setFirst_Brewed("");
        setBrewers_Tips("");
        setAttenuation_Level(0);
        setContributed_By("");

        navigate('/BeerList');
        });
  }

  return (
    <div className="AddNewBeer">
      <h4>New beer</h4>
      <form onSubmit={handleSubmit}>
        <label>Name :</label>
        <input 
          type="text" 
          name="name" 
          value={name} 
          onChange={handleNameInput} 
        />
 
        <label>Tagline:</label>
        <input 
          type="text" 
          name="tagline" 
          value={tagline} 
          onChange={handleTaglineInput} 
        />
 
        <label>Desctiption:</label>
        <input 
          type="text" 
          name="description" 
          value={description} 
          onChange={handleDescriptionInput} 
        />

        <label>First Brewed:</label>
        <input 
          type="text" 
          name="first_brewed" 
          value={first_brewed} 
          onChange={handleFirst_BrewedInput} 
        />

        <label>Tips from the brewer:</label>
        <input 
          type="text" 
          name="brewers_tips" 
          value={brewers_tips} 
          onChange={handleBrewers_TipsInput} 
        />

        <label>Attenuation level:</label>
        <input 
          type="number" 
          name="attenuation_level" 
          value={attenuation_level} 
          onChange={handleAttenuation_LevelInput} 
        />

        <label>Contributed By:</label>
        <input 
          type="text" 
          name="contributed_by" 
          value={contributed_by} 
          onChange={handleContributed_ByInput} 
        />

        <button type="submit">Add a Beer</button>
      </form>
    </div>
  );
}
 
export default NewBeer;