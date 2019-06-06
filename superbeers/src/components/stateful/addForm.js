import React, {Component} from "react"
import beerServices from '../../services/beerServices'
import { Route, Redirect } from 'react-router'


export default class AddForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: 0,
      contributed_by: ''
    }

    this.services = new beerServices()
  }

  

  createBeer = (e) => {
    e.preventDefault()

    this.services.newBeer(this.state)
      .then(() => {
        this.setState({
          name: '',
          tagline: '',
          description: '',
          first_brewed: '',
          brewers_tips: '',
          attenuation_level: 0,
          contributed_by: ''
        })

        window.location.href='/beer/list'
      })

      
  }

  handleChange = (e) => {
    let {name, value}  = e.target
    this.setState( {[name]: value} )
    
  }

  render() {


    return(

      <form onSubmit={(e) => this.createBeer(e)}>
        <label>Name: 
          <input type='text' name='name' onChange={this.handleChange} value={this.state.name}></input>
        </label>

        <label> Tagline:
          <input type='text' name='tagline' onChange={this.handleChange} value={this.state.tagline}></input>
        </label>

        <label> Description:
          <input type='text' name='description' onChange={this.handleChange} value={this.state.description}></input>
        </label>

        <label>First Brewed:
          <input type='text' name='first_brewed' onChange={this.handleChange} value={this.state.first_brewed}></input>
        </label>

        <label>Attenuation level:
          <input type='number' name='attenuation_level' onChange={this.handleChange} value={this.state.attenuation_level}></input>
        </label>

        <label> Contributed by:
          <input type='text' name='contributed_by' onChange={this.handleChange} value={this.state.contributed_by}></input>
        </label>
        <button>Add new Beer</button>
      </form>


    )

  }
}