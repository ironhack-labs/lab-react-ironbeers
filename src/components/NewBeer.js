import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 

function NewBeer(props) {
  const [newBeer, setNewBeer] = useState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: '',
  });

  const navigate = useNavigate();
  
  const handleInputChange = (e) => {
    setNewBeer({ ...newBeer, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
    .then((newBeer)=> {
      props.updateBeersList(newBeer);
      return setNewBeer({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: '',
      });
    })
    .then(()=> {
      navigate('/beers');
    })
  }

  return (
    <div>
      <Header />

      <form onSubmit={handleFormSubmit}>
        <label>
          Name
          <input type="text" name="name" value={newBeer.name} onChange={(e) => handleInputChange(e)} />
        </label>
        <label>
          Tagline
          <input type="text" name="tagline" value={newBeer.tagline} onChange={(e) => handleInputChange(e)} />
        </label>
        <label>
          Description
          <input type="text" name="description" value={newBeer.description} onChange={(e) => handleInputChange(e)} />
        </label>
        <label>
          First brewed
          <input type="text" name="first_brewed" value={newBeer.first_brewed} onChange={(e) => handleInputChange(e)} />
        </label>
        <label>
          Brewers tips
          <input type="text" name="brewers_tips" value={newBeer.brewers_tips} onChange={(e) => handleInputChange(e)} />
        </label>
        <label>
          Attenuation level
          <input
            type="number"
            min="0"
            max="100"
            name="attenuation_level"
            value={newBeer.attenuation_level}
            onChange={(e) => handleInputChange(e)}
          />
        </label>
        <label>
          Contributed_by
          <input
            type="text"
            name="contributed_by"
            value={newBeer.contributed_by}
            onChange={(e) => handleInputChange(e)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default NewBeer;
