import React, {Component} from 'react'
import Services from '../services/beers.services'
import { Link } from 'react-router-dom'

class NewBeer extends Component {

  constructor(props) {
    super(props)
    this.state = {
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: '',
        contributed_by: ''
    }
    this.service = new Services()
  }

  handleChangeInput = e => this.setState({ [e.target.name]: e.target.value })

  handleFormSubmit = e => {
      e.preventDefault()
      this.service.createNewBeer(this.state)
          .then(x => window.location.assign('/'))
          .catch(err => console.log('error', err))
  }


  render () {
    return (
      <>
      <Link className="back-to-home" to="/">Home</Link> 

      <div className="container">
  
      <h2>Add new Beer</h2>
  
      <div className="row justify-content-center">
          <div className="col-md-6">
              <form onSubmit={this.handleFormSubmit}>
                  <div className="form-group">
                      <label htmlFor="input-name">Name</label>
                      <input name="name" type="text" className="form-control" id="input-name" onChange={this.handleChangeInput} />
                  </div>
                  <div className="form-group">
                      <label htmlFor="input-tagline">Tagline</label>
                      <input name="tagline" type="text" className="form-control" id="input-tagline" onChange={this.handleChangeInput} />
                  </div>
                  <div className="form-group">
                      <label htmlFor="input-description">Description</label>
                      <input name="description" type="text" className="form-control" id="input-description" onChange={this.handleChangeInput} />
                  </div>
                  <div className="form-group">
                      <label htmlFor="input-brewed">First brewed</label>
                      <input name="first_brewed" type="number" className="form-control" id="input-brewed" onChange={this.handleChangeInput} />
                  </div>
                  <div className="form-group">
                      <label htmlFor="input-tips">Brewers tips</label>
                      <input name="brewers_tips" type="number" className="form-control" id="input-tips" onChange={this.handleChangeInput} />
                  </div>
                  <div className="form-group">
                      <label htmlFor="input-att">Attenuation level</label>
                      <input name="attenuation_level" type="text" className="form-control" id="input-att" onChange={this.handleChangeInput} />
                  </div>
                  <div className="form-group">
                      <label htmlFor="input-cont">Contributed by</label>
                      <input name="contributed_by" type="text" className="form-control" id="input-cont" onChange={this.handleChangeInput} />
                  </div>
                  <button type="submit" className="btn btn-primary">Create new beer</button>
              </form>
          </div>
      </div>
  </div>
      </>    
    )
  }
}

export default NewBeer