import { React, useState } from "react";
import axios from "axios";
import Header from '../components/Header';

function NewBeer() {
  const [beer, setBeer] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", beer)
      .then((response) => {
        console.log("response.data", response.data);
        setBeer({
          name: "",
          tagline: "",
          description: "",
          first_brewed: "",
          brewers_tips: "",
          attenuation_level: 0,
          contributed_by: "",
        });
      })
      .catch((error) => {
        console.log(error);
        alert("Error creating new beer.");
      });
  };

  const handleChange = (event) => {
    setBeer({ ...beer, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={beer.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="tagline">Tagline:</label>
          <input
            type="text"
            name="tagline"
            value={beer.tagline}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            value={beer.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="first_brewed">First brewed:</label>
          <input
            type="text"
            name="first_brewed"
            value={beer.first_brewed}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="brewers_tips">Brewers tips:</label>
          <input
            type="text"
            name="brewers_tips"
            value={beer.brewers_tips}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="attenuation_level">Attenuation level:</label>
          <input
            type="number"
            name="attenuation_level"
            value={beer.attenuation_level}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="contributed_by">Contributed by:</label>
          <input
            type="text"
            name="contributed_by"
            value={beer.contributed_by}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Create new beer</button>
      </form>
    </div>
  );
}

export default NewBeer;
