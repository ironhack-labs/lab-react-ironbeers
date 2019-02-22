import React, { Component } from 'react'
import Header from '../Header'

export class NewBeer extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1 className="h1_title">Add a beer</h1>
        <form>
          <label for="name">Name:</label>
          <input 
            type="text"
            name="name"
            />
            <label for="tagline">Tagline:</label>
            <input 
            type="text"
            name="tagline"
            />
            <label for="description">Description:</label>
            <textarea 
            type="textarea"
            name="description"
            rows="4"
            />
            <label for="firstBrewed">First brewed:</label>
            <input 
            type="text"
            name="firstBrewed"
            />
            <label for="brewerTips">Brewer tips:</label>
            <input 
            type="text"
            name="brewersTips"
            />
            <label for="dattLevel">Att. level:</label>
            <input 
            type="text"
            name="attLevel"
            />
          <button className="btn form-btn">
            Add beer
          </button>
        </form>
      </div>
    )
  }
} 


export default NewBeer
