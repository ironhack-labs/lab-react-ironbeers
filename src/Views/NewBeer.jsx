import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios'

class NewBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: '',
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  formSubmit = (event) => {
      event.preventDefault();

      axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
        name: this.state.name,
        tagline: this.state.tagline,
        description: this.state.description,
        first_brewed: this.state.first_brewed,
        brewers_tips: this.state.brewers_tips,
        attenuation_level: this.state.attenuation_level,
        contributed_by: this.state.contributed_by,
      })
      .then((response)=>{
          this.setState({
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level: '',
            contributed_by: '',
          });
          console.log(response);
        //   this.props.history.push('/beers')
      })
      .catch((err)=>{
          console.log(err)
      })

  };

  render() {
    return (
      <div>
        <header>
          <NavLink to="/">Back HomePage</NavLink>
        </header>
        <form onSubmit={this.formSubmit}>
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            name="name"
            value={this.state.name}
            id="text"
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="name">Tagline</label>
          <br />
          <input
            type="text"
            name="tagline"
            value={this.state.tagline}
            id="tagline"
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="name">Description</label>
          <br />
          <input
            type="text"
            name="description"
            value={this.state.description}
            id="description"
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="name">First Brewed</label>
          <br />
          <input
            type="text"
            name="first_brewed"
            value={this.state.first_brewed}
            id="first_brewed"
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="name">Brewer tips</label>
          <br />
          <input
            type="text"
            name="brewers_tips"
            value={this.state.brewers_tips}
            id="brewers_tips"
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="name">Attenuation Level</label>
          <br />
          <input
            type="number"
            name="attenuation_level"
            value={this.state.attenuation_level}
            id="attenuation-level"
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="name">Contributed By</label>
          <br />

          <input
            type="text"
            name="contributed_by"
            value={this.state.contributed_by}
            id="contributed_by"
            onChange={this.handleChange}
          />
          <br />
          <button>Add New Beer</button>
        </form>
      </div>
    );
  }
}

export default NewBeer;
