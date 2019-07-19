import React, { Component } from 'react'
import axios from 'axios'
import NavBar from './NavBar'


export default class NewBeer extends Component {
state = {
   name: '',
   tagline: '',
   description: '',
   first_brewed: '',
   brewers_tips: '',
    attenuation_level: '',
    contributed_by: ''
}


addNewBeer = (e) =>{
    e.preventDefault()
    
    axios
.post('https://ih-beer-api.herokuapp.com/beers/new',this.state)
.then( response => console.log(response)
)
.catch(err=>{
 console.log(err)
})

this.setState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
     attenuation_level: '',
     contributed_by: ''
 })
}

handleChange = e => {
    const {target: {name, value}} = e
    this.setState({[name]: value})
  }

    render() {
        return (
            <div>
                    <NavBar/>
   <form className="new-beer" onSubmit={this.addNewBeer}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" onChange= {this.handleChange} value={this.state.name} />
​
        <label htmlFor="tagline">Tagline</label>
        <input type="text" name="tagline" onChange= {this.handleChange} value={this.state.tagline} />
​
        <label htmlFor="description" >Description</label>
        <input type="text" name="description" onChange= {this.handleChange} value={this.state.description} />
​
        <label htmlFor="first_brewed" >First brewed</label>
        <input type="text" name="first_brewed" onChange= {this.handleChange} value={this.state.first_brewed} />
​
        <label htmlFor="brewers_tips" >Brewers tips</label>
        <input type="text" name="brewers_tips" onChange= {this.handleChange} value={this.state.brewers_tips} />
​
        <label htmlFor="attenuation_level" >Attenuation level</label>
        <input type="number" name="attenuation_level" onChange= {this.handleChange} value={this.state.attenuation_level} />
​
        <label htmlFor="contributed_by" >Contributed by</label>
        <input type="text" name="contributed_by" onChange= {this.handleChange} value={this.state.contributed_by} />
        <button>Submit </button>
      </form>
            </div>
        )
    }
}
