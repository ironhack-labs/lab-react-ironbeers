import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import '../App.css';

const initialState = {
  name: "",
  tagline: "",
  description: "",
  first_brewed: "",
  brewers_tips: "",
  attenuation_level: "",
  contributed_by: "",
};

const Nbeer = () => {
  const [formState, setFormState] = useState(initialState);

  const handleInputChange = (event) => {
    let inputValue = event.target.value;
    let inputName = event.target.name;
    setFormState({ ...formState, [inputName]: inputValue});
  };
  
  const newBeer = (event) => {
    event.preventDefault();
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', formState)
      .then()
      .catch((error) => error);
    setFormState(initialState);
  }
  

  return (
    <div>
        <header>
<ul>
<Link to='/'>Home</Link>
</ul>
</header>
        <h1>Add new beer</h1>
        <div>
          <form onSubmit={newBeer}>
            <div className="beerbox">
              <input className="input" 
                type="text"
                name="name"
                placeholder="Enter Beer Name"
                value={formState.name}
                onChange={handleInputChange}
                />
            </div>

            <div className="beerbox">
              <input className="input" 
                type="text"
                name="tagline"
                placeholder="Enter Tagline"
                value={formState.tagline}
                onChange={handleInputChange}
                />
            </div>

            <div className="beerbox">
              <input className="input" 
                type="text"
                name="description"
                placeholder="Your description here"
                value={formState.description}
                onChange={handleInputChange}
                />
            </div>

            <div className="beerbox">
              <input className="input" 
                type="text"
                name="first_brewed"
                placeholder="First brewed on ... MM/YYYY"
                value={formState.first_brewed}
                onChange={handleInputChange}
                />
            </div>

            <div className="beerbox">
              <input className="input" 
                type="text"
                name="brewers_tips"
                placeholder="Brewers tips..."
                value={formState.brewers_tips}
                onChange={handleInputChange}
                />
            </div>

            <div className="beerbox">
              <input className="input" 
                type="number"
                name="attenuation_level"
                placeholder="Attenuation Level...."
                value={formState.attenuation_level}
                onChange={handleInputChange}
                />
            </div>

            <div className="beerbox">
              <input className="input" 
                type="text"
                name="contributed_by"
                placeholder="Your Name here..."
                value={formState.contributed_by}
                onChange={handleInputChange}
                />
            </div>

            <div className="beerbox"> 
              <button className="submit-button">Submit</button>
            </div>
          </form>
        </div>
    </div>
  )
};

export default Nbeer;