import { useState } from "react";
import { createBeer } from "../services/beerService";

function AddBeerPage() {
  const [form, setForm] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  });

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    createBeer(form)
      .then((response) => {
        console.log("Beer Added:", response.data);
      })
      .catch((err) => {
        console.error("Error adding beer:", err);
      });
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tagline" className="form-label">
            Tagline
          </label>
          <input
            type="text"
            className="form-control"
            id="tagline"
            name="tagline"
            value={form.tagline}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={form.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="first_brewed" className="form-label">
            First Brewed
          </label>
          <input
            type="text"
            className="form-control"
            id="first_brewed"
            name="first_brewed"
            value={form.first_brewed}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="brewers_tips" className="form-label">
            Brewer Tips
          </label>
          <input
            type="text"
            className="form-control"
            id="brewers_tips"
            name="brewers_tips"
            value={form.brewers_tips}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="attenuation_level" className="form-label">
            Attenuation Level
          </label>
          <input
            type="number"
            className="form-control"
            id="attenuation_level"
            name="attenuation_level"
            value={form.attenuation_level}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contributed_by" className="form-label">
            Contributed By
          </label>
          <input
            type="text"
            className="form-control"
            id="contributed_by"
            name="contributed_by"
            value={form.contributed_by}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Beer
        </button>
      </form>
    </div>
  );
}

export default AddBeerPage;
