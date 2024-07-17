import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

function AddBeerPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    tagline: "",
    description: "",
    image_url: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormData = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      await axios.post(`${import.meta.env.VITE_SERVER_URL}/new`, formData);
      navigate("/beers");
    } catch (error) {
      console.log(error);
    }
  };
  console.log(formData);

  return (
    <>
      <div className="d-inline-flex flex-column w-100 p-4">
        <form onSubmit={handleFormData}>
          <label>Name</label>
          <input
            className="form-control mb-4"
            type="text"
            name="name"
            placeholder="Beer Name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <label>Tagline</label>
          <input
            className="form-control mb-4"
            type="text"
            name="tagline"
            placeholder="Beer Tagline"
            value={formData.tagline}
            onChange={handleInputChange}
          />

          <label className="form-label">Description</label>
          <textarea
            className="form-control mb-4"
            type="text"
            name="description"
            placeholder="Description"
            rows="3"
            value={formData.description}
            onChange={handleInputChange}
          ></textarea>

          <label>Image</label>
          <input
            className="form-control mb-4"
            type="text"
            name="image_url"
            placeholder="Image URL"
            value={formData.image_url}
            onChange={handleInputChange}
          />

          <label>First Brewed</label>
          <input
            className="form-control mb-4"
            type="text"
            name="first_brewed"
            placeholder="Date - MM/YYYY"
            value={formData.first_brewed}
            onChange={handleInputChange}
          />

          <label>Brewer Tips</label>
          <input
            className="form-control mb-4"
            type="text"
            name="brewers_tips"
            placeholder="..."
            value={formData.brewers_tips}
            onChange={handleInputChange}
          />

          <label>Attenuation Level</label>
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                %
              </span>
            </div>
            <input
              className="form-control mb-4"
              type="number"
              name="attenuation_level"
              value={formData.attenuation_level}
              onChange={handleInputChange}
              min={0}
              max={100}
            />
          </div>

          <label>Contributed By</label>
          <input
            className="form-control mb-4"
            type="text"
            name="contributed_by"
            placeholder="Contributed by"
            value={formData.contributed_by}
            onChange={handleInputChange}
          />
          <button className="btn btn-primary btn-round">Add Beer</button>
        </form>
      </div>
    </>
  );
}

export default AddBeerPage;
