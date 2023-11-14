import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const api_url = "https://ih-beers-api2.herokuapp.com/beers/new";

function AddBeerPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirstBrewed] = useState("");
  const [brewers_tips, setBrewersTips] = useState("");
  const [attenuation_level, setAttenuationLevel] = useState(0);
  const [contributed_by, setContributedBy] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: first_brewed,
      brewers_tips: brewers_tips,
      attenuation_level: attenuation_level,
      contributed_by: contributed_by,
      submit: submit,
    };

    axios
      .post(api_url, requestBody)
      .then((response) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>ADD A BEER</h1>

      <form onSubmit={handleSubmit}>
        <label>
          name
          <input
            type="text"
            name="name"
            placeholder="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>

        <label>
          tagline
          <input
            type="text"
            name="tagline"
            placeholder="tagline"
            value={tagline}
            onChange={(e) => {
              setTagline(e.target.value);
            }}
          />
        </label>

        <label>
          description
          <input
            type="text"
            name="description"
            placeholder="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </label>

        <label>
          first brewed
          <input
            type="text"
            name="first brewed"
            placeholder="first brewed"
            value={first_brewed}
            onChange={(e) => {
              setFirstBrewed(e.target.value);
            }}
          />
        </label>

        <label>
          brewer's tips
          <input
            type="text"
            name="brewers tips"
            placeholder="brewers tips"
            value={brewers_tips}
            onChange={(e) => {
              setBrewersTips(e.target.value);
            }}
          />
        </label>

        <label>
          attenuation level
          <input
            type="number"
            name="attenuation level"
            placeholder="attenuation level"
            value={attenuation_level}
            onChange={(e) => {
              setAttenuationLevel(e.target.value);
            }}
          />
        </label>

        <label>
          contributed by
          <input
            type="text"
            name="contributed by"
            placeholder="contributed by"
            value={contributed_by}
            onChange={(e) => {
              setContributedBy(e.target.value);
            }}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
