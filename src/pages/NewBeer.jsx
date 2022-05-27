import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewBeer() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirst_brewed] = useState("");
  const [brewers_tip, setBrewers_tip] = useState("");
  const [attenuation_level, setAttenuation_level] = useState(0);
  const [contributed_by, setContributed_by] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleTagline = (e) => setTagline(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleFirst_brewed = (e) => setFirst_brewed(e.target.value);
  const handleBrewers_tip = (e) => setBrewers_tip(e.target.value);
  const handleAttenuation_level = (e) => setAttenuation_level(e.target.value);
  const handleContributed_by = (e) => setContributed_by(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tip,
      attenuation_level,
      contributed_by,
    };
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
      .then(() => {
        setName("");
        setTagline("");
        setDescription("");
        setFirst_brewed("");
        setBrewers_tip("");
        setAttenuation_level(0);
        setContributed_by("");
        navigate("/beers");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h3>Add Beer</h3>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          onChange={handleName}
          value={name}
          placeholder="Beer's name"
        />
        <input
          type='text'
          name='tagline'
          onChange={handleTagline}
          value={tagline}
          placeholder="Beer's tagline"
        />
        <textarea
          name='description'
          placeholder="Beer's description"
          value={description}
          cols='30'
          rows='10'
          onChange={handleDescription}></textarea>
        <input
          type='text'
          name='first_brewed'
          onChange={handleFirst_brewed}
          value={first_brewed}
          placeholder='When was it first brewed?'
        />
        <input
          type='text'
          name='brewers_tip'
          onChange={handleBrewers_tip}
          value={brewers_tip}
          placeholder='Any brewing tips?'
        />
        <input
          type='number'
          name='attenuation_level'
          onChange={handleAttenuation_level}
          value={attenuation_level}
          placeholder='Attenuation level?'
        />
        <input
          type='text'
          name='contributed_by'
          onChange={handleContributed_by}
          value={contributed_by}
          placeholder='Say your name, say your name!'
        />
        <button type='submit'>Create</button>
      </form>
    </div>
  );
}

export default NewBeer;
