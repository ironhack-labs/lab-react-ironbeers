import React, { Component } from 'react'

export default class NewBeerForm extends Component {
  constructor(props) {
    super()
    this.state = {
      name: "",
      tagline: "",
      contributed_by: "",
      image_url: ""
    }
  }

  handleInputChange(e) {
    let newState = {...this.state}
    newState[e.target.name] = e.target.value
    this.setState(newState)
  }

  submitBeer(e) {
    e.preventDefault()
    this.props.createBeer(this.state)
  }
  
  render() {
    return (
      <form className="form" onSubmit={(e) => this.submitBeer(e)}>
        <div className="field">
          <input onChange={(e) => this.handleInputChange(e)} type="text" name="name" id="name" placeholder="Beer name" className="input"/>
          <label htmlFor="name" className="label">Name</label>
        </div>
        <div className="field">
          <input onChange={(e) => this.handleInputChange(e)} type="text" name="tagline" id="tagline" placeholder="Tagline" className="input"/>
          <label htmlFor="tagline" className="label">Tagline</label>
        </div>
        <div className="field">
          <input onChange={(e) => this.handleInputChange(e)} type="text" name="contributed_by" id="contributed-by" placeholder="Contributed by" className="input"/>
          <label htmlFor="contributed-by" className="label">Contributed by</label>
        </div>
        <div className="field">
          <input onChange={(e) => this.handleInputChange(e)} type="text" name="image_url" id="image-url" placeholder="Image URL" className="input"/>
          <label htmlFor="image-url" className="label">Image URL</label>
        </div>
        <input type="submit" value="Create" className="button"/>
      </form>
    )
  }
}
