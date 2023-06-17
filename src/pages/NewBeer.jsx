import { useState } from "react";
import axios from "axios";
import NavBar from "./components/NavBar";

function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  const submitHandler = (event) => {
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
    axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer);
    console.log("New product added", newBeer);

    setName("");
    setTagline("");
    setDescription("");
    setFirstBrewed("");
    setBrewersTips("");
    setAttenuationLevel(0);
    setContributedBy("");
  };

  return (
    <div>
      <NavBar />

      <form onSubmit={submitHandler}>
        <label>Name </label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <label>Tagline </label>
        <input
          name="tagline"
          type="text"
          value={tagline}
          onChange={(e) => {
            setTagline(e.target.value);
          }}
        />

        <label>Description  </label>
        <input
          name="description"
          type="text"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />

        <label>First Brewed  </label>
        <input
          name="first_brewed"
          type="text"
          value={firstBrewed}
          onChange={(e) => {
            setFirstBrewed(e.target.value);
          }}
        />

        <label>Brewers' Tips </label>
        <input
          name="brewers_tips"
          type="text"
          value={brewersTips}
          onChange={(e) => {
            setBrewersTips(e.target.value);
          }}
        />

        <label>Attenuation Level </label>
        <input
          name="attenuation_level"
          type="number"
          value={attenuationLevel}
          onChange={(e) => {
            setAttenuationLevel(e.target.value);
          }}
        />

        <label>Contributed By </label>
        <input
          name="contributed_by"
          type="text"
          value={contributedBy}
          onChange={(e) => {
            setContributedBy(e.target.value);
          }}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewBeer;
