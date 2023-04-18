import { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const CreateBeer = () => {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [brew, setBrew] = useState("");
  const [alevel, setAlevel] = useState("");
  const [contributor, setContributor] = useState("");

  const navigate = useNavigate();

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleTagline = (e) => {
    setTagline(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleBrew = (e) => {
    setBrew(e.target.value);
  };

  const handleAlevel = (e) => {
    setAlevel(e.target.value);
  };

  const handleContributor = (e) => {
    setContributor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBeer = {
      name,
      tagline,
      description,
      first_brewed: brew,
      attenuation_level: alevel,
      contributed_by: contributor,
    };

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
      .then((res) => {
        navigate("/beers");
      });
  };

  return (
    <div>
      <Header />
      <div className="container my-3" style={{ maxWidth: "500px" }}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              onChange={handleName}
              type="text"
              className="form-control"
              id="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="tagline">Tagline</label>
            <input
              onChange={handleTagline}
              type="text"
              className="form-control"
              id="tagline"
            />
          </div>
          <div className="form-group">
            <label htmlFor="textArea">Description</label>
            <textarea
              onChange={handleDescription}
              className="form-control"
              id="textArea"
              rows="3"
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="fbrewed">First Brewed</label>
            <input
              onChange={handleBrew}
              type="text"
              className="form-control"
              id="fbrewed"
            />
          </div>
          <div className="form-group">
            <label htmlFor="alevel">Attenuation Level</label>
            <input
              onChange={handleAlevel}
              type="number"
              className="form-control"
              id="alevel"
            />
          </div>
          <div className="form-group">
            <label htmlFor="contributed">Contributed by</label>
            <input
              onChange={handleContributor}
              type="text"
              className="form-control"
              id="contributed"
            />
          </div>
          <br />
          <div>
            <button type="submit" className="btn btn-primary">
              Create Beer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBeer;
