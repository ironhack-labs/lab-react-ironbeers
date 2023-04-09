import NavBar from "./navbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState("");
  const [contributedBy, setContributedBy] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const newBeer = {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation_level: attenuationLevel,
      contributed_by: contributedBy,
    };

    axios
      .post(process.env.REACT_APP_APIURL+"/new", newBeer)
      
      .then(() => {
        navigate("/beers");
      })
      .catch((error) => {
        console.log("Error creating New Beer:", error);
        console.log("Error message:", error.message);
        console.log("Error response:", error.response);
      });
       }

  return (
    <>
      <nav>
        <NavBar />
      </nav>
      
      <form onSubmit={handleSubmit} class="container mt-5">
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" name="name" id="name" class="form-control" placeholder="Sagres" value={name} onChange={(event) => setName(event.target.value)} />
  </div>
  <div class="form-group">
    <label for="tagline">Tagline</label>
    <input type="text" name="tagline" id="tagline" class="form-control" value={tagline} onChange={(event) => setTagline(event.target.value)} />
  </div>
  <div class="form-group">
    <label for="description">Description</label>
    <textarea name="description" id="description" class="form-control" rows="5" cols="60" value={description} onChange={(event) => setDescription(event.target.value)}></textarea>
  </div>
  <div class="form-group">
    <label for="firstBrewed">First Brewed</label>
    <input type="date" name="firstBrewed" id="firstBrewed" class="form-control" value={firstBrewed} onChange={(event) => setFirstBrewed(event.target.value)} />
  </div>
  <div class="form-group">
    <label for="brewersTips">Brewers Tips</label>
    <input type="text" name="brewersTips" id="brewersTips" class="form-control" value={brewersTips} onChange={(event) => setBrewersTips(event.target.value)} />
  </div>
  <div class="form-group">
    <label for="attenuationLevel">Attenuation Level</label>
    <input type="number" name="attenuationLevel" id="attenuationLevel" class="form-control" value={attenuationLevel} onChange={(event) => setAttenuationLevel(event.target.value)} />
  </div>
  <div class="form-group">
    <label for="contributedBy">Contributed By</label>
    <input type="text" name="contributedBy" id="contributedBy" class="form-control" placeholder="david" value={contributedBy} onChange={(event) => setContributedBy(event.target.value)} />
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </>
  );
}

export default NewBeer;
