import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBeerPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState("");
  const [contributedBy, setContributedBy] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation_level: attenuationLevel,
      contributed_by: contributedBy,
    };

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", requestBody)
      .then((response) => {
        navigate("/new-beer");
      })
      .catch((error) => {
        console.log("Something went wrong with the beers details :(");
        console.log(error);
      });
  };

  return (
    <div className="AddBeerPage">
      <form onSubmit={handleSubmit}>
        <label className="InputBeer">
          Name
          <input
            type="text"
            name="name"
            required={true}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <label className="InputBeer">
          Tagline
          <input
            type="text"
            name="tagline"
            required={true}
            onChange={(e) => {
              setTagline(e.target.value);
            }}
          />
        </label>
        <label className="InputBeer">
          Description
          <textarea
            type="text"
            name="description"
            required={true}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </label>
        <label className="InputBeer">
          First Brewed
          <input
            type="text"
            name="first_brewed"
            required={true}
            onChange={(e) => {
              setFirstBrewed(e.target.value);
            }}
          />
        </label>
        <label className="InputBeer">
          Brewer's Tips
          <input
            type="text"
            name="brewers_tips"
            required={true}
            onChange={(e) => {
              setBrewersTips(e.target.value);
            }}
          />
        </label>
        <label className="InputBeer">
          Attenuation Level
          <input
            type="number"
            name="attenuation_level"
            required={true}
            onChange={(e) => {
              setAttenuationLevel(e.target.value);
            }}
          />
        </label>
        <label className="InputBeer">
          Contributed By
          <input
            type="text"
            name="contributed_by"
            required={true}
            onChange={(e) => {
              setContributedBy(e.target.value);
            }}
          />
        </label>
        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
