import Header from "../components/Header";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstbrewed, setFirstbrewed] = useState("");
  const [brewerstips, setBrewerstips] = useState("");
  const [attenuationlevel, setattenuationlevel] = useState(1);
  const [contributedby, setcontributedby] = useState("");

  const navigate = useNavigate();

  const handleNameChange = (e) => setName(e.target.value);
  const handleTaglineChange = (e) => setTagline(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleFirstBrewedChange = (e) => setFirstbrewed(e.target.value);
  const handleBrewersTipsChange = (e) => setBrewerstips(e.target.value);
  const handleAttenuationLevelChange = (e) =>
    setattenuationlevel(e.target.value);
  const handleContributedByChange = (e) => setcontributedby(e.target.value);

  function handleSubmit(e) {
    e.preventDefault();

    const body = {
      name,
      tagline,
      description,
      firstbrewed,
      brewerstips,
      attenuationlevel,
      contributedby,
    };

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
      .then((response) => {
        setName("");
        setTagline("");
        setDescription("");
        setFirstbrewed("");
        setBrewerstips("");
        setattenuationlevel(1);
        setcontributedby("");

        navigate("/beers");
      });
  }

  return (
    <div className="App">
      <Header />
      <h1>New Beer</h1>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          name="name"
        />

        <label>Tagline</label>
        <input
          type="text"
          name="tagline"
          value={tagline}
          onChange={handleTaglineChange}
        />

        <label>Description</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={handleDescriptionChange}
        />

        <label>First brewed</label>
        <input
          type="text"
          name="firstbrewed"
          value={firstbrewed}
          onChange={handleFirstBrewedChange}
        />

        <label>Brewers Tips</label>
        <input
          type="text"
          name="brewerstips"
          value={brewerstips}
          onChange={handleBrewersTipsChange}
        />

        <label>Attenuation Level</label>
        <input
          type="number"
          name="attenuationlevel"
          value={attenuationlevel}
          onChange={handleAttenuationLevelChange}
        />

        <label>Contributed by</label>
        <input
          type="text"
          name="contributedby"
          value={contributedby}
          onChange={handleContributedByChange}
        />

        <button type="submit">Create beer</button>
      </form>
    </div>
  );
}

export default NewBeer;
