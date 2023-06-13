import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function NewBeer() {
  const [form, setForm] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  });
  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", form);
    navigate("/beers");
  }

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={form.name}
          onChange={handleChange}
        />

        <label htmlFor="tagline">Tagline</label>
        <input
          type="text"
          name="tagline"
          id="tagline"
          value={form.tagline}
          onChange={handleChange}
        />

        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          value={form.description}
          onChange={handleChange}
        />

        <label htmlFor="first_brewed">First Brewed</label>
        <input
          type="text"
          name="first_brewed"
          id="first_brewed"
          value={form.first_brewed}
          onChange={handleChange}
        />

        <label htmlFor="brewers_tips">Brewers Tips</label>
        <input
          type="text"
          name="brewers_tips"
          id="brewers_tips"
          value={form.brewers_tips}
          onChange={handleChange}
        />

        <label htmlFor="attenuation_level">Attenuation Level</label>
        <input
          type="number"
          name="attenuation_level"
          id="attenuation_level"
          value={form.attenuation_level}
          onChange={handleChange}
        />

        <label htmlFor="contributed_by">Contributed By</label>
        <input
          type="text"
          name="contributed_by"
          id="contributed_by"
          value={form.contributed_by}
          onChange={handleChange}
        />

        <button type="submit">Add New</button>
      </form>
    </div>
  );
}

export default NewBeer;
