import React from 'react'
import Header from '../components/Header';
import { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";

export default function NewBeer() {

    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [first_brewed, setFirst_brewed] = useState('');
    const [brewers_tips, setBrewers_tips] = useState('');
    const [attenuation_level, setAttenuation_level] = useState(0);
    const [contributed_by, setContributed_by] = useState('');
    
    
    const history = useHistory();


    const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by};
    

    try{const response = await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", body);
    console.log(response);
//Reset the state of the form fields!
setName('');
setTagline('');
setDescription('');
setFirst_brewed('');
setBrewers_tips('');
setAttenuation_level('');
setContributed_by('');
//redirect user
history.push('/beers')}
catch(error){
console.log(error);
}

}

    return ( 
  <div className="AddApartmentPage">
  <Header/>
      <h3>Add New Beer</h3>
      
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label>tagline</label>
        <input
          type="text"
          name="tagline"
          onChange={(e) => setTagline(e.target.value)}
          value={tagline}
        />
        <label>description</label>
        <input
          type="text"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <label>first brewed</label>
        <input
          type="text"
          name="first_brewed"
          onChange={(e) => setFirst_brewed(e.target.value)}
          value={first_brewed}
        />
        <label>attenuation level</label>
        <input
          type="number"
          name="attenuation_level"
          onChange={(e) => setAttenuation_level(e.target.value)}
          value={attenuation_level}
        />

        <label>contributed by</label>
        <input
          type="text"
          name="contributed_by"
          onChange={(e) => setContributed_by(e.target.value)}
          value={contributed_by}
        />
        
        <button type="submit">Create new Beer</button>
        
      </form>
    </div>
    )
}





