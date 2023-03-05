import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import homepage from "../assets/homepage.png";

function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewedTips, setBrewedTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState("");
  const [contributedBy, setContributedBy] = useState("");

  const navigate = useNavigate();

  const handleName = (e) => setName(e.target.value);
  const handleTagline = (e) => setTagline(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleFirstBrewer = (e) => setFirstBrewed(e.target.value);
  const handleBrewedTips = (e) => setBrewedTips(e.target.value);
  const handleAttenuationLevel = (e) => setAttenuationLevel(Number(e.target.value));
  const handleContributedBy = (e) => setContributedBy(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBeer = {
      name,
      tagline,
      description,
      first_brewed: firstBrewed,
      brewers_tips: brewedTips,
      attenuation_level: attenuationLevel,
      contributed_by: contributedBy,
    };

    try {
      await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        newBeer
      );

      navigate("/beers");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <nav className="nav-bar">
        <Link to="/">
          <img src={homepage} alt="" />
        </Link>
      </nav>
      <h3>Add a new Beer</h3>

      <form onSubmit={handleSubmit}>
        <div className="form-flex">
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
          <input
            type="text"
            name="description"
            value={description}
            onChange={handleDescription}
          />
          <label htmlFor="firstBrewed">First Brewed</label>
          <input
            type="text"
            name="firstBrewed"
            value={firstBrewed}
            onChange={handleFirstBrewer}
          />
          <label htmlFor="brewersTips">Brewed Tips</label>
          <input
            type="text"
            name="brewersTips"
            value={brewedTips}
            onChange={handleBrewedTips}
          />
          <label htmlFor="attenuationLevel">Attenuation Level</label>
          <input
            type="text"
            name="attenuationLevel"
            value={attenuationLevel}
            onChange={handleAttenuationLevel}
          />
          <label htmlFor="contributedBy">Contributed By</label>
          <input
            type="text"
            name="contributedBy"
            value={contributedBy}
            onChange={handleContributedBy}
          />
          <button type="submit">ADD NEW</button>
        </div>
      </form>
    </div>
  );
}

export default NewBeer;
