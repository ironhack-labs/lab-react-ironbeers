import { useState } from "react";
import axios from "axios";

function AddBeerPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuation, setAttenuation] = useState(0);
  const [contributor, setContributor] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newBeer = {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation_level: attenuation,
      contributed_by: contributor,
    };

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
          name='name'
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <label>
          Tagline
          <input
          name='tagline'
            type="text"
            onChange={(e) => {
              setTagline(e.target.value);
            }}
          />
        </label>
        <label>
          Description
          <textarea
          name='description'
            type="text"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </label>
        <label>
          First Brewed
          <input
          name='first_brewed'
            type="text"
            onChange={(e) => {
              setFirstBrewed(e.target.value);
            }}
          />
        </label>
        <label>
          Brewers Tips
          <input
          name='brewers_tips'
            type="text"
            onChange={(e) => {
              setBrewersTips(e.target.value);
            }}
          />
        </label>
        <label>
          Attenuation Level
          <input
          name='attenuation_level'
            type="number"
            onChange={(e) => {
              setAttenuation(e.target.value);
            }}
          />
        </label>
        <label>
          Contributed by
          <input
          name='contributed_by'
            type="text"
            onChange={(e) => {
              setContributor(e.target.value);
            }}
          />
        </label>
        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
