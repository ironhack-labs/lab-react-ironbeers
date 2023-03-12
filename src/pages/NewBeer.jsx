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
  const newBeerInfo = {
    name,
    tagline,
    description,
    firstBrewed,
    brewerTips,
    // Need to turn string into number. Can also use Number()
    attenuation: parseInt(attenuation),
    contributedBy,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
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
        <label htmlFor="">
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="">
          Tagline
          <input
            type="text"
            value={tagline}
            onChange={(e) => {
              setTagline(e.target.value);
            }}
          />
        </label>

        <label htmlFor="">
          Description
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        <label htmlFor="">
          First Brewed
          <input
            type="text"
            value={firstBrewed}
            onChange={(e) => setFirstBrewed(e.target.value)}
          />
        </label>

        <label htmlFor="">
          Brewers Tips
          <input
            type="text"
            value={brewerTips}
            onChange={(e) => setBrewersTips(e.target.value)}
          />
        </label>

        <label htmlFor="">
          Attenuation Level
          <input
            type="text"
            value={attenuation}
            onChange={(e) => setAttenuation(e.target.value)}
          />
        </label>

        <label htmlFor="">
          Contributed By
          <input
            type="text"
            value={contributedBy}
            onChange={(e) => setContributedBy(e.target.value)}
          />
        </label>

        <button>Add New Beer</button>
      </form>
    </div>
  );
}

export default NewBeer;
