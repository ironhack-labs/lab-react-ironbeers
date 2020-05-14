import React, { Component } from 'react';
import BeerListFetch from '../BeerApi'



export default class NewBeers extends Component {

    constructor(){
        super()
        this.state = {
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level:0,
            contributed_by:''
        }      
    }

inputHandler(e) {
this.setState({[e.target.name]:e.target.value})
}


handleSubmit(e) {
e.preventDefault()

BeerListFetch.AddNewBeer(this.state)
.then(data => console.log(data))
.catch(err => console.log(err))
this.props.history.push('/')
}



render() {

const {name,tagline,description,first_brewed,brewers_tips,attenuation_level,contributed_by} = this.state

    return (
        <div>
       
          <form  onSubmit={(e) => this.handleSubmit(e)} > 
          <label>Name</label><p></p>
          <input type='text' name='name' onChange={(e) => this.inputHandler(e)} value={name}></input><p></p>
          <label>Tagline</label><p></p>
          <input type='text' name='tagline' onChange={(e) => this.inputHandler(e)} value={tagline}></input><p></p>
          <label>Description</label><p></p>
          <input type='text' name='description' onChange={(e) => this.inputHandler(e)} value={description}></input><p></p>
          <label>First brewed</label><p></p>
          <input type='text' name='first_brewed' onChange={(e) => this.inputHandler(e)} value={first_brewed}></input><p></p>
          <label>Brewers tips</label><p></p>
          <input type='text' name='brewers_tips' onChange={(e) => this.inputHandler(e)} value={brewers_tips}></input><p></p>
          <label>Attenuation level</label><p></p>
          <input type='number' name='attenuation_level' onChange={(e) => this.inputHandler(e)} value={attenuation_level}></input><p></p>
          <label>Contributed by</label><p></p>
          <input type='text' name='contributed_by' onChange={(e) => this.inputHandler(e)} value={contributed_by} ></input><p></p>
          <input type="submit" className="input search-bar" value="submit"/>
         </form>
        </div>
    )
}
}