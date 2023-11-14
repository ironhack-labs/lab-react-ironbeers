import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function AddBeerPage() {

    const [name, setName] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [firsBrewed, setFirstBrewed] = useState("");
    const [contributedBy, setContributedBy] = useState("");
    const [attenuationLevel, setAttenuationLevel] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestBody = {
        name,
        tagline,
        description,
        firsBrewed,
        attenuationLevel,
        contributedBy,
    };

    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', requestBody)
        .then((response) => {
            console.log('Beer Created')
            console.log(response.data)
        })
        .catch((error) => {
            console.log("Error creating beer in the API...");
            console.log(error);
        })
  };

  return (
    <form onSubmit={handleSubmit} className="form">
        
      <label>
        Name
        <br/>
        <input type="text" name="name" value={name} onChange={(e) => {setName(e.target.value)}}  />
      </label>
      <label>
        Tagline
        <br/>
        <input type="text" name="tagline" value={tagline} onChange={(e) => {setTagline(e.target.value)}} />
      </label>
      <label>
        Description
        <br/>
        <textarea name="Description" value={description} onChange={(e) => {setDescription(e.target.value)}} />
      </label>
      <label>
      <br/>
        First Brewed
        <br/>
        <input type="text" name="first-brewed" value={firsBrewed} onChange={(e) => {setFirstBrewed(e.target.value)}}/>
      </label>
      <label>
        Brewer's Tips
        <br/>
        <input type="text" name="brewers_tips" value={attenuationLevel} onChange={(e) => {setAttenuationLevel(e.target.value)}}/>
      </label>
      <label>
        Attenuation Level
        <br/>
        <input type="number" name="attenuation_level" value={contributedBy} onChange={(e) => {setContributedBy(e.target.value)}} />
      </label>
      <button>Add Beer</button>
    </form>
  );
}

export default AddBeerPage;
