import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddBeer() {
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [tagline, setTagline] = useState();
  const [description, setDescription] = useState();
  const [firstBrewed, setFirstBrewed] = useState();
  const [brewersTips, setBrewersTips] = useState();
  const [attenuationLevel, setAttenuationLevel] = useState();
  const [contributedBy, setContributedBy] = useState();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleTaglineChange = (event) => {
    setTagline(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleFirstBrewedChange = (event) => {
    setFirstBrewed(event.target.value);
  };

  const handleBrewersTipsChange = (event) => {
    setBrewersTips(event.target.value);
  };

  const handleAttenuationLevelChange = (event) => {
    setAttenuationLevel(event.target.value);
  };

  const handleContributedByChange = (event) => {
    setContributedBy(event.target.value);
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    const newBeer = {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation_level: attenuationLevel,
      contributed_by: contributedBy,
    };
    try {
      const response = await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        newBeer
      );
      navigate("/beers");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          onChange={handleNameChange}
          value={name}
        />
        <br />
        <label htmlFor="tagline">Tagline: </label>
        <input
          type="text"
          name="tagline"
          onChange={handleTaglineChange}
          value={tagline}
        />
        <br />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          name="description"
          onChange={handleDescriptionChange}
          value={description}
        />
        <br />
        <label htmlFor="first_brewed">First Brewed: </label>
        <input
          type="text"
          name="first_brewed"
          onChange={handleFirstBrewedChange}
          value={firstBrewed}
        />
        <br />
        <label htmlFor="brewers_tips">Tips: </label>
        <input
          type="text"
          name="brewers_tips"
          onChange={handleBrewersTipsChange}
          value={brewersTips}
        />
        <br />
        <label htmlFor="attenuation_level">Attenuation Level: </label>
        <input
          type="number"
          name="attenuation_level"
          onChange={handleAttenuationLevelChange}
          value={attenuationLevel}
        />
        <br />
        <label htmlFor="contributed_by">Contributed By:</label>
        <input
          type="text"
          name="contributed_by"
          onChange={handleContributedByChange}
          value={contributedBy}
        />
        <br />
        <button onClick={handleSubmitForm}>Agregar</button>
      </form>
    </div>
  );
}

export default AddBeer;
