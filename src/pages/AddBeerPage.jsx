import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddBeerPage() {
  const [name, setBeerName] = useState("");
  const [tagline, setBeerTagline] = useState("");
  const [description, setBeerDescription] = useState("");
  const [first_brewed, setBeerFirstBrewed] = useState("");
  const [brewers_tips, setBeerBrewersTips] = useState("");
  const [attenuation_level, setBeerAttenuationLevel] = useState(0);
  const [contributed_by, setBeerContributedBy] = useState("");

  const navigate = useNavigate();

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
      .then(() => {
        setBeerName("");
        setBeerTagline("");
        setBeerDescription("");
        setBeerFirstBrewed("");
        setBeerBrewersTips("");
        setBeerAttenuationLevel(1);
        setBeerContributedBy("");

        navigate("/beers");
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          {" "}
          Name:
          <input
            type="text"
            name="name"
            onChange={(e) => setBeerName(e.target.value)}
            value={name}
          />
        </label>

        <label>
          {" "}
          Tagline:
          <input
            type="text"
            name="tagline"
            onChange={(e) => setBeerTagline(e.target.value)}
            value={tagline}
          />
        </label>

        <label>
          {" "}
          Description:
          <textarea
            type="text"
            name="description"
            onChange={(e) => setBeerDescription(e.target.value)}
            value={description}
          />
        </label>

        <label>
          {" "}
          First Brewed:
          <input
            type="text"
            name="first_brewed"
            onChange={(e) => setBeerFirstBrewed(e.target.value)}
            value={first_brewed}
          />
        </label>

        <label>
          {" "}
          Brewers Tips:
          <input
            type="text"
            name="brewers_tips"
            onChange={(e) => setBeerBrewersTips(e.target.value)}
            value={brewers_tips}
          />
        </label>

        <label>
          {" "}
          Attenuation Level:
          <input
            type="number"
            name="attenuation_level"
            onChange={(e) => setBeerAttenuationLevel(e.target.value)}
            value={attenuation_level}
          />
        </label>

        <label>
          {" "}
          Contributed By:
          <input
            type="text"
            name="contributed_by"
            onChange={(e) => setBeerContributedBy(e.target.value)}
            value={contributed_by}
          />
        </label>

        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
