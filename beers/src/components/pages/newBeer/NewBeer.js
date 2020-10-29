import React, { Component } from 'react';

import BeerService from './../../../service/beersApi'

class NewBeer extends Component {
    constructor() {
        super()
        this.state = {
            name :'', 
            tagline : '',
            description :'',
            first_brewed :'',
            brewers_tips :'',
            attenuation_level : 0 ,
            contributed_by : ''
        }
        this.BeerService = new BeerService
    }

    handleInputChange = e => {
        let { name, value } = e.target
        this.setState({ [name]: value });
    }

    handleSubmit = e => {
        e.preventDefault()

        this.BeerService.createNewBeer(this.state)
            .then(response => this.props.history.push(`/allbeers`))
            .catch(err => console.log(err))

    }

    render() {
        return (
          <form className="p-lg-5 p-3" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Enter beer name"
                value={this.state.name}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label for="tagline">Tagline</label>
              <input
                type="text"
                className="form-control"
                id="tagline"
                name="tagline"
                value={this.state.tagline}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label for="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={this.state.description}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label for="first_brewed">First Brewed</label>
              <input
                type="text"
                className="form-control"
                id="first_brewed"
                name="first_brewed"
                value={this.state.first_brewed}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label for="brewers_tips">Brewers Tips</label>
              <input
                type="text"
                className="form-control"
                id="brewers_tips"
                name="brewers_tips"
                value={this.state.brewers_tips}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label for="attenuation_level">Attenuation Level</label>
              <input
                type="number"
                className="form-control"
                id="attenuation_level"
                name="attenuation_level"
                value={this.state.attenuation_level}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label for="contributed_by">Contributed By</label>
              <input
                type="text"
                className="form-control"
                id="contributed_by"
                name="contributed_by"
                value={this.state.contributed_by}
                onChange={this.handleInputChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        );
    }
}

export default NewBeer;