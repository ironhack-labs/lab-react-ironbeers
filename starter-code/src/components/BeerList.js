import React, { Component } from 'react'
import Header from './Header'
import axios from 'axios';
import BeerItemList from './BeerItemList'

const STATES = {
  LOADING: 'LOADING',
  LOADED: 'LOADED',
  ERROR: 'ERROR'
}

export default class BeerList extends Component {
  
  /* 
    Duda para TA's: Porque nos hacen filtrar haciendo una nueva peticion a la API
    si ya tenemos la lista de todas las beers aqui. Seria suficiente con un filtro
    en el .map...
  */

  constructor(){
    super()
    this.state = {
      status: '',
    }
  }

  apiCall = (filter) => {
    this.setState({ status: STATES.LOADING })
    let baseUrl = 'https://ih-beers-api2.herokuapp.com/beers'
    if(filter) baseUrl = `${baseUrl}/search?q=${filter}`
    axios.get(baseUrl)
    .then(response => {
      const { data: beers } = response
      this.setState({
        beers,
        status: STATES.LOADED
      })
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
      default:
        return <div>Rendering...</div>
        break;
    }
  }

  render() {
    return (
      <div>
        <Header/>
        <input onChange={this.handleFilter} type="text" placeholder="Filter the beers..." name="filter" id="filter"/>
        {this.showContent()}
      </div>
    )
  }
}
