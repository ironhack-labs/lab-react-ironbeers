import React, { Component } from 'react'

class NewBeer extends Component {

  state = {
    
  }

  render() {
    return (
      <div className="NewBeer">
        <form>
          <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" name="name" id="name"></input>
          </div>

          <div className="form-group">
            <label>Tagline</label>
            <input type="text" className="form-control" name="tagline" id="tagline"></input>
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea className="form-control" rows="3" name="description" id="description"></textarea>
          </div>

          <div className="form-group">
            <label>First Brewed</label>
            <input type="text" className="form-control" name="first_brewed" id="first_brewed"></input>
          </div>

          <div className="form-group">
            <label>Brewers Tips</label>
            <input type="text" className="form-control" name="brewers_tips" id="brewers_tips"></input>
          </div>

          <div className="form-group">
            <label>Attenuation Level </label>
            <input type="number" className="form-control" name="attenuation_level" id="attenuation_level"></input>
          </div>

          <div className="form-group">
            <label>Contributed by</label>
            <input type="text" className="form-control" name="contributed_by" id="contributed_by"></input>
          </div>

          <button type="submit" className="btn btn-primary">Create</button>

        </form>
      </div>
    )
  }
}

export default NewBeer;
