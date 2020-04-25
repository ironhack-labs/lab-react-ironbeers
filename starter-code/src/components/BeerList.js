import React, { Component } from 'react'
import Header from './Header'
import BeerItemList from './BeerItemList'
import api from '../lib/apiClient'

const STATES = {
  LOADING: 'LOADING',
  LOADED: 'LOADED',
  ERROR: 'ERROR',
  INIT: 'INIT'
}

export default class BeerList extends Component {
  
  /* 
    Duda para TA's: En la iteracion bonus, porque nos hacen filtrar haciendo una nueva
    peticion a la API si ya tenemos la lista de todas las beers aqui. Seria suficiente
    con un filtro en el .map...
  */

  constructor(){
    super()
    this.state = {
      status: STATES.INIT,
    }
  }

  apiCall = (filter) => {
    this.setState({ status: STATES.LOADING })
    let endpoint = '/beers'
    if(filter) endpoint = `${endpoint}/search?q=${filter}`
    api.get(endpoint)
    .then(response => {
      const { data: beers } = response
      this.setState({ beers, status: STATES.LOADED })
    })
    .catch(error => this.setState({ status: STATES.ERROR, error }))
  }

  componentDidMount = () => {
    this.apiCall()
  }

  handleFilter = (e) => {
    this.apiCall(e.target.value)
  }

  showContent = () => {
    const { status, beers, error } = this.state
    switch (status) {
      case STATES.LOADING:
        return <div>Loading</div>
      case STATES.LOADED:
        return beers.map((b, i) => <BeerItemList key={i} beer={b}/>)
      case STATES.ERROR:
        return <div>{ error.toString() }</div>
      case STATES.INIT:
        return <div>Rendering...</div>
      default:
        return <div>Hmm... what?</div>
    }
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="container">
          <input className="input-beer" onChange={this.handleFilter} type="text" placeholder="Filter the beers..." name="filter" id="filter"/>
          { this.showContent() }
        </div>
      </div>
    )
  }
}
