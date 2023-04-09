import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import { useState } from "react";
import axios from "axios";

function NewBeer() {
  const navigate = useNavigate();
  const URL = "https://ih-beers-api2.herokuapp.com/beers";

  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setfirstBrewed] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState("");
  const [contributedBy, setContributedBy] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBeer = {
      name,
      tagline,
      description,
      first_Brewed: firstBrewed,
      attenuation_level: attenuationLevel,
      contributed_by: contributedBy,
    };

    axios
      .post(URL + "/new", newBeer)
      .then((response) => {
        setName("");
        setTagline("");
        setDescription("");
        setfirstBrewed("");
        setAttenuationLevel("");
        setContributedBy("");
        navigate("/beers");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <NavBar />
      <h1>New Beer</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <br />
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <br />

        <label>
          Tagline:
          <br />
          <input
            type="text"
            name="tagline"
            value={tagline}
            onChange={(e) => {
              setTagline(e.target.value);
            }}
          />
        </label>
        <br />

        <label>
          Description:
          <br />
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </label>
        <br />

        <label>
          First Brewed:
          <br />
          <input
            type="text"
            name="first_Brewed"
            value={firstBrewed}
            onChange={(e) => {
              setfirstBrewed(e.target.value);
            }}
          />
        </label>
        <br />

        <label>
          Attenuation level:
          <br />
          <input
            type="number"
            name="attenuationLevel"
            value={attenuationLevel}
            onChange={(e) => {
              setAttenuationLevel(e.target.value);
            }}
          />
        </label>
        <br />

        <label>
          Contributed by:
          <br />
          <input
            type="text"
            name="contributedBy"
            value={contributedBy}
            onChange={(e) => {
              setContributedBy(e.target.value);
            }}
          />
        </label>
        <br />

        <button>Add a new Beer</button>
      </form>
    </div>
  );
}

export default NewBeer;
