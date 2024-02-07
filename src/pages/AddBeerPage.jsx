import axios from "axios";
import { useState } from "react";

function AddBeerPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirst_brewed] = useState("");
  const [brewers_tips, setBrewers_tips] = useState("");
  const [attenuation_level, setAttenuation_level] = useState(0);
  const [contributed_by, setContributed_by] = useState("");

  function handleSubmit(e) {
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
      .post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
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
            onChange={(e) => {
              setTagline(e.target.value);
            }}
          />
        </label>
        <label>
          Description
          <textarea
            type="text"
            name="description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </label>
        <label>
          First Brewed
          <input
            type="text"
            name="first_brewed"
            onChange={(e) => {
              setFirst_brewed(e.target.value);
            }}
          />
        </label>
        <label>
          `Brewer's Tips`
          <input
            type="text"
            name="brewers_tips"
            onChange={(e) => {
              setBrewers_tips(e.target.value);
            }}
          />
        </label>
        <label>
          Attenuation Level
          <input
            type="number"
            name="attenuation_level"
            onChange={(e) => {
              setAttenuation_level(e.target.value);
            }}
          />
        </label>
        <label>
          Contributed By
          <input
            type="text"
            name="contributed_by"
            onChange={(e) => {
              setContributed_by(e.target.value);
            }}
          />
        </label>
        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
