import React, { useState } from "react";
import axios from "axios";
import './App.css';
import Header from "./header"

const initialState = {
  name: "",
  tagline: "",
  description: "",
  first_brewed: "",
  brewers_tips: "",
  attenuation_level: 0,
  contributed_by: ""
};

const AddNewBeer = () => {
  const [formState, setFormState] = useState(initialState);

  const handleInputChange = (event) => {
    let inputValue = event.target.value;
    let inputName = event.target.name;
    let inputType = event.target.type;

    if(inputType === "number") {
      inputValue = parseInt(inputValue)
    };

    setFormState({ ...formState, [inputName]: inputValue});

  };

  function addNewBeer(event) {
    event.preventDefault();
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', formState)
      .then(() => {})
      .catch((error) => error);

    setFormState(initialState);
  }


  return (
    <div>
        <h1>Add New Beer</h1>
        <Header /> 
        <div>
          <form onSubmit={addNewBeer}>
            <div>
                <p>Name</p>
                <input type="text" name="name" placeholder="Enter beer name" value={formState.name} onChange={handleInputChange} />
                <p>Tagline</p>
                <input type="text" name="tagline" placeholder="Enter tagline" value={formState.tagline} onChange={handleInputChange} /> 
                <p>Description</p>
                <input type="text" name="description" placeholder="Your description here" value={formState.description} onChange={handleInputChange} />
                <p>First brewed</p>
                <input type="date" name="first_brewed" value={formState.first_brewed} onChange={handleInputChange} />
                <p>Brewers tips</p>
                <input type="text" name="brewers_tips" placeholder="Brewers tips..." value={formState.brewers_tips} onChange={handleInputChange} />
                <p>Attenuation level</p>
                <input type="number" name="attenuation_level" placeholder="Attenuation level...." value={formState.attenuation_level} onChange={handleInputChange} />
                <p>Contributed by</p>    
                <input type="text" name="contributed_by" placeholder="Your name here..." value={formState.contributed_by} onChange={handleInputChange} />
            </div>
            <div> 
              <button>Submit</button>
            </div>
          </form>
        </div>
    </div>
  )
};

export default AddNewBeer;