import React, { Component } from 'react'
import axios from 'axios';

class NewBeer extends Component {

  state= {
    newbeer: {
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenuation_level: Number,
      contributed_by: "",
    }
  }

  handleChange = e => {
    const { newbeer } = this.state
    newbeer[e.target.name] = e.target.value
    this.setState({...newbeer})
  }

  handleSubmit = event => {
    event.preventDefault();

    let newBeer = {
      newbeer: this.state.newbeer
    }

    axios.post(`https://ih-beer-api.herokuapp.com/beers/`, { newBeer })
    .then(res => {
      console.log(res)
    })
    .catch(err=> console.log(err))

  }



  render() {
    return (
      <div>
        <h2>Create a new beer</h2>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>Name</label>
            <input type="text" name="name" onChange={this.handleChange} />
          </p>
          <p>
            <label>Tagline</label>
            <input type="text" name="tagline" onChange={this.handleChange} />
          </p>
          <p>
            <label>Description</label>
            <input type="text" name="description" onChange={this.handleChange} />
          </p>
          <p>
            <label>First Brewed</label>
            <input type="text" name="first_brewed" onChange={this.handleChange}/>
          </p>
          <p>
            <label>Brewers Tips</label>
            <input type="text" name="brewers_tips" onChange={this.handleChange} />
          </p>
          <p>
            <label>Attenuation Level</label>
            <input type="number" name="attenuation_level" onChange={this.handleChange} />
          </p>
          <p>
            <label>Contributed By</label>
            <input type="text" name="contributed_by" onChange={this.handleChange}/>
          </p>
          <p>
            <input type="submit" value="Create"/>
          </p>
        </form> 
      </div>
    )
  }
}

export default NewBeer

