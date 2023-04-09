import { useState } from "react";
import axios from "axios";

import Header from "./Header";

function CreateBeer() {
  const baseURL = "https://ih-beers-api2.herokuapp.com";

  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState("");
  const [contributedBy, setContributedBy] = useState("");

  const handleSubmit = (element) => {
    element.preventDefault();

    const newBeer = {
      name: name,
      tagline: tagline,
      first_brewed: firstBrewed,
      description: description,
      attenuation_level: attenuationLevel,
      brewers_tips: brewersTips,
      contributed_by: contributedBy,
    };
    axios.post(baseURL + "/beers/new", newBeer).then((res) => {});
  };

  return (
    <>
      <Header />
      <div>
        <h1>Create a New Apartment</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </label>
          <label>
            Tagline
            <input
              type="text"
              name="tagline"
              value={tagline}
              onChange={(e) => {
                setTagline(e.target.value);
              }}
            />
          </label>
          <label>
            Description
            <input
              type="text"
              name="description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </label>
          <label>
            First Brewed
            <input
              type="text"
              name="firstBrewed"
              required
              value={firstBrewed}
              onChange={(e) => {
                setFirstBrewed(e.target.value);
              }}
            />
          </label>
          <label>
            Brewers Tips
            <input
              type="text"
              name="brewersTips"
              value={brewersTips}
              onChange={(e) => {
                setBrewersTips(e.target.value);
              }}
            />
          </label>
          <label>
            Attenuation Level
            <input
              type="number"
              name="attenuationLevel"
              value={attenuationLevel}
              onChange={(e) => {
                setAttenuationLevel(e.target.value);
              }}
            />
          </label>
          <label>
            Contributed By
            <input
              type="text"
              name="contributedBy"
              required
              value={contributedBy}
              onChange={(e) => {
                setContributedBy(e.target.value);
              }}
            />
          </label>
          <button formAction="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default CreateBeer;
