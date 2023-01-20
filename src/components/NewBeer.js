import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function NewBeer() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setfirstBrewed] = useState("");
  const [brewersTips, setbrewersTips] = useState("");
  const [attenuationLevel, setattenuationLevel] = useState(0);
  const [contributedBy, setcontributedBy] = useState(0);

  const newBeer = {
    name: name,
    tagline: tagline,
    description: description,
    firstBrewed: firstBrewed,
    brewersTips: brewersTips,
    attenuationLevel: attenuationLevel,
    contributedBy: contributedBy,
  };

  const createNewBeer = (e) => {
    e.preventDefault();
    console.log(newBeer);
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
      .then((response) => {
        console.log(response);
        // navigate("/beers");
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <Header />

      <h2>Create a new Beer! </h2>
      <form onSubmit={createNewBeer}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <label>
          Tagline:
          <input
            type="text"
            name="tagline"
            onChange={(e) => {
              setTagline(e.target.value);
            }}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </label>
        <label>
          First Brewed:
          <input
            type="text"
            name="firstBrewed"
            onChange={(e) => {
              setfirstBrewed(e.target.value);
            }}
          />
        </label>
        <label>
          Brewers Tips:
          <input
            type="text"
            name="brewersTips"
            onChange={(e) => {
              setbrewersTips(e.target.value);
            }}
          />
        </label>
        <label>
          Attenuation Level:
          <input
            type="number"
            name="attenuationLevel"
            onChange={(e) => {
              setattenuationLevel(e.target.value);
            }}
          />
        </label>
        <label>
          Contributed By:
          <input
            type="text"
            name="contributedBy"
            onChange={(e) => {
              setcontributedBy(e.target.value);
            }}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default NewBeer;
