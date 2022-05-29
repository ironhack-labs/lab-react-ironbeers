import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

function NewBeer() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewerTips, setBrewerTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(1);
  const [contributedBy, setContributedBy] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleTagLine = (e) => {
    setTagline(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleFirstBrewed = (e) => {
    setFirstBrewed(e.target.value);
  };
  const handleBrewerTips = (e) => {
    setBrewerTips(e.target.value);
  };
  const handleAttenuationLevel = (e) => {
    setAttenuationLevel(e.target.value);
  };
  const handlecontributedBy = (e) => {
    setContributedBy(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      name,
      tagline,
      description,
      firstBrewed,
      brewerTips,
      attenuationLevel,
      contributedBy,
    };
    console.log(body);
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
      .then((response) => {
        console.log(response);
        setName("");
        setTagline("");
        setDescription("");
        setFirstBrewed("");
        setBrewerTips("");
        setAttenuationLevel(1);
        setContributedBy("");
        navigate("/beers");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="newBeer">
      <NavBar />

      <form onSubmit={handleSubmit} className="newBeerForm">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={name} onChange={handleName} />

        <label htmlFor="tagline">Tagline:</label>
        <input
          type="text"
          name="tagline"
          value={tagline}
          onChange={handleTagLine}
        />

        <label htmlFor="description">Description:</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={handleDescription}
        />

        <label htmlFor="firstBrewed">First Brewed:</label>
        <input
          type="text"
          name="firstBrewed"
          value={firstBrewed}
          onChange={handleFirstBrewed}
        />

        <label htmlFor="brewerTips">Brewer Tips</label>
        <input
          type="text"
          name="brewerTips"
          value={brewerTips}
          onChange={handleBrewerTips}
        />

        <label htmlFor="attenuationLevel">Attenuation level:</label>
        <input
          type="number"
          name="attenuationLevel"
          value={attenuationLevel}
          onChange={handleAttenuationLevel}
        />

        <label htmlFor="contributedBy">Contributed by:</label>
        <input
          type="text"
          name="contributedBy"
          value={contributedBy}
          onChange={handlecontributedBy}
        />

        <button type="submit">Create new Beer</button>
      </form>
    </div>
  );
}

export default NewBeer;
