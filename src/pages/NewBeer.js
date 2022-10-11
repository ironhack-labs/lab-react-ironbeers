import axios from "axios";
import React, { useState } from "react";

const NewBeer = () => {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setfirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setcontributedBy] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleTagline = (e) => {
    setTagline(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleFirstBrewed = (e) => {
    setfirstBrewed(e.target.value);
  };
  const handleBrewersTips = (e) => {
    setBrewersTips(e.target.value);
  };
  const handleAttenuationLevel = (e) => {
    setAttenuationLevel(e.target.value);
  };
  const handleContributedBy = (e) => {
    setcontributedBy(e.target.value);
  };

  const sendData = (e) => {
    e.preventDefault();
    const body = {
      name,
      tagline,
      first_brewed: firstBrewed,
      attenuation_level: attenuationLevel,
      description,
      contributed_by: contributedBy,
      brewers_tips: brewersTips,
    };

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  return (
    <form
      onSubmit={sendData}
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "60%",
        margin: "20px auto",
      }}
    >
      <label htmlFor="name">Name: </label>
      <input value={name} onChange={handleName} type="text" id="name"></input>

      <label htmlFor="tagline">Tagline: </label>
      <input
        value={tagline}
        onChange={handleTagline}
        type="text"
        id="tagline"
      ></input>

      <label htmlFor="description">Description: </label>
      <input
        value={description}
        onChange={handleDescription}
        type="text"
        id="description"
      ></input>

      <label htmlFor="first_brewed">First Brewed: </label>
      <input
        value={firstBrewed}
        onChange={handleFirstBrewed}
        type="text"
        id="first_brewed"
      ></input>

      <label htmlFor="brewers_tips ">Brewers Tips: </label>
      <input
        value={brewersTips}
        onChange={handleBrewersTips}
        type="text"
        id="brewers_tips"
      ></input>

      <label htmlFor="attenuation_level">Attenuation Level: </label>
      <input
        value={attenuationLevel}
        onChange={handleAttenuationLevel}
        type="number"
        id="attenuation_level"
      ></input>

      <label htmlFor="contributed_by ">Conttributed by: </label>
      <input
        value={contributedBy}
        onChange={handleContributedBy}
        type="text"
        id="contributed_by "
      ></input>

      <button
        style={{
          marginTop: "20px",
          color: "white",
          backgroundColor: "#1C8ADB",
        }}
        type="submit"
      >
        Sumbit
      </button>
    </form>
  );
};

export default NewBeer;
