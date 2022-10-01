import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export default function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirst_brewed] = useState("");
  const [brewers_tips, setBrewers_tips] = useState("");
  const [attenuation_level, setAttenuation_level] = useState("");
  const [contributed_by, setContributed_by] = useState("");

  const updateName = (e) => setName(e.target.value);
  const updateTagline = (e) => setTagline(e.target.value);
  const updateDescription = (e) => setDescription(e.target.value);
  const updateFirst_brewed = (e) => setFirst_brewed(e.target.value);
  const updateBrewers_tips = (e) => setBrewers_tips(e.target.value);
  const updateAttenuation_level = (e) => setAttenuation_level(e.target.value);
  const updateContributed_by = (e) => setContributed_by(e.target.value);

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    const bodyObject = {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: first_brewed,
      brewers_tips: brewers_tips,
      attenuation_level: attenuation_level,
      contributed_by: contributed_by,
    };

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", bodyObject)
      .then((res) => {
        console.log(res.data);
        navigate("/beers");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Header />
      <form onSubmit={submitForm}>
        <div className="form-container">
          <label>Name</label>
          <input type="text" value={name} onChange={updateName}></input>
        </div>
        <div className="form-container">
          <label>Tagline</label>
          <input type="text" value={tagline} onChange={updateTagline}></input>
        </div>
        <div className="form-container">
          <label>Description</label>
          <input
            type="text"
            value={description}
            onChange={updateDescription}
          ></input>
        </div>
        <div className="form-container">
          <label>First Brewed</label>
          <input
            type="text"
            value={first_brewed}
            onChange={updateFirst_brewed}
          ></input>
        </div>
        <div className="form-container">
          <label>Brewers Tips</label>
          <input
            type="text"
            value={brewers_tips}
            onChange={updateBrewers_tips}
          ></input>
        </div>
        <div className="form-container">
          <label>Attenuation Level</label>
          <input
            type="text"
            value={attenuation_level}
            onChange={updateAttenuation_level}
          ></input>
        </div>
        <div className="form-container">
          <label>Contributed By</label>
          <input
            type="text"
            value={contributed_by}
            onChange={updateContributed_by}
          ></input>
        </div>
        <button>Create New Beer</button>
      </form>
    </div>
  );
}
