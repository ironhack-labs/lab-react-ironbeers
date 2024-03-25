import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const beersAPI = "https://ih-beers-api2.herokuapp.com/beers";

function AddBeerPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirstBrewed] = useState("");
  const [brewers_tips, setBrewerTips] = useState("");
  const [attenuation_level, setattenuation_level] = useState("");
  const [contributed_by, setcontributed_by] = useState("");

  const navigate = useNavigate();

  //const uuid = uuidv4();

  const handleSubmit = (event) => {
    event.preventDefault();
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
      .post(`${beersAPI}/new`, newBeer)
      .then((respone) => {
        navigate(`/beers`);
      })
      .catch((error) => {
        console.log(error);
      });
    }


  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /><br />
      <label>Tagline</label>
      <input
        type="text"
        name="tagline"
        value={tagline}
        onChange={(e) => setTagline(e.target.value)}
      /><br />
      <label>Description</label>
      <input
        type="text"
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      /><br />
      <label>First Brewed</label>
      <input
        type="text"
        name="first_brewed"
        value={first_brewed}
        onChange={(e) => setFirstBrewed(e.target.value)}
      /><br />
      <label>Brewer`s Tips</label>
      <input
        type="text"
        name="brewers_tips"
        value={brewers_tips}
        onChange={(e) => setBrewerTips(e.target.value)}
      /><br />
      <label>Attenutation Level</label>
      <input
        type="number"
        name="attenuation_level"
        value={attenuation_level}
        onChange={(e) => setattenuation_level(e.target.value)}
      /><br />
      <label>Contributed By:</label>
      <input
        type="text"
        name="contributed_by"
        value={contributed_by}
        onChange={(e) => setcontributed_by(e.target.value)}
      /><br />

      <button type="submit">Add Beer</button>
    </form>
  );
}

export default AddBeerPage;
