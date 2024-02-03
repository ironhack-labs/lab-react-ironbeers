import { useState } from "react";
import { postNewBeer } from "../services/servise";

const AddBeerPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postNewBeer(formData)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-5">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
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
          className="form-control"
          id="tagline"
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
          className="form-control"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
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
          value={formData.first_brewed}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="brewers_tips" className="form-label">
          Brewer's Tips
        </label>
        <input
          type="text"
          className="form-control"
          id="brewers_tips"
          name="brewers_tips"
          value={formData.brewers_tips}
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
          value={formData.attenuation_level}
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
          value={formData.contributed_by}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add Beer
      </button>
    </form>
  );
};

export default AddBeerPage;
