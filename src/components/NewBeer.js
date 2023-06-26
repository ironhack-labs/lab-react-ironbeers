import React, { useState } from "react";
import axios from "axios";

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

  function manageTransform(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        form
      );
      console.log(response);
      setForm({
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: "",
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container" style={{ padding: "20px" }}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control rounded"
            id="name"
            name="name"
            style={{ marginBottom: "10px" }}
            value={form.name}
            onChange={manageTransform}
          />
        </div>
        <div className="form-group">
          <label htmlFor="tagline">Tagline</label>
          <input
            type="text"
            className="form-control rounded"
            id="tagline"
            name="tagline"
            style={{ marginBottom: "10px" }}
            value={form.tagline}
            onChange={manageTransform}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control rounded"
            id="description"
            name="description"
            style={{ marginBottom: "10px" }}
            value={form.description}
            onChange={manageTransform}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="first_brewed">First Brewed</label>
          <input
            type="text"
            className="form-control rounded"
            id="first_brewed"
            name="first_brewed"
            style={{ marginBottom: "10px" }}
            value={form.first_brewed}
            onChange={manageTransform}
          />
        </div>
        <div className="form-group">
          <label htmlFor="brewers_tips">Brewers Tips</label>
          <input
            type="text"
            className="form-control rounded"
            id="brewers_tips"
            name="brewers_tips"
            style={{ marginBottom: "10px" }}
            value={form.brewers_tips}
            onChange={manageTransform}
          />
        </div>
        <div className="form-group">
          <label htmlFor="attenuation_level">Attenuation Level</label>
          <input
            type="number"
            className="form-control rounded"
            id="attenuation_level"
            name="attenuation_level"
            style={{ marginBottom: "10px" }}
            value={form.attenuation_level}
            onChange={manageTransform}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contributed_by">Contributed By</label>
          <input
            type="text"
            className="form-control rounded"
            id="contributed_by"
            name="contributed_by"
			style={{ marginBottom: "10px" }}
            value={form.contributed_by}
            onChange={manageTransform}
          />
        </div>
        <button type="submit" className="btn btn-lg btn-success">
          ADD NEW
        </button>
      </form>
    </div>
  );
}

export default NewBeer;