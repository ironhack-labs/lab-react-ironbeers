import { useState } from "react"; // <== IMPORT

import { useNavigate } from "react-router-dom";
import axios from "axios"; // <==  IMPORT axios

function AddBeerPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstbrewed, setFirstBrewed] = useState("");
  const [brewerstips, setBrewedTips] = useState("");
  const [attenuationlevel, setAttenuationLevel] = useState(0);
  const [contributedby, setContributed] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    // <== HANDLER FUNCTION
    // Prevent page reload on submit
    e.preventDefault();
    // Create the body for the POST request
    const body = { name: name, tagline: tagline };

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
      .then((response) => {
        // Reset the state
        setName("");
        setTagline("");
        setDescription("");
        setFirstBrewed("");
        setBrewedTips("");
        setAttenuationLevel(0);
        setContributed("");

        navigate("beers");
      });
  };

  return (
    <div className="AddApartmentPage">
      <h3>Add New Apartment</h3>

      <form onSubmit={handleSubmit}>
        {" "}
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label>Tagline</label>
        <input
          type="text"
          name="tagline"
          onChange={(e) => setTagline(e.target.value)}
          value={tagline}
        />
        <label>Description </label>
        <input
          type="text"
          name="description "
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <label>Firstbrewed</label>
        <input
          type="text"
          name="firstbrewed"
          onChange={(e) => setFirstBrewed(e.target.value)}
          value={firstbrewed}
        />
        <label>Brewerstips</label>
        <input
          type="text"
          name="brewerstips"
          onChange={(e) => setBrewedTips(e.target.value)}
          value={brewerstips}
        />
        <label>Attenuation Level</label>
        <input
          type="number"
          name="attenuation_level "
          onChange={(e) => setAttenuationLevel(e.target.value)}
          value={attenuationlevel}
        />
        <label>Contributedby</label>
        <input
          type="text"
          name="contributedby"
          onChange={(e) => setContributed(e.target.value)}
          value={contributedby}
        />
        <button type="submit">Create Beer</button>
      </form>
    </div>
  );
}

export default AddBeerPage;
