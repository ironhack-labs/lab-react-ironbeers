import React from "react";
import Header from "./Header";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setfirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState("");
  const [contributedBy, setContributedBy] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const beerDetails = {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation_level: attenuationLevel,
      contributed_by: contributedBy,
    };

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", beerDetails)
      .then(() => {
        navigate("/beers");
      })
      .catch((error) => {
        console.log("error creating new beer:", error);
      });
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeTagline = (e) => {
    setTagline(e.target.value);
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const onChangeFirstBrewed = (e) => {
    setfirstBrewed(e.target.value);
  };

  const onChangeBrewersTips = (e) => {
    setBrewersTips(e.target.value);
  };

  const onChangeAttenuationLevel = (e) => {
    setAttenuationLevel(e.target.value);
  };

  const onChangeContributedBy = (e) => {
    setContributedBy(e.target.value);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}></Route>
      </Routes>

      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={onChangeName}
            />
          </label>{" "}
          <br />
          <label>
            Tagline:
            <input
              type="text"
              name="tagline"
              value={tagline}
              onChange={onChangeTagline}
            />
          </label>
          <br />
          <label>
            Description:
            <input
              type="text"
              name="description"
              value={description}
              onChange={onChangeDescription}
            />
          </label>
          <br />
          <label>
            First Brewed:
            <input
              type="text"
              name="firstBrewed"
              value={firstBrewed}
              onChange={onChangeFirstBrewed}
            />
          </label>
          <br />
          <label>
            Brewer's Tips:
            <input
              type="text"
              name="brewersTips"
              value={brewersTips}
              onChange={onChangeBrewersTips}
            />
          </label>
          <br />
          <label>
            Attenuation Level:
            <input
              type="number"
              min={0}
              name="attenuationLevel"
              value={attenuationLevel}
              onChange={onChangeAttenuationLevel}
            />
          </label>
          <br />
          <label>
            Contributed By:
            <input
              type="text"
              name="contributedBy"
              value={contributedBy}
              onChange={onChangeContributedBy}
            />
          </label>
          <br />
          <button type="submit">Add New Beer</button>
        </form>
      </div>
    </>
  );
}
