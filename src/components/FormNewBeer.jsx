import React, { Component } from 'react'

import './FormNewBeer.css'

export default class FormNewBeer extends Component {
  state = {
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: ""
  }

  onChange = ( event ) => {
    const { name, value } = event.target
    this.setState({
      ...this.state,
      [name]: value
    })

  }

  onSubmit = ( event ) => {
    event.preventDefault()

    this.props.addBeer({ ...this.state })

    this.setState({
      ...this.state,
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenuation_level: 0,
      contributed_by: ""
    })

  }

  render() {
    const {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by
    } = this.state

    return (
      <form onSubmit={ this.onSubmit } >
        <label htmlFor="name">Name</label>
        <input type="text" name='name' value={ name } onChange={ this.onChange } />

        <label htmlFor="tagline">Tagline</label>
        <input type="text" name='tagline' value={ tagline } onChange={ this.onChange } />

        <label htmlFor="description">Description</label>
        <input type="text" name='description' value={ description } onChange={ this.onChange } />

        <label htmlFor="first_brewed">First Brewed</label>
        <input type="text" name='first_brewed' value={ first_brewed } onChange={ this.onChange } />

        <label htmlFor="brewers_tips">Brewers Tips</label>
        <input type="text" name='brewers_tips' value={ brewers_tips } onChange={ this.onChange } />

        <label htmlFor="attenuation_level">Attenuation Level</label>
        <input type="number" name='attenuation_level' value={ attenuation_level } onChange={ this.onChange } />

        <label htmlFor="contributed_by">Contributed By</label>
        <input type="text" name='contributed_by' value={ contributed_by } onChange={ this.onChange } />

        <input type="submit" value='ADD NEW' className='submit' />
      </form>

    )
  }
}
