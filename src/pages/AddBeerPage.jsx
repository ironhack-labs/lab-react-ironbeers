import { useState } from "react";
import axios from "axios";

function AddBeerPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");

  const setFormDefaults = () => {
    setName("");
    setTagline("");
    setDescription("");
    setFirstBrewed("");
    setBrewersTips("");
    setAttenuationLevel(0);
    setContributedBy("");
  };

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

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
      .then((response) => {
        console.log("response: ", response);
        setFormDefaults();
      })
      .catch((error) => {
        console.log("Error adding new beer: ", error);
      });

    console.log("Form submitted");
  };

  return (
    <div className="AddBeerPage">
      <form onSubmit={handleSubmit}>
        <div className="form-group-main">
          <div className="form-group-left">
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              Tagline:
              <input
                type="text"
                name="tagline"
                value={tagline}
                onChange={(e) => setTagline(e.target.value)}
              />
            </label>
            <label>
              Description:
              <input
                type="text"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
            <label>
              First Brewed:
              <input
                type="text"
                name="firstBrewed"
                value={firstBrewed}
                onChange={(e) => setFirstBrewed(e.target.value)}
              />
            </label>
          </div>
          <div className="form-group-right">
            <label>
              Brewers Tips:
              <input
                type="text"
                name="brewersTips"
                value={brewersTips}
                onChange={(e) => setBrewersTips(e.target.value)}
              />
            </label>
            <label>
              Attenuation Level:
              <input
                type="number"
                name="attenuationLevel"
                value={attenuationLevel}
                onChange={(e) => setAttenuationLevel(e.target.value)}
              />
            </label>
          </div>
        </div>
        <div className="form-group-bottom">
          <label>
            Contributed By:
            <input
              type="text"
              name="contributedBy"
              value={contributedBy}
              onChange={(e) => setContributedBy(e.target.value)}
            />
          </label>
          <button type="submit">Add Beer</button>
        </div>
      </form>
    </div>
  );
}

export default AddBeerPage;
