import { useEffect, useState } from "react";
import axios from "axios";



function AddBeerPage() {
    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [first_brewed, setFirst_Brewed] = useState("");
    const [brewers_tips, setBrewers_Tips] = useState("");
    const [attenuation_level, setAttenuation_Level] = useState(0);
    const [contributed_by, setContributed_By] = useState("");

    const handleName = (e) => setName(e.target.value);
    const handleTagline = (e) => setTagline(e.target.value);
    const handleDescription = (e) => setDescription(e.target.value);
    const handleFirst_Brewed = (e) => setFirst_Brewed(e.target.value);
    const handleBrewers_Tips = (e) => setBrewers_Tips(e.target.value);
    const handleAttenuation_Level = (e) => setAttenuation_Level(e.target.value);
    const handleContributed_By = (e) => setContributed_By(e.target.value);

    const handleSubmit = (e) => {       
        e.preventDefault();
        const newBeer = { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by };
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
      
            navigate("/");
        })
         
      }
     
      return(
        <div className="AddBeer">
        
        <form onSubmit={handleSubmit} >      
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleName}
          />
   
          <label>Tagline:</label>
          <input
            type="text"
            name="tagline"
            value={tagline}
            onChange={handleTagline}
          />
   
          <label>Description</label>
          <input
            type="text"
            name="desription"
            value={description}
            onChange={handleDescription}
          />
   
          <label> First Brewed</label>
          <input
            type="text"
            name="first_brewed"
            value={first_brewed}
            onChange={handleFirst_Brewed}
          />
          <label>Brewer's Tips</label>
          <input
            type="text"
            name="brewers_tips"
            value={brewers_tips}
            onChange={handleBrewers_Tips}
          />
           <label> Attenuation Level</label>
          <input
            type="number"
            name="attenuation_level"
            value={attenuation_level}
            onChange={handleAttenuation_Level}
          />
            <label>Contributed By</label>
          <input
            type="text"
            name="contributed_by"
            value={contributed_by}
            onChange={handleContributed_By}
          />
   
   
   
          <button type="submit">Add a Beer</button>
        </form>
      </div>
    
      
      )






}

export default AddBeerPage;
