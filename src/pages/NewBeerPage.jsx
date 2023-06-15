import axios from "axios";
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function NewBeerPage() {
  const [data, setData] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", data);
    setData({
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenuation_level: 0,
      contributed_by: "",
    });
  };

  return (
    <div>
      <Navbar />
      <form className="container mt-4" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">NAME</label>
          <input
            className="form-control"
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">TAGLINE</label>
          <input
            className="form-control"
            type="text"
            name="tagline"
            value={data.tagline}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">DESCRIPTION</label>
          <input
            className="form-control"
            type="text"
            name="description"
            value={data.description}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">FIRST BREWED</label>
          <input
            className="form-control"
            type="text"
            name="first_brewed"
            value={data.first_brewed}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">BREWERS TIPS</label>
          <input
            className="form-control"
            type="text"
            name="brewers_tips"
            value={data.brewers_tips}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">ATTENUATION LEVEL</label>
          <input
            className="form-control"
            type="number"
            name="attenuation_level"
            value={data.attenuation_level}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">CONTRIBUTED BY</label>
          <input
            className="form-control"
            type="text"
            name="contributed_by"
            value={data.contributed_by}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create beer!
        </button>
      </form>
    </div>
  );
}
