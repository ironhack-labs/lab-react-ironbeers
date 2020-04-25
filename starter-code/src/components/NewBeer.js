import React, { Component } from 'react'
import Header from './Header';
import Form from './Form';
import api from '../lib/apiClient'

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
      api.post('/beers/new', newBeer)
      .then(response => {
        if(response.status !== 200) throw new Error(response.data.message)
        this.setState({ status: STATES.SENDED })
      })
      .catch(error => this.setState({ status: STATES.ERROR, error }))
  }

  handleRestart = () => {
    this.setState({ status: STATES.FORM })
  }

  showContent = () => {
    const { status, error } = this.state
    switch (status) {
      case STATES.SENDING:
        return <div>Sending</div>
      case STATES.SENDED:
        return (<div>
            <p>Sended!</p>
            <button onClick={this.handleRestart}>Add more</button>
          </div>)
      case STATES.ERROR:
        return (<div>
          <p>{ error.toString() }</p>
            <button onClick={this.handleRestart}>Return</button>
          </div>);
      case STATES.FORM:
        return (
          <div>
            <h1 className="main-title" >New Beer</h1>
            <Form getNewBeer={this.handleClick}/>
          </div>
        );
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
