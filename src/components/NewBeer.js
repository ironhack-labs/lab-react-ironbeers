import React from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function NewBeer() {

  let navigate = useNavigate();

  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [firstBrewed, setFirstBrewed] = useState('');
  const [brewersTips, setBrewersTips] = useState('');
  const [attenuationLevel, setAttenuationLevel] = useState('');
  const [contributedBy, setContributedBy] = useState('');

  function handleSubmit(e) {

    e.preventDefault();

    const newBeerData = {
      name,
      tagline,
      description,
      firstBrewed,
      brewersTips,
      attenuationLevel,
      contributedBy
    }

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", newBeerData)
      .then(navigate("/AllBeers", { replace: true }))
      .catch((err) => console.log(err));
  }

  return (
    <div className="NewBeer">
    <h1>Add a new beer</h1>
    <div className="container">
      <div className="col-lg-1"></div>
      <div className="col-lg-2 mx-auto">
          <form onSubmit={handleSubmit}>
              <div className="form-group">
                  <label htmlFor="Name">Name:</label>
                  <input
                      type="text"
                      required={true}
                      name="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="form-control"
                      id="Name"
                  />
              </div>

              <div className="form-group">
                  <label htmlFor="Tagline">Tagline:</label>
                  <input htmlFor="Tagline"
                      type="text"
                      required={true}
                      name="Tagline"
                      value={tagline}
                      onChange={(e) => setTagline(e.target.value)}
                      className="form-control"
                  />
              </div>

              <div className="form-group">
                  <label htmlFor="Description">Description:</label>
                  <input htmlFor="Description"
                      type="text"
                      required={true}
                      name="Description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="form-control"
                  />
              </div>

              <div className="form-group">
                  <label htmlFor="FirstBrewed">First Brewed:</label>
                  <input
                      type="text"
                      required={true}
                      name="firstBrewed"
                      value={firstBrewed}
                      onChange={(e) => setFirstBrewed(e.target.value)}
                      className="form-control"
                  />
              </div>

              <div className="form-group">
                  <label htmlFor="brewersTips">Brewers Tips:</label>
                  <textarea
                      type="text"
                      required={true}
                      name="brewersTips"
                      value={brewersTips}
                      onChange={(e) => setBrewersTips(e.target.value)}
                      className="form-control"
                      cols="40" rows="5"
                  />
              </div>

              
              <div className="form-group">
                  <label htmlFor="attenuationLevel">Attenuation Level:</label>
                  <textarea
                      type="text"
                      required={true}
                      name="attenuationLevel"
                      value={attenuationLevel}
                      onChange={(e) => setAttenuationLevel(e.target.value)}
                      className="form-control"
                      cols="40" rows="5"
                  />
              </div>

              <div className="form-group">
                  <label htmlFor="contributedBy">Contributed By:</label>
                  <input
                      type="text"
                      required={true}
                      name="contributedBy"
                      value={contributedBy}
                      onChange={(e) => setContributedBy(e.target.value)}
                      className="form-control"
                  />
              </div>

              <div className="col-lg-2">
              </div>
              <button type="submit" className="btn-block btn-primary p-3 m-4">Add beer</button>
          </form>
      </div>
  </div>
</div>
  );
}

export default NewBeer;