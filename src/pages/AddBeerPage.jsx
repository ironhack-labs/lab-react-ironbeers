import axios from "axios";
import { useState } from "react";

function AddBeerPage() {
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <h1>Add New Beer</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter Name"
          />
        </div>

        <div className="form-group">
          <label>Tagline</label>
          <input
            type="text"
            name="tagline"
            className="form-control"
            placeholder="Enter Tagline"
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            type="text"
            name="description"
            className="form-control"
            placeholder="Enter Description"
          />
        </div>

        <div className="form-group">
          <label>First Brewed</label>
          <input
            type="text"
            name="first_brewed"
            className="form-control"
            placeholder="Enter Tagline"
          />
        </div>

        <div className="form-group">
          <label>Brewer's Tips</label>
          <input
            type="text"
            name="brewers_tips"
            className="form-control"
            placeholder="Enter Brewer's Tips"
          />
        </div>

        <div className="form-group">
          <label>Attenuation Level</label>
          <input
            type="number"
            name="attenuation_level"
            className="form-control"
            placeholder="Enter Attenuation Level"
          />
        </div>

        <div className="form-group">
          <label>Contributed By</label>
          <input
            type="text"
            name="contributed_by"
            className="form-control"
            placeholder="Enter Contributed By"
          />
        </div>

        <div className="d-flex justify-content-center">
          <button className="d-flex justify-content-center mt-3" type="submit">
            Add Beer
          </button>
        </div>
      </form>
    </>
  );
}

export default AddBeerPage;
