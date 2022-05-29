import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function AddForm() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [brewers_tips, setBrewersTips] = useState("");
  const [first_brewed, setFisrtBrewed] = useState("");
  const [attenuation_level, setAttenuation] = useState(0);
  const [contributed_by, setContributed] = useState("");
  const handleName = (e) => setName(e.target.value);
  const handleTagline = (e) => setTagline(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleFirstBrewed = (e) => setFisrtBrewed(e.target.value);
  const handleBrewersTips = (e) => setBrewersTips(e.target.value);
  const handleAttenuation = (e) => setAttenuation(e.target.value);
  const handleContributed = (e) => setContributed(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      name,
      tagline,
      description,
      brewers_tips,
      first_brewed,
      attenuation_level,
      contributed_by,
    };

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
      .then(() => {
        setName("");
        setTagline("");
        setDescription("");
        setBrewersTips("");
        setFisrtBrewed("");
        setAttenuation("");
        setContributed("");
        navigate("/beers");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h3>Create new Beer</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={name} onChange={handleName} />
        <label htmlFor="tagline">Tagline</label>
        <input
          type="text"
          name="tagline"
          value={tagline}
          onChange={handleTagline}
        />
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          cols="30"
          rows="10"
          value={description}
          onChange={handleDescription}
        ></textarea>
        <label htmlFor="brewers_tips"> Brewers tips</label>
        <input
          type="text"
          name=" brewers_tips"
          value={brewers_tips}
          onChange={handleBrewersTips}
        />
        <label htmlFor="fisrtbrewed">Fisrt brewed</label>
        <input
          type="text"
          name="first_brewed"
          value={first_brewed}
          onChange={handleFirstBrewed}
        />
        <label htmlFor="attenuation_level ">Attenuation Level</label>
        <input
          type="number"
          name="attenuation_level "
          value={attenuation_level}
          onChange={handleAttenuation}
        />
        <label htmlFor="contributed_by">Contributed By</label>
        <input
          type="text"
          name="contributed_by"
          value={contributed_by}
          onChange={handleContributed}
        />
        <button type="submit">Add New</button>
      </form>
    </div>
  );
}

export default AddForm;
