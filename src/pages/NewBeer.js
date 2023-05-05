import { Link } from "react-router-dom";
import HeaderImage from "../assets/header.png";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  const navigate = useNavigate();

  const handleNameChange = (e) => setName(e.target.value);

  const handleTaglineChange = (e) => setTagline(e.target.value);

  const handleDescriptionChange = (e) => setDescription(e.target.value);

  const handleFirstBrewedChange = (e) => setFirstBrewed(e.target.value);

  const handleBrewersTipsChange = (e) => setBrewersTips(e.target.value);

  const handleAttenuationLevelChange = (e) =>
    setAttenuationLevel(e.target.value);

  const handleContributedByChange = (e) => setContributedBy(e.target.value);

  const handleSubmit = async(e) => {
    try {
        e.preventDefault();
    
        const body = {
          name: name,
          tagline: tagline,
          description: description,
          firstBrewed: firstBrewed,
          brewersTips: brewersTips,
          attenuationLevel: attenuationLevel,
          contributedBy: contributedBy,
        };
    
        await axios
          .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
          .then((response) => {
            console.log(response)
            // Navigate to the Homepage
            navigate("/");
          });
    }
    catch (err) {
        return <p>No beers found!</p>
    }
  }
  return (
    <div>
      <header>
        <Link to="/">
          <img src={HeaderImage} alt="Header" />
        </Link>
      </header>

      <div className="AddNewBeerPage">
        <h3>Add new beer</h3>

        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
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
            name="first brewed"
            value={firstBrewed}
            onChange={handleFirstBrewedChange}
          />

          <label>Brewers tips</label>
          <input
            type="text"
            name="brewers tips"
            value={brewersTips}
            onChange={handleBrewersTipsChange}
          />

          <label>Attenuation level</label>
          <input
            type="number"
            name="attenuation level"
            value={attenuationLevel}
            onChange={handleAttenuationLevelChange}
          />

          <label>Contributed by</label>
          <input
            type="text"
            name="contributed by"
            value={contributedBy}
            onChange={handleContributedByChange}
          />

          <button type="submit">Create new beer</button>
        </form>
      </div>
    </div>
  );
}

export default NewBeer;
