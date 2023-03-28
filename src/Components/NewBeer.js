import axios from "axios";
import "./NewBeer.css";
import { useState } from "react";

const NewBeer = () => {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributed, setContributed] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      name: name,
      tagline: tagline,
      description: description,
      brewers_tips: brewersTips,
      attenuation_level: attenuationLevel,
      contributed_by: contributed,
    };
    axios
    .post('https://ih-beers-api2.herokuapp.com/beers/new',body)
    .then(response=> {
        setName('')
        setTagline('')
        setDescription('')
        setFirstBrewed('')
        setBrewersTips('')
        setAttenuationLevel(0)
        setContributed('')
    });
  };

  return (
   <div> 
    <h3>Create a new Beer</h3>

   <div className="create-new-beer">
      <form className = "create-form" onSubmit={handleSubmit}>
        <label>Name:</label>

        <input
          className="small-input"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label> Tagline </label>
        <input
          className="small-input"
          type="text"
          name="tagline"
          value={tagline}
          onChange={(e) => setTagline(e.target.value)}
        />

        <label> Description </label>
        <input
          className="large-input"
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label> First Brewed</label>
        <input
        className="small-input"
          type="text"
          name="first-brewed"
          value={firstBrewed}
          onChange={(e) => setFirstBrewed(e.target.value)}
        />

        <label> Brewers Tips </label>
        <input
        className="small-input"
          type="text"
          name="brewers-tips"
          value={brewersTips}
          onChange={(e) => setBrewersTips(e.target.value)}
        />

        <label> Attenuation Level </label>
        <input
        className="small-input"
          type="number"
          name="attenuation-level"
          value={attenuationLevel}
          onChange={(e) => setAttenuationLevel(e.target.value)}
        />

        <label> Contributed By </label>
        <input
        className="small-input"
          type="text"
          name="contributed-by"
          value={contributed}
          onChange={(e) => setContributed(e.target.value)}
        />
        <button type = "submit"> Create New Beer </button>
      </form>
    </div>
    </div>
  );
};

export default NewBeer;
