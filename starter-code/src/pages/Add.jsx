import React, { Component } from 'react'
import Layout from '../components/Layout/Layout'
import axios from 'axios'

export default class Add extends Component {
  state = {
    newBeer: {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: '',
      contributed_by: ''
    }
  }

  handleInput = e => {
    this.setState({
      newBeer: {
        ...this.state.newBeer,
        [e.target.name]: e.target.value
      }
    })
    console.log(this.state.newBeer)
  }

  handleSubmit = async e => {
    e.preventDefault()
    const url = `https://ih-beer-api.herokuapp.com/beers/new`
    const response = await axios.post(url, this.state.newBeer)
    this.setState({
      newBeer: {
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: '',
        contributed_by: ''
      }
    })
    console.log(response)
  }

  render() {
    const {
      newBeer: { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by }
    } = this.state
    return (
      <Layout>
        <h1 className='h4 mb-4'>Add a new beer</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <input
              type='text'
              name='name'
              placeholder='Name'
              className='form-control'
              value={name}
              onChange={this.handleInput}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              name='tagline'
              placeholder='Tagline'
              className='form-control'
              value={tagline}
              onChange={this.handleInput}
              required
            />
          </div>
          <div className='form-group'>
            <textarea
              name='description'
              className='form-control'
              cols='30'
              rows='10'
              placeholder='Description'
              value={description}
              onChange={this.handleInput}
              required
            ></textarea>
          </div>
          <div className='form-group'>
            <input
              type='text'
              name='first_brewed'
              placeholder='First Brewed'
              className='form-control'
              value={first_brewed}
              onChange={this.handleInput}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              name='brewers_tips'
              placeholder='Brewers Tips'
              className='form-control'
              value={brewers_tips}
              onChange={this.handleInput}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='number'
              name='attenuation_level'
              placeholder='Attenuation Level'
              className='form-control'
              value={attenuation_level}
              onChange={this.handleInput}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              name='contributed_by'
              placeholder='Contributed By'
              className='form-control'
              value={contributed_by}
              onChange={this.handleInput}
              required
            />
          </div>

          <div className='mt-3 text-right'>
            <button type='submit' className='btn btn-info'>
              Add
            </button>
          </div>
        </form>
      </Layout>
    )
  }
}
