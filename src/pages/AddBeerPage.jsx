/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddBeerPage() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const newBeer = {
      name: name,
      tagline: tagline,
      description: description,
      firstBrewed: firstBrewed,
      brewersTips: brewersTips,
      attenuationLevel: attenuationLevel,
      contributedBy: contributedBy,
    };
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
      .then((result) => {
      console.log(result.data); 
        navigate(`/beers`);

        console.log(result);

      })
      .catch((err) => {
        console.log(err);
      });
  }

  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  return (
    <div >
      <form className="addBeerForm" onSubmit={handleSubmit}>
        <label className="addBeerLabel">
          Name
          <input
            type="text"
            placeholder="Insert the beer's name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>

        <label>
          Tagline
          <input
            type="text"
            placeholder="Tagline"
            onChange={(e) => {
              setTagline(e.target.value);
            }}
          />
        </label>

        <label>
          Description
          <input
            type="text"
            placeholder="Description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </label>

        <label>
          First Brewed
          <input
            type="text"
            placeholder="First time brewed"
            onChange={(e) => {
              setFirstBrewed(e.target.value);
            }}
          />
        </label>

        <label>
          Brewer's Tips
          <input
            type="text"
            placeholder="Brewer's tips"
            onChange={(e) => {
              setBrewersTips(e.target.value);
            }}
          />
        </label>

        <label>
          Attenuation Level
          <input
            type="number"
            placeholder="Attenuation level"
            onChange={(e) => {
              setAttenuationLevel(e.target.value);
            }}
          />
        </label>

        <label>
          Contributed By
          <input
            type="text"
            placeholder="Contributed by"
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
