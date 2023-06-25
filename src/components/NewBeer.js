import Header from "./Header";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewBeer.css";

function NewBeer() {
  const [beerName, setBeerName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState("");
  const [contributedBy, setContributedBy] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBeer = {
      name: beerName,
      tagline: tagline,
      description: description,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation_level: attenuationLevel,
      contributedBy: contributedBy,
    };

    axios
      .post(`${process.env.REACT.APP.API.URL}/beers`, newBeer)
      .then((response) => {
        console.log(response.data.message);
        navigate("/beers");
      })
      .catch((e) => console.log("error creating new beer"));
  };

  return (
    <div className="newBeer">
      <Header />
      <h1>Add a New Beer</h1>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={beerName}
            onChange={(e) => {
              setBeerName(e.target.value);
            }}
          />
        </label>

        <label>
          Tagline:
          <input
            type="text"
            tagline="tagline"
            value={tagline}
            onChange={(e) => {
              setTagline(e.target.value);
            }}
          />
        </label>

        <label>
          Description:
          <input
            type="textarea"
            name="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </label>

        <label>
          Brewer's Tips:
          <input
            type="text"
            name="brewersTips"
            value={brewersTips}
            onChange={(e) => {
              setBrewersTips(e.target.value);
            }}
          />
        </label>

        <label>
          First Brewed:
          <input
            type="text"
            name="firstBrewed"
            value={firstBrewed}
            onChange={(e) => {
              setFirstBrewed(e.target.value);
            }}
          />
        </label>

        <label>
          Attenuation Level:
          <input
            type="text"
            name="attenuationLevel"
            value={attenuationLevel}
            onChange={(e) => {
              setAttenuationLevel(e.target.value);
            }}
          />
        </label>

        <label>
          Contributed By:
          <input
            type="text"
            name="contributedBy"
            value={contributedBy}
            onChange={(e) => {
              setContributedBy(e.target.value);
            }}
          />
        </label>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default NewBeer;
