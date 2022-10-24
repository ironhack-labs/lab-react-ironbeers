import Header from "../components/Header";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateBeer(props) {
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

    const newBeer = {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation_level: attenuationLevel,
      contributed_by: contributedBy
    };
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
      .then((response) => {
        props.CallBack();
        navigate("/beers")
        })
      .catch((err) => console.log("error creating Beers", err));
  };

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Tagline</label>
        <br />
        <input
          type="text"
          value={tagline}
          onChange={(e) => setTagline(e.target.value)}
        />
        <br />
        <label>Description</label>
        <br />
        <textarea
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <label>First Brewed</label>
        <br />
        <input
          type="text"
          value={firstBrewed}
          onChange={(e) => setFirstBrewed(e.target.value)}
        />
        <br />
        <label>Brewers Tips</label>
        <br />
        <input
          type="text"
          value={brewersTips}
          onChange={(e) => setBrewersTips(e.target.value)}
        />
        <br />
        <label>Attenuation Level</label>
        <br />
        <input
          type="number"
          value={attenuationLevel}
          onChange={(e) => setAttenuationLevel(e.target.value)}
        />
        <br />
        <label>Contributed By</label>
        <br />
        <input
          type="text"
          value={contributedBy}
          onChange={(e) => setContributedBy(e.target.value)}
        />
        <br />
        <button type="submit">ADD NEW</button>
      </form>
    </>
  );
}

export default CreateBeer;