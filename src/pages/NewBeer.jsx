import React, { useState } from "react";
import axios from "axios";
import Header from "../components/Header";

function NewBeer(props) {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState("");
  const [contributedBy, setContributedBy] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleTagline = (e) => setTagline(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleFirstBrewed = (e) => setFirstBrewed(e.target.value);
  const handlebrewersTips = (e) => setBrewersTips(e.target.value);
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

        props.refreshBeers();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Header />
      <h1>Add Beer</h1>
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

        <label htmlFor="firstBrewed">First brewed</label>
        <input
          type="text"
          name="firstBrewed"
          value={firstBrewed}
          onChange={handleFirstBrewed}
        />

        <label htmlFor="brewersTips">Brewers tips</label>
        <input
          type="text"
          name="brewersTips"
          value={brewersTips}
          onChange={handlebrewersTips}
        />

        <label htmlFor="attenuationLevel">Attenuation level</label>
        <input
          type="number"
          name="attenuationLevel"
          value={attenuationLevel}
          onChange={handleAttenuationLevel}
        />

        <label htmlFor="contributedBy">contributed by</label>
        <input
          type="text"
          name="contributedBy"
          value={contributedBy}
          onChange={handleContributedBy}
        />

        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
}

export default NewBeer;
