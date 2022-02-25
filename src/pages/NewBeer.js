import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddBeer(props) {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirst_brewed] = useState("");
  const [brewers_tips, setBrewers_tips] = useState("");
  const [attenuation_level, setattenuation_level] = useState(0);
  const [contributed_by, setContributed_by] = useState("");

  const handleNameInput = (e) => setName(e.target.value);

  const handleTaglineInput = (e) => setTagline(e.target.value);

  const handleDescriptionInput = (e) => setDescription(e.target.value);

  const handleFirst_brewedInput = (e) => setFirst_brewed(e.target.value);

  const handleBrewers_tipsInput = (e) => setBrewers_tips(e.target.value);

  const handleAttenuation_levelInput = (e) =>
    setattenuation_level(e.target.value);

  const handleContributed_byInput = (e) => setContributed_by(e.target.value);

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

    console.log("Submitted: ", newBeer);

    const fetchData = async () => {
      try {
        axios
          .post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
          .then((response) => {
            navigate("/beers");
            console.log(response);
          });
      } catch (error) {
        console.log("error :>> ", error);
      }
    };
    fetchData();
  };

  return (
    <div className="AddMovie">
      <h4>Add a Beer</h4>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameInput}
        />
        <br />
        <label>Tagline:</label>
        <input
          type="text"
          name="tagline"
          value={tagline}
          onChange={handleTaglineInput}
        />
        <br />
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={handleDescriptionInput}
        />
        <br />
        <label>First brewed:</label>
        <input
          type="text"
          name="first_brewed"
          checked={first_brewed}
          onChange={handleFirst_brewedInput}
        />{" "}
        <br />
        <label>Brewer's tips:</label>
        <input
          type="text"
          name="brewers_tips"
          checked={brewers_tips}
          onChange={handleBrewers_tipsInput}
        />{" "}
        <br />
        <label>Attenuation level:</label>
        <input
          type="number"
          name="attenuation_level"
          checked={attenuation_level}
          onChange={handleAttenuation_levelInput}
        />{" "}
        <br />
        <label>Contributed by:</label>
        <input
          type="text"
          name="contributed_by"
          checked={contributed_by}
          onChange={handleContributed_byInput}
        />
        <br />
        <button type="submit">Add the Beer</button>
      </form>
    </div>
  );
}

export default AddBeer;
