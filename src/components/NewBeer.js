import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateBeer.css";

function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setdescription] = useState("");
  const [first_brewed, setFirst_brewed] = useState("");
  const [brewers_tips, setBrewers_tips] = useState("");
  const [attenuation_level, setAttenuation_level] = useState("");
  const [contributed_by, setContributed_by] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
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
      .post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
      .then((response) => {
        setName("");
        setTagline("");
        setdescription("");
        setFirst_brewed("");
        setBrewers_tips("");
        setAttenuation_level("");
        setContributed_by("");

        navigate("/beers");
      });
  };
  return (
    <div className="createBeer">
      <h1>Create a new Beer</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Tagline
          <input
            type="text"
            name="tagline"
            value={tagline}
            onChange={(e) => setTagline(e.target.value)}
          />
        </label>

        <label>
          Description
          <input
            type="text"
            name="description "
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          />
        </label>

        <label>
          First Brewed
          <input
            type="text"
            name="first_brewed"
            value={first_brewed}
            onChange={(e) => setFirst_brewed(e.target.value)}
          />
        </label>

        <label>
          Brewers Tips
          <input
            type="text"
            name="brewers_tips"
            value={brewers_tips}
            onChange={(e) => setBrewers_tips(e.target.value)}
          />
        </label>

        <label>
          Attentuation Level
          <input
            type="number"
            min={0}
            name="attenuation_level"
            value={attenuation_level}
            onChange={(e) => setAttenuation_level(e.target.value)}
          />
        </label>

        <label>
          Contributed By
          <input
            type="text"
            name="contributed_by"
            value={contributed_by}
            onChange={(e) => setContributed_by(e.target.value)}
          />
        </label>
        <button type="submit">Create Beer</button>
      </form>
    </div>
  );
}
export default NewBeer;
