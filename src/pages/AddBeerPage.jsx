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
  const [contrubutedBy, setContributedBy] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", {
        name: name,
        taglin: tagline,
        first_brewed: firstBrewed,
        description: description,
        attenuation_level: attenuationLevel,
        brewers_tips: brewersTips,
        contributed_by: contrubutedBy,
      })
      .then(function (response) {
        console.log(response);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h3>Add beer</h3>

      <form onSubmit={handleSubmit}>
        <label>
          Beer name
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
          <input
            type="text"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </label>

        <label>
          First Brewed
          <input
            type="text"
            name="firstBrewed"
            onChange={(e) => setFirstBrewed(e.target.value)}
            value={firstBrewed}
          />
        </label>

        <label>
          Brewer&aposs Tips
          <input
            type="text"
            name="brewersTips"
            onChange={(e) => setBrewersTips(e.target.value)}
            value={brewersTips}
          />
        </label>

        <label>
          Attenuation Level
          <input
            type="number"
            name="attenuationLevel"
            onChange={(e) => setAttenuationLevel(e.target.value)}
            value={attenuationLevel}
          />
        </label>

        <label>
          Contributed By
          <input
            type="text"
            name="contributedBy"
            onChange={(e) => setContributedBy(e.target.value)}
            value={contrubutedBy}
          />
        </label>

        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
