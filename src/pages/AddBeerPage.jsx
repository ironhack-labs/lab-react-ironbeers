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
    const newBeer = { name, tagline, description, image_url: imageUrl, first_brewed: firstBrewed, brewers_tips: brewersTips, attenuation_level: Number(attenuationLevel), contributed_by: contributedBy };

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
      .then(() => navigate("/beers"))
      .catch((error) => console.error("Error adding beer:", error));
  };

  return (
    <div className="d-inline-flex flex-column w-100 p-4">
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input className="form-control mb-4" type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <label>Tagline</label>
        <input className="form-control mb-4" type="text" value={tagline} onChange={(e) => setTagline(e.target.value)} />

        <label>Description</label>
        <textarea className="form-control mb-4" rows="3" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

        <label>Image URL</label>
        <input className="form-control mb-4" type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />

        <label>First Brewed</label>
        <input className="form-control mb-4" type="text" value={firstBrewed} onChange={(e) => setFirstBrewed(e.target.value)} />

        <label>Brewer Tips</label>
        <input className="form-control mb-4" type="text" value={brewersTips} onChange={(e) => setBrewersTips(e.target.value)} />

        <label>Attenuation Level</label>
        <input className="form-control mb-4" type="number" value={attenuationLevel} onChange={(e) => setAttenuationLevel(e.target.value)} />

        <label>Contributed By</label>
        <input className="form-control mb-4" type="text" value={contributedBy} onChange={(e) => setContributedBy(e.target.value)} />

        <button className="btn btn-primary btn-round">Add Beer</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
