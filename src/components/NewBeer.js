import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar'

function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [BrewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault()
    axios.post(`${process.env.REACT_APP_APIURL}/new`, {
      name,
      tagline,
      description,
      firstBrewed,
      BrewersTips,
      attenuationLevel,
      contributedBy,
    })
    .then(() => {
        navigate("/beers")
    })
    .catch(error=>console.log(error))
  };
  return (
    <>
    <div>
      <Navbar />
      NewBeer
    </div>
      <h1>Create an New Beer!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        <label>
            Tagline:
            </label>
            <input
            type="text"
            name="tagline"
            value={tagline}
            onChange={(event) => setTagline(event.target.value)}
          />
          <label>
            Description
            </label>
            <input
            type="text"
            name="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <label>
            First Brewed
            </label>
            <input
            type="text"
            name="firstBrewed"
            value={firstBrewed}
            onChange={(event) => setFirstBrewed(event.target.value)}
          />
          <label>
            Brewer Tips
            </label>
            <input
            type="text"
            name="brewerTips"
            value={BrewersTips}
            onChange={(event) => setBrewersTips(event.target.value)}
          />
          <label>
            Attenuation Level
            </label>
            <input
            type="text"
            name="attenuationLevel"
            value={attenuationLevel}
            onChange={(event) => setAttenuationLevel(event.target.value)}
          />
          <label>
            Contributed By
            </label>
            <input
            type="text"
            name="contributedBy"
            value={contributedBy}
            onChange={(event) => setContributedBy(event.target.value)}
          />
          <button>Create</button>
      </form>
    </>
  );
}
      


export default NewBeer;