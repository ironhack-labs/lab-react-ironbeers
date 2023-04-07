import { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router";
import axios from "axios";

function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  const navigate = useNavigate();

  
  function handleData(event) {
    event.preventDefault();
    const beerData = {
      name,
      tagline,
      description,
      "first_brewed": firstBrewed,
      "brewers_tips": brewersTips,
      "attenuation_level": attenuationLevel,
      "contributed_by": contributedBy,
    };
    console.log(beerData)
    axios
      .post(`${process.env.REACT_APP_API}/new`,beerData)
      .then((response) => {
        console.log("response....",response)
        navigate("/beers");
      })
      .catch((e) => {
        console.log("error", e);
      });
  }

  return (
    <>
      <Navbar />
      <form onSubmit={handleData}>
        <label>Name:</label>

        <br />
        <input
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br />

        <label>tagline:</label>
        <br />
        <input
          type="text"
          name="tagline"
          value={tagline}
          onChange={(event) => setTagline(event.target.value)}
        />

        <br />

        <label>description:</label>
        <br />
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <br />

        <label>first_brewed:</label>
        <br />
        <input
          type="text"
          name="first_brewed"
          value={firstBrewed}
          onChange={(event) => setFirstBrewed(event.target.value)}
        />

        <br />

        <label>brewers_tips:</label>
        <br />
        <input
          type="text"
          name="brewers_tips"
          value={brewersTips}
          onChange={(event) => setBrewersTips(event.target.value)}
        />

        <br />

        <label>attenuation_level:</label>
        <br />
        <input
          type="number"
          name="attenuation_level"
          value={attenuationLevel}
          onChange={(event) => setAttenuationLevel(event.target.value)}
        />

        <br />

        <label>contributed_by:</label>
        <br />
        <input
          type="text"
          name="contributed_by"
          value={contributedBy}
          onChange={(event) => setContributedBy(event.target.value)}
        />

        <br />

        <button>ADD NEW</button>
      </form>
    </>
  );
}
export default NewBeer;
