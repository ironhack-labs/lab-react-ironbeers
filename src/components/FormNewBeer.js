import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class FormNewBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: {
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: ""
      },
      error: null     
    };
  }  

  handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    
    this.setState({
     beer: {
       [name]: value
     }
    });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    fetch("https://ih-beers-api2.herokuapp.com/beers/new", {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: 'POST',
      body: JSON.stringify(this.state.beer)
    })
      .then(res => res.json())
      .then(() => {
        this.props.history.push("/beers")
      },
      (error) => {
        this.setState({
          error
        });
      }
    )
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>Name
        <input onChange={this.handleInputChange} name="name" type="text" value={this.state.name} />
        </label>
        <label>Tagline
        <input onChange={this.handleInputChange} name="tagline" type="text" value={this.state.tagline} />
        </label>
        <label>Description
        <input onChange={this.handleInputChange} name="description" type="text" value={this.state.description} />
        </label>
        <label>First Brewed
        <input onChange={this.handleInputChange} name="first_brewed" type="text" value={this.state.first_brewed} />
        </label>
        <label>Brewer's Tips
        <input onChange={this.handleInputChange} name="brewers_tips" type="text" value={this.state.brewers_tips} />
        </label>
        <label>Attenuation Level
        <input onChange={this.handleInputChange} name="attenuation_level" type="number" value={this.state.attenuation_level} />
        </label>
        <label>Contributed By
        <input onChange={this.handleInputChange} name="contributed_by" type="text" value={this.state.contributed_by} />
        </label>
        <button>ADD NEW</button>
      </form>
    )
  }
};

export default withRouter(FormNewBeer);