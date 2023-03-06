import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function NewBeer() {
  const [image_url, setImage] = useState("");
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [first_brewed, setFirstBrewed] = useState("");
  const [attenuation_level, setAttenuation_level] = useState(0);

  const navigate = useNavigate();

  //handler functions

  const handleImage = (e) => setImage(e.target.value);
  const handleName = (e) => setName(e.target.value);
  const handleTagline = (e) => setTagline(e.target.value);
  const handleFirst_brewed = (e) => setFirstBrewed(e.target.value);
  const handleAttenuation_level = (e) =>
    setAttenuation_level(Number(e.target.value));

  //we turn the function async to use axios
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBeer = {
      image_url,
      name,
      tagline,
      first_brewed,
      attenuation_level,
    };

    try {
      await axios.post(
        `https://ih-beers-api2.herokuapp.com/beers/new`,
        newBeer
      );

      //redirect using navigate
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="NewBeerPage">
      <h3>Add New Beer</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="image_url">Image Url</label>
        <input
          type="text"
          name="image_url"
          value={image_url}
          onChange={handleImage}
        />
        <br /><br />

        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={name} onChange={handleName} />
        <br /><br />
        <label htmlFor="tagline">Tagline</label>
        <input
          type="text"
          name="tagline"
          value={tagline}
          onChange={handleTagline}
        />
        <br /><br />
        <label htmlFor="first_brewed">First Brewed:</label>
        <input
          type="text"
          name="first_brewed"
          value={first_brewed}
          onChange={handleFirst_brewed}
        />
        <br /><br />
        <label htmlFor="attenuation_level">Attenuation:</label>
        <input
          type="text"
          name="attenuation_level"
          value={attenuation_level}
          onChange={handleAttenuation_level}
        />
        <br /><br />
        <button type="submit">Create a Beer</button>
      </form>
    </div>
  );
}

export default NewBeer;