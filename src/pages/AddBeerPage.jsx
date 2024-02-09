import { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddBeerPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirst_brewed] = useState("");
  const [brewers_tips, setBrewers_tips] = useState("");
  const [attenuation_level, setAttenuation_level] = useState(0);
  const [contributed_by, setContributed_by] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBeer = {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: first_brewed,
      brewers_tips: brewers_tips,
      attenuation_level: attenuation_level,
      contributed_by: contributed_by,
    };

    axios
      .post(`https://ih-beers-api2.herokuapp.com/beers/new`, newBeer)
      .then((response) => {
        console.log(response.data);
        alert(response.data.message);
        navigate(`/beers`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="add-beer">
        <form onSubmit={handleSubmit} action="" className="create-forms">
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            
          />
          <label htmlFor="">Tagline</label>
          <input
            type="text"
            name="tagline"
            onChange={(e) => {
              setTagline(e.target.value);
            }}
            value={tagline}
          />
          <label htmlFor="">Description</label>
          <textarea
            type="text"
            name="description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
          />
          <label htmlFor="">First Brewed</label>
          <input
            type="text"
            name="first_brewed"
            onChange={(e) => {
              setFirst_brewed(e.target.value);
            }}
            value={first_brewed}
          />
          <label htmlFor="">Brewers Tips</label>
          <input
            type="text"
            name="brewers_tips"
            onChange={(e) => {
              setBrewers_tips(e.target.value);
            }}
            value={brewers_tips}
          />
          <label htmlFor="">Attenuation Level</label>
          <input
          placeholder=" "
            type="number"
            name="attenuation_level"
            onChange={(e) => {
              setAttenuation_level(e.target.value);
            }}
            value={attenuation_level}
          />
          <label htmlFor="">Contributed By</label>
          <input
            type="text"
            name="contributed_by"
            onChange={(e) => {
              setContributed_by(e.target.value);
            }}
            value={contributed_by}
          />
          <button type="submit">Add Beer</button>
        </form>
      </div>
    </div>
  );
}

export default AddBeerPage;
