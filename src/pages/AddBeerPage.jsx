import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddBeerPage() {
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

    const body = {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation_level: attenuationLevel,
      contributed_by: contributedBy,
    };

    console.log("Submitted: ", body);

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
      .then(() => {
        setName("");
        setTagline("");
        setDescription("");
        setFirstbrew("");
        setBrewtips("");
        setLevel(0);
        setContribute("");
        navigate("/");
      });
  };

    return(
        <div>
        <h1>Add new beers</h1>
  
        <form onSubmit={handleSubmit}>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <br />
          
  
          <label>Tagline: </label>
          <input
            type="text"
            name="tagline"
            onChange={(e) => setTagline(e.target.value)}
            value={tagline}
          />
          <br />
         
          <label>Description: </label>
          <textarea
            type="text"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            lass="form-control"
          />
          <br />
          
          <label>First Brewed: </label>
          <input
            type="text"
            name="first_brewed"
            onChange={(e) => setFirstBrewed(e.target.value)}
            value={firstBrewed}
            class="form-control"
          />
          <br />
          
          <label>Brewer's Tips: </label>
          <input
            type="text"
            name="brewers_tips"
            onChange={(e) => setBrewersTips(e.target.value)}
            value={brewersTips}
          />
          <br />
          
          <label>Attenuation Level: </label>
          <input
            type="number"
            name="attenuation_level"
            onChange={(e) => setAttenuationLevel(e.target.value)}
            value={attenuationLevel}
          />
          <br />
          
          <label>Contributed By: </label>
          <input
            type="text"
            name="contributed_by"
            onChange={(e) => setContributedBy(e.target.value)}
            value={contributedBy}
          />
          <br />
          
  
          <button type="submit">Add Beer</button>
        </form>
      </div>

    )
}

export default AddBeerPage;
