import React, { Component } from 'react'
import BeerItem from './BeerItem'
import {Form} from 'react-bootstrap'
import axios from 'axios'
import {API_URL} from '../config'

export default class BeerList extends Component {

  state={
    filteredBeers: this.props.beers  }

  handleChange=(event)=>{
    console.log(event.currentTarget.value)
    axios.get(`${API_URL}/search?q=${event.currentTarget.value}`)
      .then((res)=>{
        console.log (res.data)
        this.setState({filteredBeers: res.data})
      })
  }

  render() {
    return (
      <div>
        <Form>
          <Form.Group>
            <Form.Label>Search</Form.Label>
            <Form.Control onChange={this.handleChange} name='q' type="text" />
          </Form.Group>
        </Form>
        <div>
          <h1> List of Beers</h1>
          {this.state.filteredBeers.map((beer, index) => {return <BeerItem key={index} beer={beer}/>})}
        </div>
      </div>
    )
  }
}
