import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function NewBeer() {
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
      .post(`${process.env.REACT_APP_APIURL}/new`, newBeer)
      .then((response) => {
        console.log("this is my response", response);
      })

      .catch((err) => console.log("error creating new beer", err));

    //clear the form
    setName("");
    setTagline("");
    setDescription("");
    setFirstBrewed("");
    setBrewersTips("");
    setAttenuationLevel("");
    setContributedBy("");
    navigate("/beers"); //redirect to the route
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label> Name: </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <label> Tagline: </label>
        <input
          type="text"
          name="tagline"
          value={tagline}
          onChange={(e) => {
            setTagline(e.target.value);
          }}
        />

        <label> Description : </label>
        <input
          type="text"
          name="description "
          value={description }
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />

        <label> First Brewed: </label>
        <input
          type="text"
          name="firstBrewed"
          value={firstBrewed}
          onChange={(e) => {
            setFirstBrewed(e.target.value);
          }}
        />

        <label> Brewers Tips: </label>
        <input
          type="text"
          name="brewersTips"
          value={brewersTips}
          onChange={(e) => {
            setBrewersTips(e.target.value);
          }}
        />

        <label>Attenuation Level:</label>
        <input
          type="number"
          name="attenuationLevel"
          value={attenuationLevel}
          onChange={(e) => {
            setAttenuationLevel(e.target.value);
          }}
        />

        <label> Contributed By: </label>
        <input
          type="text"
          name="contributedBy"
          value={contributedBy}
          onChange={(e) => {
            setContributedBy(e.target.value);
          }}
        />
       <button type='submit'>Add Beer</button>

      </form>
    </div>
  );
}
