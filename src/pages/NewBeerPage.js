// Importing necessary libraries and components
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";

// API URL for posting new beer
const apiURL = "https://ih-beers-api2.herokuapp.com/beers";

function NewBeerPage() {
  // Defining state variables and setters for controlled inputs
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirst_Brewed] = useState("");
  const [brewers_tips, setBrewers_Tips] = useState("");
  const [attenuation_level, setAttenuation_Level] = useState(0);
  const [contributed_by, setContributed_By] = useState("");

  // Hook for navigation
  const navigate = useNavigate();

  // Handler functions for updating state variables
  const handleName = (e) => setName(e.target.value);
  const handleTagline = (e) => setTagline(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleFirst_Brewed = (e) => setFirst_Brewed(e.target.value);
  const handleBrewers_Tips = (e) => setBrewers_Tips(e.target.value);
  const handleAttenuation_Level = (e) => setAttenuation_Level(e.target.value);
  const handleContributed_By = (e) => setContributed_By(e.target.value);

  // Handler function for submitting form data to API
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      // Creating a new beer object with current state values
      const newBeer = {
        name,
        tagline,
        description,
        first_brewed,
        brewers_tips,
        attenuation_level,
        contributed_by,
      };

      // Sending a POST request to the API to add the new beer
      await axios.post(`${apiURL}/new`, newBeer);

      // Resetting state values to clear the form
      setName("");
      setTagline("");
      setDescription("");
      setFirst_Brewed("");
      setBrewers_Tips("");
      setAttenuation_Level(0);
      setContributed_By("");

      // Navigating back to the homepage
      navigate("/");
    } catch (err) {
      // Handling errors with a simple message
      return <p>No beers found</p>;
    }
  };

  // Rendering the form with controlled inputs and a submit button
  return (
    <>
      <Header />
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
          <button className="btn btn-primary btn-round">Add New</button>
        </form>
      </div>
    </>
  );
}

export default NewBeerPage;
