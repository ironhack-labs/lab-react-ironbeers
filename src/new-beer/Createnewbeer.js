import axios from 'axios';
import React, { Component } from 'react';
import Header from '../homeComponent/HeaderHome';


const stateInitialValue = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level:  '',
    contributed_by: '',
}

class Createnewbeer extends Component {
  state = stateInitialValue
  
  
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', this.state).then((result) => {console.log(result)
    this.setState(stateInitialValue)})
  }
  render() { 
    
    return (  
    <>
      <Header/>
      <div className= 'p-5'>
        <form onSubmit={this.handleSubmit}> 
          <div className="form-floating mb-3 m-3">
            <input name= 'name' type="text" className="form-control" id="nameInput" placeholder="Beer name" onChange = {this.handleChange} value={this.state.name}/>
            <label htmlFor="floatingInput">Beer name</label>
          </div>
          <div className="form-floating m-3">
            <input  name= 'tagline' type="text" className="form-control" id="tagLineInput" placeholder="Password" onChange = {this.handleChange} value={this.state.tagline}/>
            <label htmlFor="tagLineInput">Tag line</label>
          </div>
          <div className="form-floating m-3">
            <textarea name='description' onChange = {this.handleChange} value={this.state.description} className="form-control" placeholder="Leave a comment here" id="descriptionTextArea" style={{height: "100px"}}></textarea>
            <label htmlFor="descriptionTextArea">Description</label>
          </div>
          <div className="form-floating m-3">
            <input name='first_brewed' type="text"  onChange = {this.handleChange} value={this.state.first_brewed} className="form-control" id="firstBrewed" placeholder="Beer name"/>
            <label htmlFor="firstBrewed">First Brewed</label>
          </div>
          <div className="form-floating m-3">
            <input name='brewers_tips' type="text" onChange = {this.handleChange} value={this.state.brewers_tips} className="form-control" id="brewersTips" placeholder="Beer name"/>
            <label htmlFor="brewersTips">Brewers Tips</label>
          </div>
          <div className="form-floating m-3">
            <input name= 'attenuation_level' type="text" onChange = {this.handleChange} value={this.state.attenuation_level} className="form-control" id="attenuationLevel" placeholder="Beer name"/>
            <label htmlFor="attenuationLevel">Attenuation Level</label>
          </div>
          <div className="form-floating m-3">
            <input name= 'contributed_by' type="text" onChange = {this.handleChange} value={this.state.contributed_by} className="form-control" id="contributedBy" placeholder="Beer name"/>
            <label htmlFor="contributedBy">Contributed By</label>
          </div>
          <div className="d-grid gap-2 m-3">
            <button className="btn btn-primary" type="submit">Button</button>
          </div>
        </form>
      </div>
    </>
    );
}
}

            

 
export default Createnewbeer;
    
    


    
