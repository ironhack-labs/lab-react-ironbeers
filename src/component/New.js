import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

export default function New(props) {
    return (
      <div>
      <form onSubmit={props.onAdd}>
  <div className="form-group">
    <label for="name">Name</label>
    <input type="text" className="form-control" name="name" id="name" />
  </div>
  <div className="form-group">
    <label for="tagline<">Tagline</label>
    <input type="text" className="form-control" name="tagline" id="tagline" />
  </div>
  <div className="form-group">
    <label for="description">Description</label>
    <input type="text" className="form-control" name="description" id="description" />
  </div>
  <div className="form-group">
    <label for="first_brewed">First brewed</label>
    <input type="text" className="form-control" name="first_brewed" id="first_brewed" />
  </div>
  <div className="form-group">
    <label for="brewers_tips">Brewers tips</label>
    <input type="text" className="form-control" name="brewers_tips" id="brewers_tips" />
  </div>
  <div className="form-group">
    <label for="attenuation_level">Attenuation level</label>
    <input type="number" className="form-control" name="attenuation_level" id="attenuation_level" />
  </div>
  <div className="form-group">
    <label for="contributed_by">Contributed by</label>
    <input type="text" className="form-control" name="contributed_by" id="contributed_by" />
  </div>
  <button type="submit" className="btn btn-info">Create</button>
</form>
      
      </div>
    );
  }