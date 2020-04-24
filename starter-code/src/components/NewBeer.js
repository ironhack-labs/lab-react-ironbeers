import React, { Component } from 'react'
import axios from 'axios';
import Header from './Header';
import Form from './Form';
import { Link } from "react-router-dom";

const STATES = {
  SENDING: 'SENDING',
  SENDED: 'SENDED',
  ERROR: 'ERROR',
  FORM: 'FORM'
}

export default class NewBeer extends Component {

  constructor(){
    super()
    this.state = {
      status: STATES.FORM
    }
  }

  handleClick = (newBeer) => {
      this.setState({ status: STATES.SENDING })
      axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
      .then(response => this.setState({ status: STATES.SENDED }))
      .catch(error => this.setState({ status: STATES.ERROR, error }))
  }

  handleRestart = () => {
    this.setState({status: STATES.FORM})
  }

  showContent = () => {
    const { status, error } = this.state
    switch (status) {
      case STATES.SENDING:
        return <div>Sending</div>
      case STATES.SENDED:
        return (<div>
            <p>Sended!</p>
            <button onClick={this.handleRestart}>Return</button>
          </div>)
      case STATES.ERROR:
        return (<div>
          <p>{ error.toString() }</p>
            <button onClick={this.handleRestart}>Return</button>
          </div>);
      case STATES.FORM:
        return <Form getNewBeer={this.handleClick}/>
      default:
      break;
    }
  }

  render() {
    return (
      <div>
        <Header/>
        { this.showContent() }
      </div>
    )
  }
}
