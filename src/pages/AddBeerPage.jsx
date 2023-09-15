import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBeerPage() {

    const navigate = useNavigate();
  const [name, setName] = useState();
  const [tagline, setTagline] = useState();
  const [description, setDescription] = useState();
  const [first_brewed, setFirst_brewed] = useState();
  const [brewers_tips, setBrewers_tips] = useState();
  const [attenuation_level, setAttenuation_level] = useState();
  const [contributed_by, setContributed_by] = useState();

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
      .post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
      .then((response) => {
        console.log(response)
        navigate("/beers")
      })
      .catch((e) => {
        console.log("error when creating a beer", e);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor=""> Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label htmlFor="">Tagline</label>
        <input
          type="text"
          name="tagline"
          value={tagline}
          onChange={(e) => {
            setTagline(e.target.value);
          }}
        />
        <label htmlFor="">Description</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <label htmlFor="">First Brewed</label>
        <input
          type="text"
          name="first_brewed"
          value={first_brewed}
          onChange={(e) => {
            setFirst_brewed(e.target.value);
          }}
        />
        <label htmlFor="">Brewer's Tips</label>
        <input
          type="text"
          name="brewers_tips"
          value={brewers_tips}
          onChange={(e) => {
            setBrewers_tips(e.target.value);
          }}
        />
        <label htmlFor="">Attenuation Level</label>
        <input
          type="number"
          name="attenuation_level"
          value={attenuation_level}
          onChange={(e) => {
            setAttenuation_level(e.target.value);
          }}
        />
        <label htmlFor="">Contributed By</label>
        <input
          type="text"
          name="contributed_by"
          value={contributed_by}
          onChange={(e) => {
            setContributed_by(e.target.value);
          }}
        />
        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
