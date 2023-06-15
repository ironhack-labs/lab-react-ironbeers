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
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={form.name}
          className="form-control"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="tagline" className="form-label">
          Tagline
        </label>
        <input
          type="text"
          name="tagline"
          id="tagline"
          value={form.tagline}
          className="form-control"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          name="description"
          id="description"
          value={form.description}
          className="form-control"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="first_brewed" className="form-label">
          First Brewed
        </label>
        <input
          type="text"
          name="first_brewed"
          id="first_brewed"
          value={form.first_brewed}
          className="form-control"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="brewers_tips" className="form-label">
          Brewers Tips
        </label>
        <input
          type="text"
          name="brewers_tips"
          id="brewers_tips"
          value={form.brewers_tips}
          className="form-control"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="attenuation_level" className="form-label">
          Attenuation Level
        </label>
        <input
          type="number"
          name="attenuation_level"
          id="attenuation_level"
          value={form.attenuation_level}
          className="form-control"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="contributed_by" className="form-label">
          Contributed By
        </label>
        <input
          type="text"
          name="contributed_by"
          id="contributed_by"
          value={form.contributed_by}
          className="form-control"
          onChange={handleChange}
        />
        <br />
        <button
          type="submit"
          className="btn btn-primary"
          style={{ marginLeft: 10 }}
        >
          Add New
        </button>
      </form>
    </div>
  );
}

export default NewBeer;
