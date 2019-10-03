import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import SearchBar from './../../components/SearchBar/SearchBar'
import Message from './../../components/Message/Message'

export default class Beers extends Component {
  constructor(props) {
    super()
    this.state = {
      allBeers: [],
      allBeersFiltered: []
    }
  }
  
  componentDidMount() {
    axios.get("http://localhost:5000/all").then(allBeers => {
      this.setState({
        ...this.state,
        allBeers: allBeers.data,
        allBeersFiltered: allBeers.data
      })
    })
  }

  applyFilter(search) {
    let newBeersFiltered = this.state.allBeers
      .filter(beer => beer.name.toLowerCase().includes(search.toLowerCase()))
    this.setState({
      ...this.state,
      allBeersFiltered: newBeersFiltered
    })
  }

  render() {
    return (
      <div>
        <h1>Hello, I am the beers site</h1>
        <SearchBar filterText={(search) => this.applyFilter(search)} />
          {this.state.allBeersFiltered.length > 0
            ? <ul className="beers-list">
                {this.state.allBeersFiltered.map((beer, idx) => {
                    return <li key={idx}><Link to={`/view/${beer._id}`}>{beer.name}</Link></li>
                  })
                }
              </ul>
            : <Message title="Beer(s) not found"><p>The filter you applied did not get results.</p></Message>
          }
      </div>
    )
  }
}
