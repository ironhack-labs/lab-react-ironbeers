import axios from "axios";
import { useState } from "react";
import Header from "./Header";

function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirst_brewed] = useState("");
  const [brewers_tips, setBrewers_tips] = useState("");
  const [attenuation_level, setAttenuation_level] = useState("");
  const [contributed_by, setContributed_by] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBeer = {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: first_brewed,
      brewers_tips: brewers_tips,
      attenuation_level: attenuation_level,
      contributed_by: contributed_by,
    };

    axios
      .post(process.env.REACT_APP_API_URL + "/new", newBeer)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Error creating beer to API", err);
      });

    setName("");
    setTagline("");
    setDescription("");
    setFirst_brewed("");
    setBrewers_tips("");
    setAttenuation_level("");
    setContributed_by("");
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="enter the beer name"
            value={name}
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
            placeholder="enter the tagline"
            value={tagline}
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
            placeholder="enter the description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </label>

        <label>
          First brewed:
          <input
            type="text"
            name="first_brewed"
            placeholder="enter the first brewed information"
            value={first_brewed}
            onChange={(e) => {
              setFirst_brewed(e.target.value);
            }}
          />
        </label>

        <label>
          Brewers tips:
          <input
            type="text"
            name="brewers_tips"
            placeholder="enter the brewers tips"
            value={brewers_tips}
            onChange={(e) => {
              setBrewers_tips(e.target.value);
            }}
          />
        </label>

        <label>
          Attenuation level:
          <input
            type="number"
            name="attenuation_level"
            placeholder="enter the attenuation level"
            value={attenuation_level}
            onChange={(e) => {
              setAttenuation_level(e.target.value);
            }}
          />
        </label>

        <label>
          Contributed by:
          <input
            type="text"
            name="contributed_by"
            placeholder="the beer is contributed by?"
            value={contributed_by}
            onChange={(e) => {
              setContributed_by(e.target.value);
            }}
          />
        </label>

        <button id="newButton">Create</button>
      </form>
    </div>
  );
}

export default NewBeer;
