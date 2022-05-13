import Header from "./Header";
import { useState } from "react";
import axios from "axios";

function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState("");
  const [contributedBy, setContributedBy] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const details = {
      name,
      tagline,
      description,
      firstBrewed,
      brewersTips,
      attenuationLevel,
      contributedBy,
    };
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", details)
      .then((response) => {
        console.log(response.data);
        setName("");
        setTagline("");
        setDescription("");
        setFirstBrewed("");
        setBrewersTips("");
        setAttenuationLevel("");
        setContributedBy("");
      });
  };

  return (
    <section className="">
      <Header />
      <h1>Create a new Beer</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Tagline
          <input
            type="text"
            name="tagline"
            value={tagline}
            onChange={(e) => setTagline(e.target.value)}
          />
        </label>

        <label>
          Description
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        <label>
          First Brewed
          <input
            type="text"
            name="firstBrewed"
            value={firstBrewed}
            onChange={(e) => setFirstBrewed(e.target.value)}
          />
        </label>

        <label>
          Brewers Tips
          <input
            type="text"
            name="brewersTips"
            value={brewersTips}
            onChange={(e) => setBrewersTips(e.target.value)}
          />
        </label>

        <label>
          Attenuation Level
          <input
            type="number"
            min={0}
            name="attenuationLevel"
            value={attenuationLevel}
            onChange={(e) => setAttenuationLevel(e.target.value)}
          />
        </label>

        <label>
          Contributed by
          <input
            type="text"
            name="contributedBy"
            value={contributedBy}
            onChange={(e) => setContributedBy(e.target.value)}
          />
        </label>

        <button type="submit">Create New Beer</button>
      </form>
    </section>
  );
}

export default NewBeer;
