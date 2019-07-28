import React, { Component, Fragment } from 'react';
import axios from 'axios';
import NavBar from './NavBar';

class AddBeer extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: 0,
      contributed_by: '',
    }
  }

  changeHandler(event) {
    let { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  addBeer(event) {
    axios.post("https://ih-beer-api.herokuapp.com/beers/new", this.state)
      .then(() => {
        this.setState({
          name: '',
          tagline: '',
          description: '',
          first_brewed: '',
          brewers_tips: '',
          attenuation_level: 0,
          contributed_by: '',
        })
      })
    event.preventDefault();
  }

  render() {
    return(
      <Fragment>
        <NavBar />
        <form className="container" onSubmit={(event) => this.addBeer(event)}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" name="name" placeholder="Beer Name" onChange={(event) => this.changeHandler(event)} value={this.state.name} />
          </div>
          <div className="form-group">
            <label htmlFor="tagline">Tagline</label>
            <input type="text" className="form-control" name="tagline" placeholder="Beer Tagline" onChange={(event) => this.changeHandler(event)} value={this.state.tagline} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea className="form-control" id="description" name="description" onChange={(event) => this.changeHandler(event)} value={this.state.description} rows="3" />
          </div>
          <div className="form-group">
            <label htmlFor="first_brewed">First Brewed</label>
            <input type="text" className="form-control" name="first_brewed" placeholder="MM/YYYY" onChange={(event) => this.changeHandler(event)} value={this.state.first_brewed} />
          </div>
          <div className="form-group">
            <label htmlFor="brewers_tips">Brewers Tips</label>
            <input type="text" className="form-control" name="brewers_tips" placeholder="Brewers Tips" onChange={(event) => this.changeHandler(event)} value={this.state.brewers_tips} />
          </div>
          <div className="form-group">
            <label htmlFor="attenuation_level">Attenuation Level</label>
            <input type="number" className="form-control" name="attenuation_level" placeholder="Attenuation Level" onChange={(event) => this.changeHandler(event)} value={this.state.attenuation_level} />
          </div>
          <div className="form-group">
            <label htmlFor="contributed_by">Contributed By</label>
            <input type="text" className="form-control" name="contributed_by" placeholder="Contributed By" onChange={(event) => this.changeHandler(event)} value={this.state.contributed_by} />
          </div>
          <button type="submit"  className="btn btn-primary">Submit</button>
        </form>
      </Fragment>
    )
  }
}

export default AddBeer;