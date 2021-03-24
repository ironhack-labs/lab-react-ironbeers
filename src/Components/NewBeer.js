import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class NewBeer extends React.Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: '',
  };

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault()

    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', {
        name: this.state.name,
        tagline: this.state.tagline,
        description: this.state.description,
        first_brewed: this.state.first_brewed,
        brewers_tips: this.state.brewers_tips,
        attenuation_level: this.state.attenuation_level,
        contributed_by: this.state.contributed_by,
      })
      .then((response) => {
        this.setState({
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level: 0,
            contributed_by: '',
          });
      })
      .catch((error) => {   
        console.log(error)
      })
  }

  render() {
    return (
        <form onSubmit={(e) => this.handleSubmit(e)}>
        <div>
        <label>Name</label>
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleInput}
          />
        </div>

        <div>
        <label>Tagline</label>
          <input
            name="tagline"
            type="text"
            value={this.state.tagline}
            onChange={this.handleInput}
          />
        </div>

        <div>
        <label>Description</label>
          <input
            name="description"
            type="text"
            value={this.state.description}
            onChange={this.handleInput}
          />
        </div>

        <div>
        <label>First brewed</label>
          <input
            name="first_brewed"
            type="text"
            value={this.state.first_brewed}
            onChange={this.handleInput}
          />
        </div>

        <div>
        <label>Tips</label>
          <input
            name="brewers_tips"
            type="text"
            value={this.state.brewers_tips}
            onChange={this.handleInput}
          />
        </div>

        <div>
        <label>Attenuation level</label>
          <input
            name="attenuation_level"
            type="number"
            value={this.state.attenuation_level}
            onChange={this.handleInput}
          />
        </div>

        <div>
        <label>Contributor</label>
          <input
            name="contributed_by"
            type="text"
            value={this.state.contributed_by}
            onChange={this.handleInput}/>
        </div>

          <button>Add</button>
        </form>
    )
  }
}

export default NewBeer;