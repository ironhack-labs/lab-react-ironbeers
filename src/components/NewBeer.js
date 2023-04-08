import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";

function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  const navigate = useNavigate();

  
  const handleSubmitCreateBeer = (event) => {
    event.preventDefault();
    const newBeer = {
      name,
      tagline,
      description,
      "first_brewed": firstBrewed,
      "brewers_tips":brewersTips,
      "attenuation_level":attenuationLevel,
      "contributed_by":contributedBy,
    };

    console.log(newBeer)

    axios.post(`${process.env.REACT_APP_APIURL}/new`,newBeer)
    .then(()=>{
        navigate("/beers")
    })
    .catch(error=>console.log("Getting error during post...",error))
  };
  return (
    <>
      <header>
          <Link to={"/"}>Home</Link>
        </header>

      <h1>Create a new beer!</h1>
      <form onSubmit={handleSubmitCreateBeer}>
        <label>Name</label>
        <br />
        <input
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <label>Tagline</label>
        <br />
        <input
          type="text"
          name="tagline"
          value={tagline}
          onChange={(event) => setTagline(event.target.value)}
        />
        <br />
        <label>Description</label>
        <br />
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <br />
        <label>First Brewed</label>
        <br />
        <input
          type="date"
          name="firstBrewed"
          value={firstBrewed}
          onChange={(event) => setFirstBrewed(event.target.value)}
        />
        
        <br />
        <label>Brewers Tips</label>
        <br />
        <input
          type="text"
          name="brewersTips"
          value={brewersTips}
          onChange={(event) => setBrewersTips(event.target.value)}
        />
        <br />
        <label>Attenuation Level</label>
        <br />
        <input
          type="number"
          name="attenuationLevel"
          value={attenuationLevel}
          onChange={(event) => setAttenuationLevel(event.target.value)}
        />
        <br />
        <label>Contributed By</label>
        <br />
        <input
          type="text"
          name="contributedBy"
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