import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddBeerPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBeer = {
      name: name,
      tagline: tagline,
      description: description,
      image_url: imageUrl,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation_level: Number(attenuationLevel), 
      contributed_by: contributedBy,
    };

    axios
      .post("https://ironhack.com", newBeer)
      .then((response) => {
        console.log(response.data.message);
        navigate("/beers");
      })
      .catch((error) => {
        console.error("Error creating the new beer:", error);
      });
  };

  return (
    <div className="add-beer">
      <h1>Add a New Beer</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <label>Tagline</label>
        <input type="text" value={tagline} onChange={(e) => setTagline(e.target.value)} />

        <label>Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />

        <label>Image URL</label>
        <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />

        <label>First Brewed</label>
        <input type="text" value={firstBrewed} onChange={(e) => setFirstBrewed(e.target.value)} />

        <label>Brewers Tips</label>
        <input type="text" value={brewersTips} onChange={(e) => setBrewersTips(e.target.value)} />

        <label>Attenuation Level</label>
        <input type="number" value={attenuationLevel} onChange={(e) => setAttenuationLevel(e.target.value)} />

        <label>Contributed By</label>
        <input type="text" value={contributedBy} onChange={(e) => setContributedBy(e.target.value)} />

        <button type="submit">Create Beer</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
