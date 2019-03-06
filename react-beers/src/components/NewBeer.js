import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class NewBeer extends Component {
  state = {
    name:"",
    tagline:"",
    description:"",
    first_brewed:"",
    brewers_tips:"",
    attenuation_level:0,
    contributed_by:""
  }

  /**
   * Eventos
   */

  handleChange = (e) => {
    const {name, value} = e.target

    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault()

    const name = this.state.name
    const tagline = this.state.tagline
    const description = this.state.description
    const first_brewed = this.state.first_brewed
    const brewers_tips = this.state.brewers_tips
    const attenuation_level = Number(this.state.attenuation_level)
    const contributed_by = this.state.contributed_by
    
    axios.post('https://ironbeer-api.herokuapp.com/beers/new', {
      name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by
    }).then(response => {
      console.log(response)

      this.setState({
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: ""
      })
    }).catch(err => console.log(err))
  }

  /**
   * Render
   */

  render() {
    return(
      <React.Fragment>
        <Link to="/" className="btn btn-primary">
          Inicio
        </Link>
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" value={this.state.name} onChange={e => this.handleChange(e)} />
          </div>
          <div className="form-group">
          <label htmlFor="tagline">tagline:</label>
          <input type="text" name="tagline" value={this.state.tagline} onChange={e => this.handleChange(e)} />
          </div>
          <div className="form-group">
          <label htmlFor="description">description:</label>
            <input type="text" name="description" value={this.state.description} onChange={e => this.handleChange(e)} /></div>
          <div className="form-group">
          <label htmlFor="first_brewed">first brewed:</label>
            <input type="text" name="first_brewed" value={this.state.first_brewed} onChange={e => this.handleChange(e)} /></div>
            <div className="form-group">
            <label htmlFor="brewers_tips">brewers tips:</label>
            <input type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={e => this.handleChange(e)} /></div>
              <div className="form-group">
          <label htmlFor="attenuation_level">attenuation level:</label>
            <input type="number" name="attenuation_level" value={this.state.attenuation_level} onChange={e => this.handleChange(e)} /></div>
                <div className="form-group">
          <label htmlFor="contributed_by">contributed by:</label>
            <input type="text" name="contributed_by" value={this.state.contributed_by} onChange={e => this.handleChange(e)} /></div>

          <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
      </React.Fragment>
    )
  }
}

export default NewBeer