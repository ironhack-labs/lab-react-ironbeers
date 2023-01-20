import "../App.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewBeer = () => {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirst_brewed] = useState("");
  const [brewers_tips, setBrewers_tips] = useState("");
  const [attenuation_level, setAttenuation_level] = useState(1);
  const [contributed_by, setContributed_by] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    // Prevent page reload on submit
    e.preventDefault();
    // Create the body for the POST request
    const body = {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: first_brewed,
      brewers_tips: brewers_tips,
      attenuation_level: attenuation_level,
      contributed_by: contributed_by,
    };
    axios.post(process.env.REACT_APP_API_URL + "/beers/new", body).then(() => {
      // Reset the state
      setName("");
      setTagline("");
      setDescription("");
      setFirst_brewed("");
      setBrewers_tips("");
      setAttenuation_level("");
      setContributed_by("");
      navigate("/beers");
    });
  };
  return (
    <div className="App">
      <nav className="App-header">
        <NavLink className="App-link" to="/">
          Home
        </NavLink>
      </nav>

      <h3>Add New Beer</h3>
      <br />
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <br />
        <label>Tagline</label>
        <input
          type="text"
          name="tagline"
          onChange={(e) => setTagline(e.target.value)}
          value={tagline}
        />
        <br />
        <label>Description</label>
        <input
          type="text"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <br />
        <label>First Brewed</label>
        <input
          type="text"
          name="first_brewed"
          onChange={(e) => setFirst_brewed(e.target.value)}
          value={first_brewed}
        />
        <br />
        <label>Brewers Tips</label>
        <input
          type="text"
          name="brewers_tips"
          onChange={(e) => setBrewers_tips(e.target.value)}
          value={brewers_tips}
        />
        <br />
        <label>Attenuation Level</label>
        <input
          type="number"
          name="attenuation_level"
          onChange={(e) => setAttenuation_level(e.target.value)}
          value={attenuation_level}
        />
        <br />
        <label>Contributed By</label>
        <input
          type="text"
          name="contributed_by"
          onChange={(e) => setContributed_by(e.target.value)}
          value={contributed_by}
        />
        <br />
        <button type="submit">Create Beer</button>
      </form>
    </div>
  );
};
export default NewBeer;
