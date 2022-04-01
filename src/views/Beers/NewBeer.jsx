import React, {useState} from "react";
import axios from "axios";
import "./Beers.css";

const NewBeer=()=>{
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewerTips, setBrewerTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleTagline = (e) => setTagline(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleFirstBrewed = (e) => setFirstBrewed(e.target.value);
  const handleBrewerTips = (e) => setBrewerTips(e.target.value);
  const handleAttenuationLevel = (e) => setAttenuationLevel(e.target.value);
  const handleContributedBy = (e) => setContributedBy(e.target.value);

  const handleCreate = (e) => {
    e.preventDefault();
    const newBeer = {
      name,
      tagline,
      description,
      first_brewed: firstBrewed,
      brewer_tips: brewerTips,
      attenuation_level: attenuationLevel,
      contributed_by: contributedBy,
    };

    axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer);

    setName("");
    setTagline("");
    setDescription("");
    setFirstBrewed("");
    setBrewerTips("");
    setAttenuationLevel(0);
    setContributedBy("");
  };
    return (
      <form onSubmit={handleCreate}>
        <label>
          Name
          <input type="text" name="name" onChange={handleName} />
        </label>
        <label>
          Tagline
          <input type="text" name="tagline" onChange={handleTagline} />
        </label>
        <label>
          Description
          <input type="text" name="description" onChange={handleDescription} />
        </label>
        <label>
          First Brewed
          <input type="text" name="first_brewed" onChange={handleFirstBrewed} />
        </label>
        <label>
          Brewers Tips
          <input type="text" name="brewers_tips" onChange={handleBrewerTips} />
        </label>
        <label>
          Attenuation Level
          <input
            type="number"
            name="attenuation_level "
            onChange={handleAttenuationLevel}
          />
        </label>
        <label>
          Contributed By
          <input type="text" name="contributed_by" onChange={handleContributedBy} />
        </label>
        <input type="submit" value="ADD NEW" />
      </form>
    );
}

export default NewBeer;