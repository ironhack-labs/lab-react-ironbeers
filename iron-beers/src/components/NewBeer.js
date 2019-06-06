import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import NavBar from './Navbar'


class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {

    let { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleFormSubmit = e => {
    e.preventDefault()
    let { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = this.state
    axios.post(`https://ih-beer-api.herokuapp.com/beers/new`, { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by })
      .then(theBeerNew => console.log("ITS NEWWWW!", theBeerNew))
      .catch(err => console.log("You couldn't make a new Beer!", err))
    this.setState({ name: '', tagline: '', description: '', first_brewed: '', brewers_tips: '', attenuation_level: '', contributed_by: '' })
  }

  render() {

    return (
      <div>
        <NavBar />

        <form onSubmit={this.handleFormSubmit}>
          <label>Name:
                <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />
          </label>
          <br></br>

          <label>tagline:
                <input type="text" name="tagline" value={this.state.tagline} onChange={(e) => this.handleChange(e)} />
          </label>
          <br></br>

          <label>description:
                <input type="text" name="description" value={this.state.description} onChange={(e) => this.handleChange(e)} />
          </label>
          <br></br>

          <label>first_brewed:
                <input type="text" name="first_brewed" value={this.state.first_brewed} onChange={(e) => this.handleChange(e)} />
          </label>
          <br></br>

          <label>brewers_tips:
                <input type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={(e) => this.handleChange(e)} />
          </label>
          <br></br>

          <label>attenuation_level:
                <input type="number" name="attenuation_level" value={this.state.attenuation_level} onChange={(e) => this.handleChange(e)} />
          </label>
          <br></br>

          <label>contributed_by:
                <input type="text" name="contributed_by" value={this.state.contributed_by} onChange={(e) => this.handleChange(e)} />
          </label>
          <br></br>

          <input className="sub" type="submit" value="Send" />
        </form>
      </div>
    )
  }
}

export default Home
