import axios from "axios";
import { useState } from "react";
import Header from "../Components/Header";

function AddBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirstBrewed] = useState("");
  const [brewers_tips, setBrewerTips] = useState("");
  const [attenuation_level, setAttenuationLevel] = useState(0);
  const [contributed_by, setContributedBy] = useState("");

  const handleNameInput = (e) => setName.apply(e.target.value);
  const handleTaglineInput = (e) => setTagline.apply(e.target.value);
  const handleDescriptionInput = (e) => setDescription.apply(e.target.value);
  const handleFirstBrewedInput = (e) => setFirstBrewed.apply(e.target.value);
  const handleBrewersTipsInput = (e) => setBrewerTips.apply(e.target.value);
  const handleAttenuationLevelInput = (e) =>
    setAttenuationLevel.apply(e.target.value);
  const handleContributedByInput = (e) =>
    setContributedBy.apply(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: first_brewed,
      brewers_tips: brewers_tips,
      attenuation_level: attenuation_level,
      contributed_by: contributed_by,
    };

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
      .then((response) => {
        setName("");
        setTagline("");
        setDescription("");
        setFirstBrewed("");
        setBrewerTips("");
        setAttenuationLevel(0);
        setName("");
        setContributedBy("/");
      });
  };

  return (
    <div className="form-add">
    <Header/>
      <form>
        <label>Name</label>
        <br></br>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameInput}
        />
        <br></br>
        <label>Tagline</label>
        <br></br>
        <input
          type="text"
          name="tagline"
          value={tagline}
          onChange={handleTaglineInput}
        />
        <br></br>
        <label>Description</label>
        <br></br>
        <input
          type="text"
          name="description"
          value={description}
          onChange={handleDescriptionInput}
        />
        <br></br>
        <label>First Brewed</label>
        <br></br>
        <input
          type="text"
          name="first_brewed"
          value={first_brewed}
          onChange={handleFirstBrewedInput}
        />
        <br></br>
        <label>Brewers Tips</label>
        <br></br>
        <input
          type="text"
          name="brewers_tips"
          value={brewers_tips}
          onChange={handleBrewersTipsInput}
        />
        <br></br>

        <label>Attenuation Level</label>
        <br></br>
        <input
          type="number"
          name="attenuation_level"
          value={attenuation_level}
          onChange={handleAttenuationLevelInput}
        />
        <br></br>
        <label>Contributed By</label>
        <br></br>
        <input
          type="text"
          name="contributed_by"
          value={contributed_by}
          onChange={handleContributedByInput}
        />
        <br></br>
        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
}

export default AddBeer;
