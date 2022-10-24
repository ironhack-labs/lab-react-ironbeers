import Header from "./Header";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateBeer({fetchBeersCB}) {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first, setFirst] = useState("");
  const [tips, setTips] = useState("");
  const [attenuation, setAttenuation] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBeer = {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: first,
      brewers_tips: tips,
      attenuation_level: attenuation,
      contributed_by: contributedBy
    };
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
      .then((response) => {
        fetchBeersCB();
        navigate("/")
        })
      .catch((e) => console.log("error creating apartment on API", e));

    // //clear form
    // setTitle("");
    // setImg("");
    // setPrice(0);
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
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <label>First Brewed</label>
        <br />
        <input
          type="text"
          value={first}
          onChange={(e) => setFirst(e.target.value)}
        />
        <br />
        <label>Brewers Tips</label>
        <br />
        <input
          type="text"
          value={tips}
          onChange={(e) => setTips(e.target.value)}
        />
        <br />
        <label>Attenuation Level</label>
        <br />
        <input
          type="number"
          value={attenuation}
          onChange={(e) => setAttenuation(e.target.value)}
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
