import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirst_brewed] = useState("");
  const [brewers_tips, setBrewers_tips] = useState("");
  const [attenuation_level, setAttenuation_level] = useState(""); //number
  const [contributed_by, setContributed_by] = useState("");
  const navigate = useNavigate()

  const handleForm = (e) => {
    e.preventDefault();

    const newBeer = {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: first_brewed,
      brewers_tips: brewers_tips,
      attenuation_level: attenuation_level,
      contributed_by: contributed_by,
    };

    axios.post(`${process.env.REACT_APP_BEERS}/new`, newBeer)
    .then((res)=>{
       alert(res)
       navigate("/beers")
    })
    .catch((err) => {
        console.error("Error adding new beer API", err);
      });
  };

  return (
    <div className="NewBeer p-5">
      <h2 className="mb-3">Add a New Beer</h2>
      <form onSubmit={handleForm}>
        <div className="row mb-3">
          <div className="col">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="col">
            <label className="form-label">Tagline</label>
            <input
              type="text"
              className="form-control"
              name="tagline"
              value={tagline}
              onChange={(e) => {
                setTagline(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <label className="form-label">Description</label>
            <input
              type="text"
              className="form-control"
              name="description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
          <div className="col">
            <label className="form-label">First brewed</label>
            <input
              type="text"
              className="form-control"
              name="first_brewed"
              value={first_brewed}
              onChange={(e) => {
                setFirst_brewed(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <label className="form-label">Attenuation level</label>
            <input
              type="number"
              className="form-control"
              name="attenuation_level"
              value={attenuation_level}
              onChange={(e) => {
                setAttenuation_level(e.target.value);
              }}
            />
          </div>
          <div className="col">
            <label className="form-label">Contributed by</label>
            <input
              type="text"
              className="form-control"
              name="contributed_by"
              value={contributed_by}
              onChange={(e) => {
                setContributed_by(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label className="form-label">Brewers tips</label>
            <input
              type="text"
              className="form-control"
              name="brewers_tips"
              value={brewers_tips}
              onChange={(e) => {
                setBrewers_tips(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="m-3">
          <button className="btn btn-warning">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default NewBeer;
