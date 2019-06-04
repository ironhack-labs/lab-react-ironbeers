import React, { Component } from 'react'
import IronBeersService from '../services/IronBeersService'
import { Redirect } from 'react-router-dom'

class NewBeer extends Component {
  state = {
    shouldRedirect: false,
    name:'',
    tagline:'',
    description:'',
    first_brewed:'',
    brewers_tips:'',
    attenuation_level:0,
    contributed_by:''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
    IronBeersService.NewBeer(this.state)
      .then(res =>  res.status === 200 ? this.setState({shouldRedirect: true}) : null,
      error => console.error(error))
  }


  render() {
    return this.state.shouldRedirect ?
    (<Redirect to='/'/>) :  
    (
      <form className='container mt-3' onSubmit={this.handleSubmit} >
        <div className="form-group">
          <label>Name</label>
          <input type="text" name='name' className="form-control" value={this.state.name} onChange = {this.handleChange}/>
        </div>
        <div className="form-group">
          <label>Tagline</label>
          <input type="text" name='tagline' className="form-control" value={this.state.tagline} onChange = {this.handleChange}/>
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea name='description' className="form-control" value={this.state.description} onChange = {this.handleChange} rows="3"></textarea>
        </div>
        <div className="form-group">
          <label>First Brewed</label>
          <input type="text" name='first_brewed' className="form-control" value={this.state.first_brewed} onChange = {this.handleChange}/>
        </div>
        <div className="form-group">
          <label>Brewers Tips</label>
          <input type="text" name='brewers_tips' className="form-control" value={this.state.brewers_tips} onChange = {this.handleChange}/>
        </div>
        <div className="form-group">
          <label>Attenuation Level</label>
          <input type="number" name='attenuation_level' className="form-control" value={this.state.attenuation_level} onChange = {this.handleChange}/>
        </div>
        <div className="form-group">
          <label>Contributed By</label>
          <input type="text" name='contributed_by' className="form-control" value={this.state.contributed_by} onChange = {this.handleChange}/>
        </div>
        <button type='submit' className='btn btn-primary'>Add new beer</button>
      </form>
    )
  }
}

export default NewBeer