import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const apiURL = "https://ih-beers-api2.herokuapp.com/beers";

function AddBeerPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirst_Brewed] = useState("");
  const [brewers_tips, setBrewers_Tips] = useState("");
  const [attenuation_level, setAttenuation_Level] = useState(0);
  const [contributed_by, setContributed_By] = useState("");

  const navigate = useNavigate();

  const handleName = (e) => setName(e.target.value);
  const handleTagline = (e) => setTagline(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleFirst_Brewed = (e) => setFirst_Brewed(e.target.value);
  const handleBrewers_Tips = (e) => setBrewers_Tips(e.target.value);
  const handleAttenuation_Level = (e) => setAttenuation_Level(e.target.value);
  const handleContributed_By = (e) => setContributed_By(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBeer = {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    };

    axios
      .post(`${apiURL}/new`, newBeer)
      .then(() => {
        setName("");
        setTagline("");
        setDescription("");
        setFirst_Brewed("");
        setBrewers_Tips("");
        setAttenuation_Level(0);
        setContributed_By("");

        navigate("/");
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  return (
    <>
      <div style={{ textAlign: "center", color: "#80461b", marginTop: "10px" }}>
        All Beers{" "}
      </div>
      <div className="container">
        <div className="new-beer-form">
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name</label>
              <input
                style={{ marginBottom: "20px", padding: "5px" }}
                className="form-control"
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={handleName}
              />
            </div>

            <div>
              <label>Tagline</label>
              <input
                style={{ marginBottom: "20px", padding: "5px" }}
                className="form-control"
                type="text"
                name="tagline"
                placeholder="Tagline"
                value={tagline}
                onChange={handleTagline}
              />
            </div>
            <div>
              <label className="form-label">Description</label>
              <textarea
                style={{ margin: "0px", padding: "5px" }}
                className="form-control"
                type="text"
                name="description"
                placeholder="Description"
                rows="3"
                value={description}
                onChange={handleDescription}
              ></textarea>
            </div>

            <div>
              <label>First Brewed</label>
              <input
                style={{ marginBottom: "20px", padding: "5px" }}
                className="form-control"
                type="text"
                name="first_brewed"
                placeholder="First Brewed"
                value={first_brewed}
                onChange={handleFirst_Brewed}
              />
            </div>
            <div>
              <label>Brewer Tips</label>
              <input
                style={{ marginBottom: "20px", padding: "5px" }}
                className="form-control"
                type="text"
                name="brewers_tips"
                value={brewers_tips}
                onChange={handleBrewers_Tips}
              />
            </div>
            <div>
              <label>Attenuation Level</label>
              <input
                style={{ marginBottom: "20px", padding: "5px" }}
                className="form-control"
                type="number"
                name="attenuation_level"
                value={attenuation_level}
                onChange={handleAttenuation_Level}
              />
            </div>
            <div>
              <label>Created By</label>
              <input
                style={{ marginBottom: "20px", padding: "5px" }}
                className="form-control"
                type="text"
                name="contributed_by"
                placeholder="Created by"
                value={contributed_by}
                onChange={handleContributed_By}
              />
            </div>
            <button
              style={{
                marginTop: "10px",
                padding: "10px 20px",
                fontSize: "16px",
              }}
            >
              Add Beer
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddBeerPage;
