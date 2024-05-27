import { useState } from "react";
import axios from "axios";

function AddBeerPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      name,
      tagline,
      description,
      first_brewed: firstBrewed,
      brewers_tips:brewersTips,
      attenuation_level:attenuationLevel,
      contributed_by:contributedBy
    }
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", requestBody)
      .then((response) => {
        setName("");
        setTagline("");
        setDescription("");
        setFirstBrewed("");
        setBrewersTips("");
        setAttenuationLevel(0);
        setContributedBy("");        
      })
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input name="name" type="text" value={name}   onChange={(e) => setName(e.target.value)} />

      <label>Tagline</label>
      <input name="tagline" type="text" value={tagline} onChange={(e) => setTagline(e.target.value)} />

      <label>Description</label>
      <textarea name="description" type="text" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

      <label> First Brewed</label>
      <input name="first_brewed" type="text" value={firstBrewed} onChange={(e) => setFirstBrewed(e.target.value)} />

      <label>Brewer's Tips</label>
      <input name="brewers_tips" type="text" value={brewersTips} onChange={(e) => setBrewersTips(e.target.value)}/>

      <label>Attenuation Level</label>
      <input name="attenuation_level" type="number" value={attenuationLevel} onChange={(e) => setAttenuationLevel(e.target.value)}/>

      <label>Contributed By</label>
      <input name="contributed_by" type="text" value={contributedBy} onChange={(e) => setContributedBy(e.target.value)}/>

      <button type="submit">Add Beer</button>
    </form>
  );
}

export default AddBeerPage;
