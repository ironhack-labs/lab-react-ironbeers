import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function BeerCreate(props) {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirstBrewed] = useState("");
  const [brewers_tips, setBrewersTips] = useState("");
  const [attenuation_level, setAttenuationLevel] = useState(0);
  const [contributed_by, setContributedBy] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleTagline = (e) => setTagline(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleFirstBrewed = (e) => setFirstBrewed(e.target.value);
  const handleBrewersTips = (e) => setBrewersTips(e.target.value);
  const handleAttenuationLevel = (e) => setAttenuationLevel(e.target.value);
  const handleContributedBy = (e) => setContributedBy(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    };
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
      .then(() => {
        setName("");
        setTagline("");
        setDescription("");
        setFirstBrewed("");
        setBrewersTips("");
        setAttenuationLevel("");
        setContributedBy("");
        props.refreshProjects();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <Navbar />
      <form className="contact" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={name} onChange={handleName} />

        <label htmlFor="tagline">Tagline:</label>
        <input
          type="text"
          name="tagline"
          value={tagline}
          onChange={handleTagline}
        />
        <label htmlFor="description">Description:</label>
        <textarea
          type="text"
          name="description"
          cols={30}
          rows={10}
          value={description}
          onChange={handleDescription}
        />
        <label htmlFor="firstBrewed">First Brewed:</label>
        <input
          type="text"
          name="firstBrewed"
          value={first_brewed}
          onChange={handleFirstBrewed}
        />
        <label htmlFor="brewersTips">Brewers Tips:</label>
        <input
          type="text"
          name="brewersTips"
          value={brewers_tips}
          onChange={handleBrewersTips}
        />
        <label htmlFor="attenuationLevel">Attenuation Level:</label>
        <input
          type="number"
          name="attenuationLevel"
          value={attenuation_level}
          onChange={handleAttenuationLevel}
        />
        <label htmlFor="contributedBy">Contributed By:</label>
        <input
          type="text"
          name="contributedBy"
          value={contributed_by}
          onChange={handleContributedBy}
        />

        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default BeerCreate;
