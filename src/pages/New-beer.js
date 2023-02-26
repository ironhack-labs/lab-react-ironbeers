import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function NewBeer() {
    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [first_brewed, setFirst_brewed] = useState("");
    const [brewers_tips, setBrewers_tips] = useState("");
    const [attenuation_level, setAttenuation_level] = useState(0);
    const [contributed_by, setContributed_by] = useState("");

    const navigate = useNavigate();

    const handleNameChange = (e) => setName(e.target.value);

    const handleTaglineChange = (e) => setTagline(e.target.value);
  
    const handleDescriptionChange = (e) => setDescription(e.target.value);

    const handleFirst_brewedChange = (e) => setFirst_brewed(e.target.value);

    const handleBrewers_tipsChange = (e) => setBrewers_tips(e.target.value);
  
    const handleAttenuation_levelChange = (e) => setAttenuation_level(e.target.value);

    const handleContributed_byChange = (e) => setContributed_by(e.target.value);



    const handleSubmit = (e) => {
        // Prevent page reload on submit    
        e.preventDefault();
        // Create the body for the POST request    
        const body = { name, tagline, description, first_brewed,brewers_tips,attenuation_level,contributed_by};


    axios
    .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
    .then((response) => {
        // Reset the state
        setName("");
        setTagline("")
        setDescription("")
        setFirst_brewed("")
        setBrewers_tips("")
        setAttenuation_level(0)
        setContributed_by("")

      
        // Navigate to the `/` page
        navigate('/');
      });
    }

    return ( 
    
        <div className="Nre-Beer">
        <h3>Add a new beer</h3>
        
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" onChange={handleNameChange} value={name}/>
    
            <label>Tag line</label>
            <input type="text" name="tagline" onChange={handleTaglineChange} value={tagline}/>
            
            <label >Description</label>
            <input type="text" name="description" value={description} onChange={handleDescriptionChange} />

            <label>First brewed</label>
            <input type="text" name="first_brewed" onChange={handleFirst_brewedChange} value={first_brewed}/>
    
            <label>Brewers tips</label>
            <input type="text" name="brewers_tips" onChange={handleBrewers_tipsChange} value={brewers_tips}/>

            <label>Attenuation level</label>
            <input type="number" name="attenuation_level" onChange={handleAttenuation_levelChange} value={attenuation_level}/>
    
            <label>Contributed by</label>
            <input type="text" name="contributed_by" onChange={handleContributed_byChange} value={contributed_by}/>


    
            <button type="submit">Create Beer</button>
        </form>
    </div>
    );
}

export default NewBeer;