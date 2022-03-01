import { useState } from "react";
import { Input, Row, Button } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

const apiURL = "https://ih-beers-api2.herokuapp.com/beers";

function AddBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirst_Brewed] = useState("");
  const [brewers_tips, setBrewers_Tips] = useState("");
  const [attenuation_level, setAttenuation_Level] = useState(0);
  const [contributed_by, setContributed_By] = useState("");

  const navigate = useNavigate();

  // handler functions
  const handleName = (e) => setName(e.target.value);
  const handleTagline = (e) => setTagline(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleFirst_Brewed = (e) => setFirst_Brewed(e.target.value);
  const handleBrewers_Tips = (e) => setBrewers_Tips(e.target.value);
  const handleAttenuation_Level = (e) => setAttenuation_Level(e.target.value);
  const handleContributed_By = (e) => setContributed_By(e.target.value);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const newBeer = {
        name,
        tagline,
        description,
        first_brewed,
        brewers_tips,
        attenuation_level,
        contributed_by,
      };

      axios
      .post(`${apiURL}/new`, newBeer)
      .then(() => {
        //reset state
        setName("");
        setTagline("");
        setDescription("");
        setFirst_Brewed("");
        setBrewers_Tips("");
        setAttenuation_Level(0);
        setContributed_By("");

        //navigate to the '/beers' page
        navigate('/beers');
      });
    } catch (err) {
      return <p>No beers found</p>;
    }
  };

  return (
    <div
      className="d-inline-flex flex-column justify-content-center align-items-center"
      style={{ maxWidth: "700px" }}
    >
      <Navbar />
      <div
        className="d-inline-flex flex-column justify-content-center align-items-center"
        style={{ maxWidth: "700px" }}
      >
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={handleName}
          />
          <label>Tagline</label>
          <input
            className="form-control"
            type="text"
            name="tagline"
            placeholder="Tagline"
            value={tagline}
            onChange={handleTagline}
          />

          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            type="text"
            name="description"
            placeholder="Description"
            rows="3"
            value={description}
            onChange={handleDescription}
          ></textarea>

          <label>First Brewed</label>
          <input
            className="form-control"
            type="text"
            name="first_brewed"
            placeholder="First Brewed"
            value={first_brewed}
            onChange={handleFirst_Brewed}
          />

          <label>Brewer Tips</label>
          <input
            className="form-control"
            type="text"
            name="brewers_tips"
            value={brewers_tips}
            onChange={handleBrewers_Tips}
          />

          <label>Attenuation Level</label>
          <input
            className="form-control"
            type="number"
            name="attenuation_level"
            value={attenuation_level}
            onChange={handleAttenuation_Level}
          />

          <label>Created By</label>
          <input
            className="form-control"
            type="text"
            name="contributed_by"
            placeholder="Created by"
            value={contributed_by}
            onChange={handleContributed_By}
          />
          <button className="btn btn-primary btn-round">Add Beer</button>
        </form>
      </div>
    </div>
  );
}

export default AddBeer;
