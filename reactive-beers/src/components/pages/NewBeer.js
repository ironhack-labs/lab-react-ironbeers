import React, { Component } from 'react'
import Header from '../Header'
import api from '../../api'
import { Redirect } from 'react-router-dom'

export class NewBeer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '', 
      tagline: '',
      description: '',
      firstBrewed: '',
      brewerTips: '',
      attLevel: '',
      contributed_by: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  renderRedirect = () => {
    return <Redirect to ='/test' />
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault()
    api.addBeer({
      name: this.state.name,
      tagline: this.state.tagline,
      description: this.state.description,
      first_brewed: this.state.firstBrewed,
      brewers_tips: this.state.brewersTips,
      attenuation_level: this.state.attLevel,
      contributed_by: this.state.contributed_by
    }).then(resp => {
      console.log(resp)
      this.props.history.push(`/beers/${resp._id}`)
    }).catch(err => {
      console.log(err)
    })
  }
  render() {
    return (
      <div>
        <Header />
        <h1 className="h1_title">Add a beer</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label for="name">Name:</label>
          <input 
            type="text"
            name="name"
            onChange={e=>this.handleChange(e)}
            />
            <label for="tagline">Tagline:</label>
            <input 
            type="text"
            name="tagline"
            onChange={e=>this.handleChange(e)}
            />
            <label for="description">Description:</label>
            <textarea 
            type="textarea"
            name="description"
            rows="4"
            onChange={e=>this.handleChange(e)}
            />
            <label for="firstBrewed">First brewed:</label>
            <input 
            type="text"
            name="firstBrewed"
            onChange={e=>this.handleChange(e)}
            />
            <label for="brewerTips">Brewer tips:</label>
            <input 
            type="text"
            name="brewersTips"
            onChange={e=>this.handleChange(e)}
            />
            <label for="attLevel">Att. level:</label>
            <input 
            type="text"
            name="attLevel"
            onChange={e=>this.handleChange(e)}
            />
            <label for="attLevel">Contributed by:</label>
            <input 
            type="text"
            name="contributed_by"
            onChange={e=>this.handleChange(e)}
            />
          <button className="btn form-btn" onClick={(e)=> this.handleSubmit(e)}>
            Add beer
          </button>
        </form>
      </div>
    )
  }
} 


export default NewBeer
