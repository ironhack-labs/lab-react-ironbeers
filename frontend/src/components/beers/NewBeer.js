import React, { Component } from 'react'
import Header from './Header';

class NewBeer extends Component {
  render(){
    return (
      <section id="container">
      <Header/>
        <h1>Add a New Beer</h1>
      </section>
    )
  }
}


export default NewBeer