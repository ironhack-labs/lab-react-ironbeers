import React from "react";
import Header from "./../components/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const APIURL = "https://ih-beers-api2.herokuapp.com/beers/";

function AddBeerPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState("");
  const [contributedBy, setContributedBy] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };
  const handleTagline = (event) => {
    setTagline(event.target.value);
  };
  const handleDescription = (event) => {
    setDescription(event.target.value);
  };
  const handleFirstBrewed = (event) => {
    setFirstBrewed(event.target.value);
  };
  const handleBrewersTips = (event) => {
    setBrewersTips(event.target.value);
  };
  const handleAttenuationLevel = (event) => {
    setAttenuationLevel(event.target.value);
  };
  const handleCountributedBy = (event) => {
    setContributedBy(event.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const newBeer = {
        name,
        tagline,
        description,
        first_brewed: firstBrewed,
        brewers_tips: brewersTips,
        attenuation_level: attenuationLevel,
        contributed_by: contributedBy,
      };

      const requestStatus = await axios.post(APIURL + "new", newBeer);

      setName("");
      setTagline("");
      setDescription("");
      setFirstBrewed("");
      setBrewersTips("");
      setAttenuationLevel(0);
      setContributedBy("");

      console.log(requestStatus);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <label>Name of the beer</label>
        <input type="text" name="name" value={name} onChange={handleName} />

        <label>Your best tagline</label>
        <input
          type="text"
          name="tagline"
          value={tagline}
          onChange={handleTagline}
        />

        <label>Description </label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={handleDescription}
        />

        <label>When was it first brewed? </label>
        <input
          type="text"
          name="firstBrewed"
          value={firstBrewed}
          onChange={handleFirstBrewed}
        />

        <label>Any brewing tips?</label>
        <input
          type="text"
          name="brewersTips"
          value={brewersTips}
          onChange={handleBrewersTips}
        />

        <label>Attenuation level?</label>
        <input
          type="number"
          name="attenuationLevel"
          value={attenuationLevel}
          onChange={handleAttenuationLevel}
        />

        <label>Who created it? </label>
        <input
          type="text"
          name="contributedBy"
          value={contributedBy}
          onChange={handleCountributedBy}
        />

        <button type="submit">Create beer</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
