import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [description, setDescription] = useState("");
  const [brewers_tips, setBrewersTips] = useState("");
  const [attenuation_level, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  const navigate = useNavigate();

  const handleName = (e) => setName(e.target.value);
  const handleTagline = (e) => setTagline(e.target.value);
  const handleFirstBrewed = (e) => setFirstBrewed(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleBrewersTips = (e) => setBrewersTips(e.target.value);
  const handleAttenuationLevel = (e) => setAttenuationLevel(e.target.value);
  const handleContributedBy = (e) => setContributedBy(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      name,
      tagline,
      firstBrewed,
      description,
      brewers_tips,
      attenuation_level,
      contributedBy,
    };

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
      .then((response) => {
        console.log(response);

        setName("");
        setTagline("");
        setFirstBrewed("");
        setDescription("");
        setBrewersTips("");
        setAttenuationLevel(0);
        setContributedBy("");
        navigate("/beers");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="new-beer">
      <h2>Create New Beer</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={name} onChange={handleName} />

        <label htmlFor="tagline">Tagline</label>
        <input
          type="text"
          name="tagline"
          value={tagline}
          onChange={handleTagline}
        />

        <label htmlFor="firstBrewed">First Brewed</label>
        <input
          type="text"
          name="firstBrewed"
          value={firstBrewed}
          onChange={handleFirstBrewed}
        />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={handleDescription}
        />

        <label htmlFor="brewersTips">Brewers Tips</label>
        <input
          type="text"
          name="brewersTips"
          value={brewers_tips}
          onChange={handleBrewersTips}
        />

        <label htmlFor="attenuationLevel">Attenuation Level</label>
        <input
          type="text"
          name="attenuationLevel"
          value={attenuation_level}
          onChange={handleAttenuationLevel}
        />

        <label htmlFor="contributedBy">Contributed By</label>
        <input
          type="text"
          name="contributedBy"
          value={contributedBy}
          onChange={handleContributedBy}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewBeer;
