import { useState } from "react";
import axios from "axios";

function CreateBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted");
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", {
        name,
        tagline,
        description,
        first_brewed: firstBrewed,
        brewer_tips: brewersTips,
        attenuation_leve: attenuationLevel,
        contributed_by: contributedBy,
      })
      .then((response) => {
        console.log(response.data);
      });
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} className="flex-c">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <label>Tagline:</label>
        <input
          type="text"
          name="tagline"
          onChange={(e) => setTagline(e.target.value)}
        ></input>
        <label>Description:</label>
        <input
          type="text"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <label>First Brewed:</label>
        <input
          type="text"
          name="first_brewed"
          onChange={(e) => setFirstBrewed(e.target.value)}
        ></input>
        <label>Brewers Tips:</label>
        <input
          type="text"
          name="brewers_tips"
          onChange={(e) => setBrewersTips(e.target.value)}
        ></input>
        <label>Attenuation Leve:</label>
        <input
          type="number"
          name="attenuation_level"
          onChange={(e) => setAttenuationLevel(e.target.value)}
        ></input>
        <label>Contributed By:</label>
        <input
          type="text"
          name="contributed_by"
          onChange={(e) => setContributedBy(e.target.value)}
        ></input>
        <button className="buttony">Submit</button>
      </form>
    </div>
  );
}

export default CreateBeer;
