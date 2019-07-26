import React, { Component } from "react";
import axios from 'axios';

class NewBeer extends Component {
constructor(props) {
  super(props);
  this.state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    contributed_by: '',
    attenuation_level: '',
    brewers_tips: '',
    image_url: '',
  }
}

handleChange = (e) =>{
  this.setState({
    [e.target.name]: e.target.value
  })
}

handleFormSubmit = (e) => {
e.preventDefault();

axios.post('https://sample-api-ih.herokuapp.com/new', {
  name: this.state.name,
  tagline: this.state.tagline,
  description: this.state.description,
  first_brewed: this.state.first_brewed,
  contributed_by: this.state.contributed_by,
  attenuation_level: this.state.attenuation_level,
  brewers_tips: this.state.brewers_tips,
  image_url: this.state.image_url || 'https://res.cloudinary.com/ironhack55/image/upload/v1564178759/volodia_kbqgzm.png',
})
.then(()=> {
  
  //Dont need to reset the form really, because of redirect
  this.setState({
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    contributed_by: '',
    attenuation_level: '',
    brewers_tips: '',
    image_url: '',
  })
  this.props.history.push('/allbeers')
})
.catch(err=> {
  console.log(err);
})

}


  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail4">Name</label>
              <input
              name="name"
                type="text"
                className="form-control"
                id="inputEmail4"
                placeholder="Iron beer name goes here"
                value={this.state.name} 
                onChange={this.handleChange} 
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputPassword4">Tagline</label>
              <input
              name="tagline"
                type="text"
                className="form-control"
                id="inputPassword4"
                placeholder="Tagline"
                value={this.state.tagline} 
                onChange={this.handleChange} 
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress">Description</label>
            <input
            name="description"
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="Make it a good one"
              value={this.state.description} 
              onChange={this.handleChange} 
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress2">First Brewed</label>
            <input
            name="first_brewed"
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="First brewed"
              value={this.state.first_brewed} 
              onChange={this.handleChange} 
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress2">Image URL:</label>
            <input
            name="image_url"
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Image Url or you'll get the Vladimir"
              value={this.state.image_url} 
              onChange={this.handleChange} 
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputCity">Brewer Tips</label>
              <input 
              name="brewers_tips"
              type="text" 
              className="form-control" 
              id="inputCity"
              value={this.state.brewers_tips} 
              onChange={this.handleChange}  />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputState">Contributed By</label>
              <input 
              name="contributed_by"
              type="text" 
              id="inputState" 
              value={this.state.contributed_by} 
              onChange={this.handleChange} 
              className="form-control">
                
              </input>
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputZip">Attenuation level</label>
              <input 
              name="attenuation_level"
              type="number" 
              className="form-control" 
              value={this.state.attenuation_level} 
              onChange={this.handleChange} 
              id="inputZip" />
            </div>
          </div>
      
          <button type="submit" className="btn btn-primary">
            Add the Beer!
          </button>
        </form>
      </div>
    );
  }
}

export default NewBeer;
