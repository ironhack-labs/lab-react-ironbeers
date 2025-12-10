import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddBeerPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirstBrewed] = useState("");
  const [brewers_tips, setBrewersTips] = useState("");
  const [attenuation_level, setAttenuationLevel] = useState(0);
  const [contributed_by, setContributedBy] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBeer = {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level: Number(attenuation_level), 
      contributed_by,
    };

    try {
      await axios.post("https://beers-api.edu.ironhack.com/beers/new", newBeer);
     
      navigate("/beers");
    } catch (error) {
      console.error("Error adding new beer:", error);
    }
  };

  return (
    <div className="add-beer-page">
      <h1>New Beer</h1>

      <form onSubmit={handleSubmit}>
        
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Tagline</label>
        <input
          type="text"
          name="tagline"
          value={tagline}
          onChange={(e) => setTagline(e.target.value)}
        />

        <label>Description</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <label>First Brewed</label>
        <input
          type="text"
          name="first_brewed"
          value={first_brewed}
          onChange={(e) => setFirstBrewed(e.target.value)}
        />

        <label>Brewers Tips</label>  
        <input
          type="text"
          name="brewers_tips"
          value={brewers_tips}
          onChange={(e) => setBrewersTips(e.target.value)}
        />

        <label>Attenuation Level</label>
        <input
          type="number"
          name="attenuation_level"
          value={attenuation_level}
          onChange={(e) => setAttenuationLevel(e.target.value)}
          required
        />

        <label>Contributed By</label>
        <input
          type="text"
          name="contributed_by"
          value={contributed_by}
          onChange={(e) => setContributedBy(e.target.value)}
        />

       
        <button type="submit">Add Beer</button>
      </form>
    </div>
  );
}

export default AddBeerPage;