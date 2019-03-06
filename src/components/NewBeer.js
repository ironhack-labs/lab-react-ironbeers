import React, { Component } from 'react';
import { postNewBeer } from '../services/BeersService';
import './NewBeer.css';

export default class NewBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: 0,
      contributed_by: ''
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    postNewBeer(this.state)
      .then(response => {
        console.log('Beer added!');
      }, (error) => console.log(`Oops, a error ocurred: ${error}`));
  }

  render() {
    return (
      <div className="container-form">
        <div className="header">
          <h2 className="title">Add a new Beer</h2>
        </div>
        <form onSubmit={this.handleFormSubmit}>
          <div className="field">
            <div className="field-content">
              <label className="label">Name</label>
              <div className="control has-icons-right">
                <input className="input" type="text" name="name" value={this.state.name} onChange={event => this.handleChange(event)} />
                <span className="icon is-small is-right">
                  <i className="fas fa-check fa-xs"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="field-content">
              <label className="label">Tagline</label>
              <div className="control has-icons-right">
                <input className="input" type="text" name="tagline" value={this.state.tagline} onChange={event => this.handleChange(event)} />
                <span className="icon is-small is-right">
                  <i className="fas fa-check fa-xs"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="field-content">
              <label className="label">Description</label>
              <div className="control has-icons-right">
                <input className="input" type="textarea" name="description" value={this.state.description} onChange={event => this.handleChange(event)} />
                <span className="icon is-small is-right">
                  <i className="fas fa-check fa-xs"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="field-content">
              <label className="label">First brewed</label>
              <div className="control has-icons-right">
                <input className="input" type="text" name="first_brewed" value={this.state.first_brewed} onChange={event => this.handleChange(event)} />
                <span className="icon is-small is-right">
                  <i className="fas fa-check fa-xs"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="field-content">
              <label className="label">Brewers tips</label>
              <div className="control has-icons-right">
                <input className="input" type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={event => this.handleChange(event)} />
                <span className="icon is-small is-right">
                  <i className="fas fa-check fa-xs"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="field-content">
              <label className="label">Attenuation level</label>
              <div className="control has-icons-right">
                <input className="input" type="number" name="attenuation_level" value={this.attenuation_level} onChange={event => this.handleChange(event)} />
                <span className="icon is-small is-right">
                  <i className="fas fa-check fa-xs"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="field-content">
              <label className="label">Contributed by</label>
              <div className="control has-icons-right">
                <input className="input" type="text" name="contributed_by" value={this.contributed_by} onChange={event => this.handleChange(event)} />
                <span className="icon is-small is-right">
                  <i className="fas fa-check fa-xs"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="field">
            <button className="button is-dark">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
