import Header from "../components/Header";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewBeer() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirst_brewed] = useState("");
  const [brewers_tips, setBrewers_tips] = useState("");
  const [attenuation_level, setAttenuation_level] = useState(0);
  const [contributed_by, setContributed_by] = useState("");

  const handleNameInput = (event) => setName(event.target.value);
  const handleTaglineInput = (event) => setTagline(event.target.value);
  const handleDescriptionInput = (event) => setDescription(event.target.value);
  const handleFirst_brewedInput = (event) =>
    setFirst_brewed(event.target.value);
  const handleBrewers_tipsInput = (event) =>
    setBrewers_tips(event.target.value);
  const handleAttenuation_levelInput = (event) =>
    setAttenuation_level(event.target.value);
  const handleContributed_byInput = (event) =>
    setContributed_by(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newBeer = {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    };

    console.log(newBeer);

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
      .then((res) => {
        console.log("res:", res);
        setName("");
        setTagline("");
        setDescription("");
        setFirst_brewed("");
        setBrewers_tips("");
        setAttenuation_level("");
        setContributed_by("");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header />

      <div>
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <span className="input-group-text" htmlFor="">
              Name
            </span>
            <input
              className="form-control"
              type="text"
              value={name}
              onChange={handleNameInput}
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" htmlFor="">
              Tagline
            </span>
            <input
              className="form-control"
              type="text"
              value={tagline}
              onChange={handleTaglineInput}
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" htmlFor="">
              Description
            </span>
            <input
              className="form-control"
              type="text"
              value={description}
              onChange={handleDescriptionInput}
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" htmlFor="">
              First Brewed
            </span>
            <input
              className="form-control"
              type="text"
              value={first_brewed}
              onChange={handleFirst_brewedInput}
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" htmlFor="">
              Brewers Tips
            </span>
            <input
              className="form-control"
              type="text"
              value={brewers_tips}
              onChange={handleBrewers_tipsInput}
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" htmlFor="">
              Attenuation Level
            </span>
            <input
              className="form-control"
              type="number"
              value={attenuation_level}
              onChange={handleAttenuation_levelInput}
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" htmlFor="">
              Contributed By
            </span>
            <input
              className="form-control"
              type="text"
              value={contributed_by}
              onChange={handleContributed_byInput}
            />
          </div>

          <button className="btn btn-info">ADD NEW</button>
        </form>
      </div>
    </>
  );
}

export default NewBeer;
