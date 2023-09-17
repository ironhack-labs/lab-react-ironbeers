import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBeerPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState("");
  const [brewerTips, setBrewerTips] = useState("");
  const [contributor, setContributor] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();
    const body = {
      name: name,
      image_url: image,
      tagline: tagline,
      description: description,
      attenuation_level: attenuationLevel,
      brewers_tips: brewerTips,
      contributed_by: contributor,
    };
    axios
      .post(`${import.meta.env.VITE_API_URL}/beers/new`, body)
      .then((response) => {
        navigate("/")
      });
  };
  return (
    <div>
      <h3>Add a new beer</h3>
      <form onSubmit={HandleSubmit}>
        <label>Name</label>
        <div>
          <input
            type="text"
            name="name"
            onChange={(e) => {
              setName(e.target.value);
              value = { name };
            }}
          />{" "}
        </div>
        <label>Image</label>
        <div>
          <input
            type="text"
            name="image"
            onChange={(e) => {
              setImage(e.target.value);
              value = { image };
            }}
          />
        </div>{" "}
        <div>
          <label>Tagline</label>
          <input
            type="text"
            name="tagline"
            onChange={(e) => {
              setTagline(e.target.value);
              value = { tagline };
            }}
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type="text"
            name="description"
            onChange={(e) => {
              setDescription(e.target.value);
              value = { description };
            }}
          />
        </div>
        <div>
          <label>Attenutation level</label>
          <input
            type="number"
            name="level"
            onChange={(e) => {
              setAttenuationLevel(e.target.value);
              value = { attenuationLevel };
            }}
          />
        </div>
        <div>
          <label>Brewer tips</label>
          <input
            type="text"
            name="tips"
            onChange={(e) => {
              setBrewerTips(e.target.value);
              value = { brewerTips };
            }}
          />
        </div>
        <div>
          <label>Contributor</label>
          <input
            type="text"
            name="contibutor"
            onChange={(e) => {
              setContributor(e.target.value);
              value = { contributor };
            }}
          />
        </div>
        <button type="submit">Add beer</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
