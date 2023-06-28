import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const apiURL = "https://ih-beers-api2.herokuapp.com/beers";

function AddBeerPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDEscription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewerTips, setBrewerTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  const navigate = useNavigate();

  const createBeer = (e) => {
    e.preventDefault();
    const body = {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: firstBrewed,
      brewers_tips: brewerTips,
      attenuation_level: attenuationLevel,
      contributed_by: contributedBy,
    };

    axios
      .post(`${apiURL}/new`, body)
      .then((response) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="createBeer-container">
      <form onSubmit={createBeer}>
        <label>
          Name :
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Tagline :
          <input
            type="text"
            name="tagline"
            value={tagline}
            onChange={(e) => setTagline(e.target.value)}
          />
        </label>

        <label>
          Description :
          <textarea
            value={description}
            type="text"
            name="description"
            onChange={(e) => setDEscription(e.target.value)}
          ></textarea>
        </label>

        <label>
          First Brewed :
          <input
            value={firstBrewed}
            type="text"
            name="first_brewed"
            onChange={(e) => setFirstBrewed(e.target.value)}
          />
        </label>

        <label>
          Brewer's Tips :
          <input
            value={brewerTips}
            type="text"
            name="brewers_tips"
            onChange={(e) => setBrewerTips(e.target.value)}
          />
        </label>

        <label>
          Attenuation level :
          <input
            value={attenuationLevel}
            type="number"
            name="attenuation_level"
            onChange={(e) => setAttenuationLevel(e.target.value)}
          />
        </label>

        <label>
          Contributed By :
          <input
            value={contributedBy}
            type="text"
            name="contributed_by"
            onChange={(e) => setContributedBy(e.target.value)}
          />
        </label>

        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
