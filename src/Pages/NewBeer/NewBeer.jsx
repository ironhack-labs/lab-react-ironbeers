import React, { useState } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";

const NewBeer = () => {
  const [form, setForm] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  }); // instead of making for all of this fields their own states, we create just one state we're we store all the states

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent the form to make a request when the user submits
    axios
      .post(`https://ih-beers-api2.herokuapp.com/beers/new`, form)
      .then((newBeer) => {
        return console.log(`created a newBeer:`, newBeer);
      })
      .catch((err) => {
        return console.log(err);
      });
    console.log(`tried submitting the form`);
  };

  const handleChange = (e) => {
    // console.log(`input being worked on ->`, e.target.name); // which input field the user is writing on
    // console.log(`value added to input ->`, e.target.value); // which content the user is writing
    const { name, value } = e.target; // we destructure from the e.target the name and the value, to find which input we are.
    setForm({ ...form, [name]: value }); // update the form and input field. 1. spread the object of the form state, 2. update programmatically only one property of this object. (by wrapping the name inside the [] we say take one property with name and change the value of that specific field)
  };

  return (
    <div>
      <Header />
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={form.name}
        />
        <label htmlFor="tagline">Tagline</label>
        <input
          type="text"
          name="tagline"
          onChange={handleChange}
          value={form.tagline}
        />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          name="description"
          onChange={handleChange}
          value={form.description}
        />
        <label htmlFor="first_brewed">First Brewed:</label>
        <input
          type="text"
          name="first_brewed"
          onChange={handleChange}
          value={form.first_brewed}
        />
        <label htmlFor="brewers_tips">Brewers Tips:</label>
        <input
          type="text"
          name="brewers_tips"
          onChange={handleChange}
          value={form.brewers_tips}
        />
        <label htmlFor="attenuation_level">Attenuation Level</label>
        <input
          type="number"
          name="attenuation_level"
          onChange={handleChange}
          value={form.attenuation_level}
        />
        <label htmlFor="contributed_by">Contributed By:</label>
        <input
          type="text"
          name="contributed_by"
          onChange={handleChange}
          value={form.contributed_by}
        />
        <button type="submit">Add new beer</button>
      </form>
    </div>
  );
};

export default NewBeer;
