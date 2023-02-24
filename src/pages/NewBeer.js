import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewBeer() {
  const [name, setName] = React.useState("");
  const [tagline, setTagline] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [first_brewed, setFirstBrewed] = React.useState("");
  const [brewers_tips, setBrewersTips] = React.useState("");
  const [attenuation_level, setAttenuationLevel] = React.useState(0);
  const [contributed_by, setContributedBy] = React.useState("");

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const newBeer = {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    };

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
      .then((response) => {
        setName("");
        setTagline("");
        setDescription("");
        setFirstBrewed("");
        setBrewersTips("");
        setAttenuationLevel(0);
        setContributedBy("");

        navigate("/beers");
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="new-beer-form">
      <h1>Add a new beer</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <label htmlFor="tagline">Tagline</label>
        <input
          type="text"
          name="tagline"
          id="tagline"
          value={tagline}
          onChange={(event) => setTagline(event.target.value)}
        />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <label htmlFor="first_brewed">First brewed</label>
        <input
          type="text"
          name="first_brewed"
          id="first_brewed"
          value={first_brewed}
          onChange={(event) => setFirstBrewed(event.target.value)}
        />

        <label htmlFor="brewers_tips">Brewer's tips</label>
        <input
          type="text"
          name="brewers_tips"
          id="brewers_tips"
          value={brewers_tips}
          onChange={(event) => setBrewersTips(event.target.value)}
        />

        <label htmlFor="attenuation_level">Attenuation level</label>
        <input
          type="number"
          name="attenuation_level"
          id="attenuation_level"
          value={attenuation_level}
          onChange={(event) => setAttenuationLevel(event.target.value)}
        />

        <label htmlFor="contributed_by">Contributed by</label>
        <input
          type="text"
          name="contributed_by"
          id="contributed_by"
          value={contributed_by}
          onChange={(event) => setContributedBy(event.target.value)}
        />

        <button type="submit">Add a new beer</button>
      </form>
    </div>
  );
}

export default NewBeer;
