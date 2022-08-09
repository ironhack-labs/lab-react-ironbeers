import { React, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewBeer = () => {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewerTips, setBrewerTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios({
      method: "POST",
      url: "https://ih-beers-api2.herokuapp.com/beers/new",
      data: {
        name: name,
        tagline: tagline,
        description: description,
        first_brewed: firstBrewed,
        brewer_tips: brewerTips,
        attenuation_level: attenuationLevel,
        contributed_by: contributedBy,
      },
    }).then((res) => {
      console.log("res.data", res.data);

      // clear the form
      setName("");
      setTagline("");
      setDescription("");
      setFirstBrewed("");
      setBrewerTips("");
      setAttenuationLevel(0);
      setContributedBy("");

      navigate("/");
    });
  };

  return (
    <div>
      <Header />
      <h2>Add a new beer</h2>
      <form onSubmit={handleSubmit} className="form">
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />

        <label>Tagline</label>
        <input
          type="text"
          name="tagline"
          onChange={(e) => setTagline(e.target.value)}
          value={tagline}
        />

        <label>Description</label>
        <input
          type="text"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />

        <label>Date of first brew</label>
        <input
          type="text"
          name="firstBrewed"
          onChange={(e) => setFirstBrewed(e.target.value)}
          value={firstBrewed}
        />

        <label>Brewer tips</label>
        <input
          type="text"
          name="brewer tips"
          onChange={(e) => setBrewerTips(e.target.value)}
          value={brewerTips}
        />

        <label>Attenuation level</label>
        <input
          type="number"
          name="attenuationLevel"
          onChange={(e) => setAttenuationLevel(e.target.value)}
          value={attenuationLevel}
        />

        <label>Contributed by</label>
        <input
          type="text"
          name="contributedBy"
          onChange={(e) => setContributedBy(e.target.value)}
          value={contributedBy}
        />

        <button type="submit">ADD NEW BEER!</button>
      </form>
    </div>
  );
};

export default NewBeer;
