import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

function AddBeerPage() {
  const [formData, setFormData] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", formData)
      .then((response) => {
        console.log("Beer created successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error creating beer:", error);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Beer name
          </label>
          <input
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            id="name"
            aria-describedby="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tagline" className="form-label">
            Tagline
          </label>
          <input
            type="text"
            className={`form-control ${errors.tagline ? "is-invalid" : ""}`}
            id="tagline"
            aria-describedby="tagline"
            name="tagline"
            value={formData.tagline}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            type="text"
            className={`form-control ${errors.description ? "is-invalid" : ""}`}
            id="description"
            aria-describedby="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="first_brewed" className="form-label">
            First brewed
          </label>
          <input
            type="text"
            className={`form-control ${
              errors.first_brewed ? "is-invalid" : ""
            }`}
            id="first_brewed"
            aria-describedby="first_brewed"
            name="first_brewed"
            value={formData.first_brewed}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="brewers_tips" className="form-label">
            Brewers tips
          </label>
          <input
            type="text"
            className={`form-control ${
              errors.brewers_tips ? "is-invalid" : ""
            }`}
            id="brewers_tips"
            aria-describedby="brewers_tips"
            name="brewers_tips"
            value={formData.brewers_tips}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="attenuation_level" className="form-label">
            Attenuation level
          </label>
          <input
            type="number"
            className={`form-control ${
              errors.attenuation_level ? "is-invalid" : ""
            }`}
            id="attenuation_level"
            aria-describedby="attenuation_level"
            name="attenuation_level"
            min="0"
            max="100"
            value={formData.attenuation_level}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contributed_by" className="form-label">
            Contributor
          </label>
          <input
            type="text"
            className={`form-control ${
              errors.contributed_by ? "is-invalid" : ""
            }`}
            id="contributed_by"
            aria-describedby="contributed_by"
            name="contributed_by"
            value={formData.contributed_by}
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

AddBeerPage.defaultProps = {
  className: "",
  onCreate: () => {},
};

export default AddBeerPage;
