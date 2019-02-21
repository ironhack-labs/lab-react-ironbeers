import React, { Component } from 'react';
import Header from '../header/Header.js';
import axios from 'axios';

class FormFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      attenuation_level: 0,
      brewers_tips: '',
      contributed_by: ''
    }
    this.updateState = this.updateState.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  updateState(e) {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value })
  }

  handleFormSubmit(event) {
    event.preventDefault();

    const { name, tagline, description, first_brewed, attenuation_level, contributed_by } = this.state

    axios.post('https://ironbeer-api.herokuapp.com/beers/new', this.state)
      .then(function (response) {
        console.log('salvo com sucesso', response)
      });
  }

  render() {
    console.log(this.state)
    return (

      <form onSubmit={this.handleFormSubmit}>
        <div className="form-group col-md-6">
          <label for="">Name</label>
          <input type="text" className="form-control" onChange={(e) => this.updateState(e)} value={this.state.name} name='name' />
        </div>
        <div className="form-group">
          <label for="">Tagline</label>
          <input type="text" className="form-control" onChange={(e) => this.updateState(e)} value={this.state.tagline} name='tagline' />
        </div>
        <div className="form-group">
          <label for="">Description</label>
          <input type="text" className="form-control" onChange={(e) => this.updateState(e)} value={this.state.description} name='description' />
        </div>
        <div className="form-group">
          <label for="">First Brewed</label>
          <input type="text" className="form-control" onChange={(e) => this.updateState(e)} value={this.state.first_brewed} name='first_brewed' />
        </div>
        <div className="form-group">
          <label for="">Brewers Tips</label>
          <input type="text" className="form-control" onChange={(e) => this.updateState(e)} value={this.state.brewers_tips} name='brewers_tips' />
        </div>
        <div className="form-group">
          <label for="">Attenuation Level</label>
          <input type="text" className="form-control" onChange={(e) => this.updateState(e)} value={this.state.attenuation_level} name='attenuation_level' />
        </div>
        <div className="form-group">
          <label for="">Contributed By</label>
          <input type="text" className="form-control" onChange={(e) => this.updateState(e)} value={this.state.contributed_by} name='contributed_by' />
        </div>
        <button type="submit" className="btn btn-primary">Add New Beer</button>
      </form>

    );
  }
}

export default FormFood;
