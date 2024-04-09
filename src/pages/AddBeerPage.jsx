import { useState } from "react";
import axios from "axios"; // Make sure to import axios
import { API_URL } from "../components/Constants";
import { useNavigate } from "react-router-dom";

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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/new`, formData);
      // Navigate to the all beers page upon success
      navigate("/beers");
    } catch (error) {
      console.error(
        "Error adding new beer:",
        error.response ? error.response.data : error
      );
    }
  };

  const formFields = [
    { label: "Name", type: "text", name: "name" },
    { label: "Tagline", type: "text", name: "tagline" },
    { label: "Description", type: "textarea", name: "description" },
    { label: "Image URL", type: "text", name: "image_url" },
    { label: "First Brewed", type: "text", name: "first_brewed" },
    { label: "Brewers Tips", type: "text", name: "brewers_tips" },
    { label: "Attenuation Level", type: "number", name: "attenuation_level" },
    { label: "Contributed By", type: "text", name: "contributed_by" },
  ];

  return (
    <>
      <div className="d-inline-flex flex-column w-100 p-4">
        <form onSubmit={handleSubmit}>
          {formFields?.map((field, index) => (
            <div key={index} className="mb-4">
              <label>{field.label}</label>
              {field.type !== "textarea" ? (
                <input
                  className="form-control"
                  type={field.type}
                  name={field.name}
                  placeholder={field.label}
                  value={formData[field.name]}
                  required
                  onChange={handleChange}
                  {...(field.type === "number" && { min: 0, max: 100 })}
                />
              ) : (
                <textarea
                  className="form-control"
                  rows="3"
                  name={field.name}
                  placeholder={field.label}
                  value={formData[field.name]}
                  onChange={handleChange}
                ></textarea>
              )}
            </div>
          ))}
          <button type="submit" className="btn btn-primary btn-round">
            Add Beer
          </button>
        </form>
      </div>
    </>
  );
}

export default AddBeerPage;
