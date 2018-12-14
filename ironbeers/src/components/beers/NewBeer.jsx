import React, { Component } from 'react'
import { newBeer } from '../../services/api';

export default class NewBeer extends Component {

  state={
    beer:{}
  }
  handleInput = e => {
    const {beer} = this.state
    beer[e.target.name] = e.target.value
    this.setState({beer})
  }

  handleSubmit = e => {
    const {beer} = this.state
    e.preventDefault()
    newBeer(beer)
      .then(beer=>{
        console.log(beer)
        this.props.history.push('/all')
      }).catch(e=>{
        console.log(e)
      })
  }

  render() {
    const { handleSubmit, handleInput } = this
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input onChange={handleInput} type="text" name="name" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="tagline">Tagline</label>
                    <input onChange={handleInput} type="text" name="tagline" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input onChange={handleInput} type="text" name="description" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="first_brewed">First Brewed</label>
                    <input onChange={handleInput} type="text" name="first_brewed" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="brewers_tips">Brewer Tips</label>
                    <input onChange={handleInput} type="text" name="brewers_tips" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="attenuation_level">Atenuation level</label>
                    <input onChange={handleInput} type="number" name="attenuation_level" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="contributed_by">Contributed by</label>
                    <input onChange={handleInput} type="text" name="contributed_by" className="form-control" />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Add Beer</button>
                </div>
            </form>
        </div>
    )
  }
}
