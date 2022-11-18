import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/Navbar";

function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [first_brewed, setFirst_brewed] = useState("");
  const [attenuation_level, setAttenuation_level] = useState("");
  const [description, setDescription] = useState("");
  const [contributed_by, setContributed_by] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleTagline = (e) => setTagline(e.target.value);
  const handleFirst_brewed = (e) => setFirst_brewed(e.target.value);
  const handleAttenuation_level = (e) => setAttenuation_level(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleContributed_by = (e) => setContributed_by(e.target.value);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = {
        name,
        tagline,
        first_brewed,
        attenuation_level,
        description,
        contributed_by,
      };

      /* await axios.post("https://ih-beers-api2.herokuapp.com/beer", body); */

      setName("");
      setTagline("");
      setFirst_brewed("");
      setAttenuation_level("");
      setDescription("");
      setContributed_by("");

      navigate("/");

      axios
        .post("https://ih-beers-api2.herokuapp.com/beers", body)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="cards-section">
      <Navbar />
      <div className="single-beer-card">
        <h3>Add New Beer</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" value={name} onChange={handleName} />

          <label htmlFor="tagline">Tagline:</label>
          <input type="text" value={tagline} onChange={handleTagline} />

          <label htmlFor="name">First Brewed:</label>
          <input
            type="text"
            value={first_brewed}
            onChange={handleFirst_brewed}
          />

          <label htmlFor="name">Attenuation Level:</label>
          <input
            type="text"
            value={attenuation_level}
            onChange={handleAttenuation_level}
          />

          <label htmlFor="name">Description:</label>
          <input type="text" value={description} onChange={handleDescription} />

          <label htmlFor="name">Contributed By:</label>
          <input
            type="text"
            value={contributed_by}
            onChange={handleContributed_by}
          />

          <button type="Submit" className="button-custom">
            Add Beer
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewBeer;
