import React from 'react';
import { addNewBeer } from '../../services/beers-service';
import './NewBeerForm.css';
import { useState } from 'react';

export default function NewBeerForm() {
    const [succesMsg, setSuccesMsg] = useState(false);

    const postNewBeer = (event) => {
        event.preventDefault();
        const data = {
          name: event.target[0].value,
          tagline: event.target[1].value,
          description: event.target[2].value,
          first_brewed: event.target[3].value,
          brewers_tips: event.target[4].value,
          attenuation_level: event.target[5].value,
          contributed_by: event.target[6].value,
        };
        
        const requestOptions = {
          method: "POST",
          url: "https://ih-beers-api2.herokuapp.com/beers/new",
          data: data
        };

        addNewBeer(requestOptions);
        setSuccesMsg(true);
    }

    return (
      <form onSubmit={postNewBeer} className="Form-container">
        <input type="text" name="name" id="name" placeholder="Name"></input>
        <input
          type="text"
          name="tagline"
          id="tagline"
          placeholder="Tagline"
        ></input>
        <input
          type="text"
          name="description"
          id="description"
          placeholder="Description"
        ></input>
        <input
          type="text"
          name="first_brewed"
          id="first_brewed"
          placeholder="First brewed"
        ></input>
        <input
          type="text"
          name="brewers_tips"
          id="brewers_tips"
          placeholder="Brewers tips"
        ></input>
        <input
          type="number"
          name="attenuation_level"
          id="attenuation_level"
          placeholder="Attenuation level"
        ></input>
        <input
          type="text"
          name="contributed_by"
          id="contributed_by"
          placeholder="Contributed by"
        ></input>
        <button type="submit">Add New</button>
        { succesMsg ? "New beer successfully saved to database!" : '' }
      </form>
    );
}