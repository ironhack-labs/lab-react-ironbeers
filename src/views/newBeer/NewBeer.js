import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Navbar from "../../components/misc/Navbar";

const initialState = {
  name: "",
  tagline: "",
  description: "",
  firstBrewed: "",
  brewersTips: "",
  attenuationLevel: "0",
  contributedBy: ""

};
const NewBeer = ({ onSubmit }) => {
  const [newBeer, setNewBeer] = useState(initialState);

  const handleOnChange = (event) => {
    setNewBeer({
      ...newBeer,
      [event.target.name]: event.target.value,
    });
  };
  const navigate = useNavigate();

  const handleOnSubmit = (event) => {
    event.preventDefault();

    const {
      name,
      tagline,
      description,
      firstBrewed,
      brewersTips,
      attenuationLevel,
      contributedBy,
    } = newBeer;

    const attenuationLevelNumber = Number(attenuationLevel);
    if (
      name &&
      tagline &&
      description &&
      firstBrewed &&
      brewersTips &&
      attenuationLevelNumber &&
      contributedBy
    ) {
      axios
        .post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
        .then(() => {
          onSubmit({
            ...newBeer,
            id: uuidv4(),
          });
          console.log(`petición realizada ${newBeer.data}`);
          /*  setNewBeer(initialState); */
          navigate("/Beers");
        })
        .catch((err) => console.log(err));
    } else {
      console.log("💩");
    }
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={handleOnSubmit}>
        <div className="mb-3 text-start">
          <label className="form-label">Name</label>
          <input
            className="form-control"
            type="text"
            id="name"
            name="name"
            value={newBeer.name}
            placeholder="Some name goes here"
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-3 text-start">
          <label className="form-label">Tagline</label>
          <input
            className="form-control"
            type="text"
            id="tagline"
            name="tagline"
            value={newBeer.tagline}
            placeholder="Tagline"
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-3 text-start">
          <label className="form-label">Description</label>
          <input
            className="form-control"
            type="text"
            id="description"
            name="description"
            value={newBeer.description}
            placeholder="Describe your beer!"
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-3 text-start">
          <label className="form-label">First brewed</label>
          <input
            className="form-control"
            type="text"
            id="firstBrewed"
            name="firstBrewed"
            value={newBeer.firstBrewed}
            placeholder="First Brewed"
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-3 text-start">
          <label className="form-label">Brewers tips</label>
          <input
            className="form-control"
            type="text"
            id="brewersTips"
            name="brewersTips"
            value={newBeer.brewersTips}
            placeholder="Your brewer tips here"
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-3 text-start">
          <label className="form-label">Attenuation level</label>
          <input
            className="form-control"
            type="number"
            id="attenuationLevel"
            name="attenuationLevel"
            value={newBeer.attenuationLevel}
            placeholder="Attenuation level"
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-3 text-start">
          <label className="form-label">Contributed by</label>
          <input
            className="form-control"
            type="text"
            id="contributedBy"
            name="contributedBy"
            value={newBeer.contributedBy}
            placeholder="Name of the contributor"
            onChange={handleOnChange}
          />
        </div>

        {/*     {newBeer.error && <p className="mt-3 ml-4 help is-danger">Invalid fields</p>} */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewBeer;
