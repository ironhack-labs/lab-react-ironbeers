import React, { Component } from 'react'
import GetBeers from "../getBeers/GetBeers"
import axios from 'axios';
import Home from '../home/Home'

export default class NewBeer extends Component {
  constructor(props){
    super(props)
    this.state={
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenuation_level: "",
      contributed_by: ""
    }
    this.allBeers = new GetBeers();
  }


  formData = (e)=>{
    
    e.preventDefault()
    let newState = {
      name: e.target.nombre.value,
      tagline: e.target.tagline.value,
      description: e.target.description.value,
      first_brewed: e.target.first_brewed.value,
      brewers_tips: e.target.tips_brewed.value,
      attenuation_level: e.target.attenuation_level.value,
      contributed_by: e.target.contributed_by.value
    }
     this.allBeers.newBeer(newState)

    this.setState(newState)   
  }

  render() {
    return (
      <div>
        <Home path={this.props.match.url}/>
        <h2>New Beer</h2>

        <h3>{this.state.name}</h3>
        <h3>{this.state.tagline}</h3>
        <form onSubmit={this.formData}>
        <p>
          Nombre: <input type="text" name="nombre" />
        </p>
        <p>
          Tagline: <input type="text" name="tagline" />
        </p>
        <p>
          Description: <input type="text" name="description" />
        </p>
        <p>
          First brewed: <input type="text" name="first_brewed" />
        </p>
        Brewers tips: <input type="text" name="tips_brewed" />
        <p>
          Attenuation level: <input type="text" name="attenuation_level" />
        </p>
        <p>
          contributed_by: <input type="text" name="contributed_by" />
        </p>
        <input type="submit"></input>
        </form>
      </div>
    )
  }
}
