import React from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function NewBeer() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirst_Brewed] = useState("");
  const [attenuation_level, setAttenuation_level] = useState(0);
  const [contributed_by, setContributed_by] = useState("");
  const [brewers_tips, setBrewers_Tips] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleTagline = (e) => setTagline(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleFirst_Brewed = (e) => setFirst_Brewed(e.target.value);
  const handleAttenuation_level = (e) =>
    setAttenuation_level(Number(e.target.value));
  const handleContributed_by = (e) => setContributed_by(e.target.value);
  const handleBrewers_Tips = (e) => setBrewers_Tips(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBeer = {
      name,
      tagline,
      description,
      first_brewed,
      attenuation_level,
      contributed_by,
      brewers_tips,
    };

    try {
      await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        newBeer
      );
      navigate("/");
      alert("Submitted with success");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <section>
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
            value={description}
            cols="30"
            rows="10"
            onChange={handleDescription}
          ></textarea>
          <label htmlFor="first_brewed">First Brewed</label>
          <input
            type="text"
            name="first_brewed"
            value={first_brewed}
            onChange={handleFirst_Brewed}
          />
          <label htmlFor="brewers_tips">Brewers Tips</label>
          <input
            type="text"
            name="brewers_tips"
            value={brewers_tips}
            onChange={handleBrewers_Tips}
          />
          <label htmlFor="attenuation_level">Attenuation Level</label>
          <input
            type="number"
            name="attenuation_level"
            value={attenuation_level}
            onChange={handleAttenuation_level}
          />
          <label htmlFor="contributed_by">Contributed By</label>
          <input
            type="text"
            name="contributed_by"
            value={contributed_by}
            onChange={handleContributed_by}
          />
          <button type="submit">Create new Beer</button>
        </form>
      </section>
    </div>
  );
}

export default NewBeer;
