import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirstBrewed] = useState("");
  const [brewers_tips, setBrewersTips] = useState("");
  const [attenuation_level, setAtenuationLevel] = useState(0);
  const [contributed_by, setContributedBy] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate ()

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    };
    if (!name) {
      setErrorMessage("We need at least the beer name");
      return;
    }
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
      .then((result) => {
        setSuccessMessage(
          `${result.data.message}, redirecting you to the main page in 3 seconds`
        );
        setName("");
        setTagline("");
        setDescription("");
        setFirstBrewed("");
        setBrewersTips("");
        setAtenuationLevel(0);
        setContributedBy("");
        setTimeout(() => {
          // Also you usually want to navigate after the resource was created successfully
          navigate("/");
        }, 3000);
      })
      .catch((error) => {
        // You can check the error and create different messages to print to the user
        setErrorMessage("We couldn't create the a new beer at the moment");
      });
  };

  return (
    <div className="list">
      <h3>Add Product!</h3>
      <form onSubmit={handleSubmit}>
        <p>{errorMessage}</p>

        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        
        <label>Tagline:</label>
        <input
          type="text"
          value={tagline}
          onChange={(e) => setTagline(e.target.value)}
        />

        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>First Brewed:</label>
        <input
          type="text"
          value={first_brewed}
          onChange={(e) => setFirstBrewed(e.target.value)}
        />

        <label>Brewers Tips:</label>
        <input
          type="text"
          value={brewers_tips}
          onChange={(e) => setBrewersTips(e.target.value)}
        />

        <label>Attenuation Level:</label>
        <input
          type="text"
          value={attenuation_level}
          onChange={(e) => setAtenuationLevel(e.target.value)}
        />

        <label>Contributed By:</label>
        <input
          type="text"
          value={contributed_by}
          onChange={(e) => setContributedBy(e.target.value)}
        />

        <p>{successMessage}</p>
        <button type="Submit">Add New</button>
      </form>
    </div>
  );
}
export default NewBeer;
