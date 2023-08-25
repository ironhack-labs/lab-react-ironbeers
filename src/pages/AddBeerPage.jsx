import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddBeerPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation_level: attenuationLevel,
      contributed_by: contributedBy,
    };

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
      .then(() => {
        setName("");
        setTagline("");
        setDescription("");
        setFirstBrewed("");
        setBrewersTips("");
        setAttenuationLevel(0);
        setContributedBy("");
        navigate("/");
      });
  };

  return (
    <div>
      <h3>Add a new Beer</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          Tagline
          <input
            type="text"
            name="tagline"
            onChange={(e) => setTagline(e.target.value)}
            value={tagline}
          />
        </label>
        <label>
          Description
          <textarea
            type="text"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </label>
        <label>
          First Brewerd
          <input
            type="text"
            name="first_brewed"
            onChange={(e) => setFirstBrewed(e.target.value)}
            value={firstBrewed}
          />
        </label>
        <label>
          Brewer's Tips
          <input
            type="text"
            name="brewers_tips"
            onChange={(e) => setBrewersTips(e.target.value)}
            value={brewersTips}
          />
        </label>
        <label>
          Attenuation Level
          <input
            type="number"
            name="attenuation_level"
            onChange={(e) => setAttenuationLevel(e.target.value)}
            value={attenuationLevel}
          />
        </label>
        <label>
          Contributed By
          <input
            type="text"
            name="contributed_by"
            onChange={(e) => setContributedBy(e.target.value)}
            value={contributedBy}
          />
        </label>

        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
