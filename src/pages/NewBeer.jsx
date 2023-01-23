import axios from "axios";
import { useState } from "react";

export default function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  function handleSubmit(e) {
    e.preventDefaulth();
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", {
        name: name,
        tagline: tagline,
        description: description,
        first_brewed: firstBrewed,
        brewers_tips: brewersTips,
        attenuation_level: Number(attenuationLevel),
        contributed_by: contributedBy,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    return;
  }

  return (
    <div className="flex column">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label htmlFor="tagline">Tagline</label>
        <input
          name="tagline"
          type="text"
          value={tagline}
          onChange={(e) => {
            setTagline(e.target.value);
          }}
        />
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          type="text"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <label htmlFor="first_brewed">First brewed</label>
        <input
          name="first_brewed"
          type="text"
          value={firstBrewed}
          onChange={(e) => {
            setFirstBrewed(e.target.value);
          }}
        />
        <label htmlFor="brewers_tips">Brewers tips</label>
        <input
          name="brewers_tips"
          type="text"
          value={brewersTips}
          onChange={(e) => {
            setBrewersTips(e.target.value);
          }}
        />
        <label htmlFor="attenuation_level">Attenuation level</label>
        <input
          name="attenuation_level"
          type="number"
          value={attenuationLevel}
          onChange={(e) => {
            setAttenuationLevel(e.target.value);
          }}
        />
        <label htmlFor="brewers_tips">Contributed by</label>
        <input
          name="contributed_by"
          type="text"
          value={contributedBy}
          onChange={(e) => {
            setContributedBy(e.target.value);
          }}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
