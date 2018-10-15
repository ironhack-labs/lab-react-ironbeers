import React, {Component} from 'react'
import Axios from 'axios'
var message
// name
// tagline
// description
// first_brewed
// brewers_tips
// attenuation_level
// contributed_by

class NewBeer extends Component{
  state = {
    form:{}
  }

  onSubmit = (e) => {
    e.preventDefault()
    const {form} = this.state
    console.log(form)
    Axios.post('https://ironbeer-api.herokuapp.com/beers/new',form)
    .then((r)=>{
      message='Success!'
      console.log(r)})
  }

  onChange = (e) => {
    const field = e.target.name
    const value = e.target.value
    const {form} = this.state
    form[field] = value
 }

  render(){
    return(
        <div>
            <h2>New Product</h2>
            <h3 style={{color:'green'}}>{message}</h3>
            <form onSubmit={this.onSubmit}>
                <input onChange={this.onChange} placeholder="Beer name" name="name" type="text" />
                <br/>
                <input onChange={this.onChange}  placeholder="Tagline" name="tagline" type="text" />
                <br/>
                <input onChange={this.onChange}  placeholder="Attenuation level" name="attenuation_level" type="number" />
                <br/>
                <input  onChange={this.onChange} placeholder="Description" name="description" type="text" />
                <br/>
                <input  onChange={this.onChange} placeholder="Brewers Tips" name="brewers_tips" type="text" />
                <br/>
                <input onChange={this.onChange}  placeholder="First Brewed ex. 09/2007" name="first_brewed" type="text" />
                <br/>
                <input onChange={this.onChange}  placeholder="Contributed by" name="contributed_by" type="text" />
                <br/>
                <input type="submit" />
            </form>
        </div>
    )}
}

export default NewBeer