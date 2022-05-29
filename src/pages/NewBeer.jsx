import axios from "axios";
import React, { useState } from "react";
import Navbar from "../components/Navbar";

function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

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
      firstBrewed,
      brewersTips,
      attenuationLevel,
      contributedBy,
    };

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
      .then(() => {
        setName("");
        setTagline("");
        setDescription("");
        setFirstBrewed("");
        setBrewersTips("");
        setAttenuationLevel(0);
        setContributedBy("");
        alert("New beer created");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navbar />
      <h2>Add a new Beer</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">name</label>
        <input type="text" name="name" value={name} onChange={handleName} />

        <label htmlFor="tagline">tagline</label>
        <input
          type="text"
          name="tagline"
          value={tagline}
          onChange={handleTagline}
        />

        <label htmlFor="description">description</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={handleDescription}
        />

        <label htmlFor="firstbrewed">firstbrewed</label>
        <input
          type="text"
          name="firstbrewed"
          value={firstBrewed}
          onChange={handleFirstBrewed}
        />

        <label htmlFor="brewerstips">brewerstips</label>
        <input
          type="text"
          name="brewerstips"
          value={brewersTips}
          onChange={handleBrewersTips}
        />

        <label htmlFor="attenuationlevel">attenuationlevel</label>
        <input
          type="number"
          name="attenuationlevel"
          value={attenuationLevel}
          onChange={handleAttenuationLevel}
        />

        <label htmlFor="contributedby">contributedby</label>
        <input
          type="text"
          name="contributedby"
          value={contributedBy}
          onChange={handleContributedBy}
        />

        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
}

export default NewBeer;
