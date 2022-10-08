import { useState } from "react";
import axios from "axios";

function NewBeer(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [tagline, setTagline] = useState("");
  const [first_brewed, setFirst] = useState("");
  const [brewers_tips, setBrewers] = useState("");
  const [attenuation_level, setAttenuation] = useState("");
  const [contributed_by, setContributed] = useState("");

  const handleSubmit = (e) => {                        
    e.preventDefault();
    const requestBody = { name, description, tagline, first_brewed, brewers_tips, attenuation_level, contributed_by };
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers ", requestBody)
      .then((response) => {
        setName("");
        setDescription("");
        setTagline("");
        setFirst("");
        setBrewers("");
        setAttenuation("");
        setContributed("");
        //props.refreshBeer();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="">
  

     <form onSubmit={handleSubmit} className="form-create-beer">  
        <label>Title:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Tagline:</label>
        <input
          type="text"
          name="tagline"
          value={tagline}
          onChange={(e) => setTagline(e.target.value)}
        />

      <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>First Brewers :</label>
        <input
          type="text"
          name="first_brewed"
          value={first_brewed}
          onChange={(e) => setFirst(e.target.value)}
        />

        <label>Brewers Tips:</label>
        <input
          type="text"
          name="brewers_tips"
          value={brewers_tips}
          onChange={(e) => setBrewers(e.target.value)}
        />

        <label>Attenuation Level:</label>
        <input
          type="text"
          name="attenuation_level"
          value={attenuation_level}
          onChange={(e) => setAttenuation(e.target.value)}
        />

        <label>contributed by:</label>
        <input
          type="text"
          name="contributed_by"
          value={contributed_by}
          onChange={(e) => setContributed(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewBeer;
