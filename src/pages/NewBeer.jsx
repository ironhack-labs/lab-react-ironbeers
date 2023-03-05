import Header from "../components/Header";

import { useState } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";

function NewBeer() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [tagLine, setTagLine] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleTagLineChange = (event) => {
    setTagLine(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleFirstBrewedChange = (event) => {
    setFirstBrewed(event.target.value);
  };

  const handleBrewersTips = (event) => {
    setBrewersTips(event.target.value);
  };

  const handleAttenuationLevel = (event) => {
    setAttenuationLevel(event.target.value);
  };

  const handleContributedByChange = (event) => {
    setContributedBy(event.target.value);
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    const newBeer = {
      name: name,
      tagLine: tagLine,
      description: description,
      firstBrewed: firstBrewed,
      brewersTips: brewersTips,
      attenuationLevel: attenuationLevel,
      contributedBy: contributedBy,
    };

    try {
      await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        newBeer
      );
      navigate("/beers");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Header />
      <form action="">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" onChange={handleNameChange} />
        <br />
        <label htmlFor="tagline">Tag line:</label>
        <input type="text" name="tagline" onChange={handleTagLineChange} />
        <br />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          name="description"
          onChange={handleDescriptionChange}
        />
        <br />
        <label htmlFor="first-brewed">First brewed:</label>
        <input
          type="text"
          name="first-brewed"
          onChange={handleFirstBrewedChange}
        />
        <br />
        <label htmlFor="brewers-tips">Brewers tips:</label>
        <input type="text" name="brewers-tips" onChange={handleBrewersTips} />
        <br />
        <label htmlFor="attenuation-level">Attenuation level:</label>
        <input
          type="number"
          name="attenuation-level"
          onChange={handleAttenuationLevel}
        />
        <br />
        <label htmlFor="contributed-by">Contributed by:</label>
        <input
          type="text"
          name="contributed-by"
          onChange={handleContributedByChange}
        />
        <br />
        <button onClick={handleSubmitForm}>Add</button>
      </form>
    </div>
  );
}

export default NewBeer;
