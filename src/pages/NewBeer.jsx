import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewerTips, setBrewersTips] = useState("");
  const [attenuation, setAttenuation] = useState("");
  const [contributedBy, setContributedBy] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBeerInfo = {
      name,
      tagline,
      description,
      firstBrewed,
      brewerTips,
      // Need to turn string into number. Can use Number() or parse
      attenuation: parseInt(attenuation),
      contributedBy,
    };
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", newBeerInfo)
      .then(() => {
        setName("");
        setTagline("");
        setDescription("");
        setFirstBrewed("");
        setBrewersTips("");
        setAttenuation("");
        setContributedBy("");
        alert("New Beer Submitted! Cheers!");
        navigate("/beers");
      })
      .catch((error) => console.log("Error submitting new beer", error));
  };

  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <h1>New Beer</h1>
      <form action="" onClick={handleSubmit}>
        <div className="form-elements">
          <label htmlFor="">Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-elements">
          <label htmlFor="">Tagline: </label>
          <input
            type="text"
            value={tagline}
            onChange={(e) => {
              setTagline(e.target.value);
            }}
          />
        </div>
        <div className="form-elements">
          <label htmlFor="">Description: </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-elements">
          <label htmlFor="">First Brewed: </label>
          <input
            type="text"
            value={firstBrewed}
            onChange={(e) => setFirstBrewed(e.target.value)}
          />
        </div>
        <div className="form-elements">
          <label htmlFor="">Brewers Tips: </label>
          <input
            type="text"
            value={brewerTips}
            onChange={(e) => setBrewersTips(e.target.value)}
          />
        </div>
        <div className="form-elements">
          <label htmlFor="">Attenuation Level: </label>
          <input
            type="text"
            value={attenuation}
            onChange={(e) => setAttenuation(e.target.value)}
          />
        </div>
        <div className="form-elements">
          <label htmlFor="">Contributed By: </label>
          <input
            type="text"
            value={contributedBy}
            onChange={(e) => setContributedBy(e.target.value)}
          />
        </div>
        <button id="new-beer-btn">Add New Beer</button>
      </form>
    </div>
  );
}

export default NewBeer;
