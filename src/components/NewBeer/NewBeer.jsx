import React from 'react';
import Navbar from '../Navbar/Navbar';

const NewBeer = () => {
  return (
    <div className="col" style={{ maxHeight: '90vh' }}>
      <Navbar />
      <div className="container">
        <form
          action="https://ih-beers-api2.herokuapp.com/beers/new"
          method="POST"
        >
          <div class="mb-3">
            <label class="form-label">Name</label>
            <input type="text" class="form-control" id="name" name="name" />
          </div>
          <div class="mb-3">
            <label class="form-label">Tagline</label>
            <input
              type="text"
              class="form-control"
              id="tagline"
              name="tagline"
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Description</label>
            <textarea
              class="form-control"
              id="description"
              name="description"
              rows="3"
            ></textarea>
          </div>
          <div class="mb-3">
            <label class="form-label">First Brewed</label>
            <input
              type="text"
              class="form-control"
              id="firstBrewed"
              name="firstBrewed"
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Brewers Tips</label>
            <input
              type="text"
              class="form-control"
              id="brewers_tips"
              name="brewers_tips"
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Attenuation Level</label>
            <input
              type="number"
              class="form-control"
              id="attenuation_level "
              name="attenuation_level "
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Contributed By</label>
            <input
              type="text"
              class="form-control"
              id="contributed_by"
              name="contributed_by"
            />
          </div>
          <button type="submit" class="btn btn-primary btn-lg m-3">
            Create new beer
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewBeer;
