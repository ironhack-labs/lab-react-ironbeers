import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function NewBeer(props) {
  const [state, setstate] = useState();

  const handleAdd = (e) => {
    e.preventDefault();
    const {
      name,
      description,
      tagline,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    } = e.target;


    let newData = {
      name: name.value,
      description: description.value,
      tagline: tagline.value,
      first_brewed: first_brewed.value,
      brewers_tips: brewers_tips.value,
      attenuation_level: attenuation_level.value,
      contributed_by: contributed_by.value,
    };

    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', newData)
      .then((response) => {
        props.history.push('/');
       
      });
  };

  return (
    <>
      <h1>Create New Beer</h1>
      <form onSubmit={handleAdd}>
        <input name="name" type="text" placeholder="Enter name"></input>
        <input name="tagline" type="text" placeholder="Enter tagline"></input>

        <input
          name="description"
          type="text"
          placeholder="Enter description"
        ></input>
        <input
          name="first_brewed"
          type="text"
          placeholder="first brewed"
        ></input>
        <input
          name="brewers_tips"
          type="text"
          placeholder="Enter brewers tips"
        ></input>
        <input
          name="attenuation_level"
          type="number"
          placeholder="Enter attenuation_level"
        ></input>
        <input
          name="contributed_by"
          type="text"
          placeholder="Enter contributed_by"
        ></input>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
