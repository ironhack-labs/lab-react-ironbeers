import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddBeerPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuation, setAttenuation] = useState(0);
  const [contributor, setContributor] = useState("");
  const navigate = useNavigate()

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
      .then(() => {
        navigate('/beers')
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div id="AddBeerPage">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
        </label>
          <input
          name='name'
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        <label htmlFor="tagline">
          Tagline
        </label>
          <input
          name='tagline'
            type="text"
            onChange={(e) => {
              setTagline(e.target.value);
            }}
          />
        <label htmlFor="description">
          Description
        </label>
          <textarea
          name='description'
            type="text"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        <label htmlFor="first_brewed">
          First Brewed
        </label>
          <input
          name='first_brewed'
            type="text"
            onChange={(e) => {
              setFirstBrewed(e.target.value);
            }}
          />
        <label htmlFor="brewers_tips">
          Brewers Tips
        </label>
          <input
          name='brewers_tips'
            type="text"
            onChange={(e) => {
              setBrewersTips(e.target.value);
            }}
          />
        <label htmlFor="attenuation_level">
          Attenuation Level
        </label>
          <input
          name='attenuation_level'
            type="number"
            onChange={(e) => {
              setAttenuation(e.target.value);
            }}
          />
        <label htmlFor="contributed_by">
          Contributed by
        </label>
          <input
          name='contributed_by'
            type="text"
            onChange={(e) => {
              setContributor(e.target.value);
            }}
          />
        <button type="submit">ADD NEW</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
