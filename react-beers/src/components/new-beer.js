import React, { Component } from 'react';
import Header from '../components/header'
import BeersServices from '../service/beers-services'


class NewBeer extends Component {

  constructor(props) {

    super(props)

    this.state = {
      name: '',
      tagline: '',
      first_brewed: '',
      attenuation_level: 0,
      description: '',
      contributed_by: ''
    }

    this.services = new BeersServices()

  }


  handleChange = e => {

    let { name, value } = e.target
    this.setState({ [name]: value })
  }



  handleFormSubmit = e => {

    e.preventDefault()

    this.services.addNewBeers(this.state)
      .then(message => console.log(message))
  }


  render() {
    return (

      <div>

        <Header />

        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label>Name:
                <input className="form-control" type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />
            </label>
          </div>

          <div className="form-group">
            <label>Tagline:
                <input className="form-control" type="text" name="tagline" value={this.state.tagline} onChange={(e) => this.handleChange(e)} />
            </label>
          </div>

          <div className="form-group">
            <label>First brewed:
                <input className="form-control" type="text" name="first_brewed" value={this.state.first_brewed} onChange={(e) => this.handleChange(e)} />
            </label>
          </div>

          <div className="form-group">
            <label>Attenuation level:
                <input className="form-control" type="number" name="attenuation_level" value={this.state.attenuation_level} onChange={(e) => this.handleChange(e)} />
            </label>
          </div>

          <div className="form-group">
            <label>Description:
                <textarea className="form-control" rows="3" name="description" value={this.state.description} onChange={(e) => this.handleChange(e)} />
            </label>
          </div>

          <div className="form-group">
            <label>Contributed by:
                <input className="form-control" type="text" name="contributed_by" value={this.state.contributed_by} onChange={(e) => this.handleChange(e)} />
            </label>
          </div>

          <input className="btn btn-primary" type="submit" value="enviar" />
        </form>

      </div >

    )
  }
}

export default NewBeer