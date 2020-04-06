import React, { Component } from 'react';
import Nav from '../components/Nav.jsx';
import axios from 'axios';
import qs from 'qs';
// import AllBeers from './AllBeers.jsx';
// import { Route } from 'react-router-dom';

class NewBeer extends Component {
    constructor(props) {
        super(props)

        this.state = {
          tagline: "",
          description: "",
          first_brewed: "",
          attenuation_level: 0,
          brewers_tips: "",
          contributed_by: "",
          name: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        axios({
          method: 'POST',
          url: 'https://ih-beers-api.herokuapp.com/beers/new',
          data: qs.stringify(this.state),
          headers: {
              "content-type": "application/x-www-form-urlencoded"
          }
        })
        .then((response) =>{
            this.props.history.push(`/beers/${response.data._id}`)
        })
        .catch((error) => {
            console.log(error.response.data);
        })
    }
    render() {
        return (
          <div>
            <Nav />
            <form onSubmit={this.handleSubmit} className="formContainer">
              <div className="field">
                <label className="label">Tagline</label>
                <div className="control">
                  <input
                    className="input"
                    placeholder="tagline"
                    type="text"
                    value={this.state.tagline}
                    onChange={this.handleChange}
                    name="tagline"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Description</label>
                <div className="control">
                  <input
                    className="input"
                    placeholder="description"
                    type="text"
                    value={this.state.description}
                    onChange={this.handleChange}
                    name="description"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Brewed</label>
                <div className="control">
                  <input
                    className="input"
                    placeholder="Brewed"
                    type="text"
                    value={this.state.first_brewed}
                    onChange={this.handleChange}
                    name="first_brewed"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Attenuation Level</label>
                <div className="control">
                  <input
                    className="input"
                    placeholder="Attenuation level"
                    type="text"
                    value={this.state.attenuation_level}
                    onChange={this.handleChange}
                    name="attenuation_level"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Tips from brewer</label>
                <div className="control">
                  <input
                    className="input"
                    placeholder="brewers_tips"
                    type="text"
                    value={this.state.brewers_tips}
                    onChange={this.handleChange}
                    name="brewers_tips"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Contributed by</label>
                <div className="control">
                  <input
                    className="input"
                    placeholder="contributed_by"
                    type="text"
                    value={this.state.contributed_by}
                    onChange={this.handleChange}
                    name="contributed_by"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    className="input"
                    placeholder="name"
                    type="text"
                    value={this.state.name}
                    onChange={this.handleChange}
                    name="name"
                  />
                </div>
              </div>

              <div className="field is-grouped is-grouped-centered">
                <div className="control">
                  <button className="button is-link" type="submit">
                    Add new beer
                  </button>
                </div>
              </div>

            </form>
          </div>
        );
    }
}

export default NewBeer;
