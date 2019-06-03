import React from 'react'
import Header from '../components/Header'

class CreateBeer extends React.Component {
  state = {
    beer: {}
  }

  render () {
    return (
      <div>
        <Header />
        <form className="container">
        <label>Name</label>
        <input type="text" name="name"></input>
        <label>Tagline</label>
        <input type="text" name="tagline"></input>
        <label>Description</label>
        <input type="text" name="description"></input>
        <label>First Brewed</label>
        <input type="text" name="first_brewed"></input>
        <label>Brewers Tips</label>
        <input type="text" name="brewers_tips"></input>
        <label>attenuation Level</label>
        <input type="number" name="attenuation_level"></input>
        <label>Contributed By</label>
        <input type="text" name="contributed_by"></input>
        </form>
      </div>
    )}
}

export default CreateBeer