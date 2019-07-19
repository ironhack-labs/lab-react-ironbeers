import React, { Component } from 'react'
import Header from './Header';
import axios from 'axios'
import { Link } from 'react-router-dom'
class BeersContainer extends Component {

  state = {
    beers: [],
    moreBeers: [],
  }

  componentDidMount = () => {
    axios.get('https://ih-beer-api.herokuapp.com/beers')
      .then(({ data }) => {
        this.setState({ beers: [data[0], data[1], data[2]], moreBeers: [data[0], data[1], data[2]] })
      })
      .catch(err => console.log(err))
  }

  searchBeer = (beer) => {

    let newArray = [...this.state.beers]

    let search = newArray.filter((e) => {
      return e.name.toLowerCase().indexOf(beer.toLowerCase()) !== -1;
    })

    this.setState({ beers: beer ? search : this.state.moreBeers })
  }

  handleChange = (e) => {
    let value = e.target.value
    this.searchBeer(value)    
  }

  render() {
    return (
      <div>
        <Header />
        <h1>Beers Container</h1>
        <input type="text" placeholder="Search" onChange={this.handleChange} />
        {this.state.beers.map((beer, i) => {
          return <div className="beer-item" key={i}>
            <Link to={`/beer/${beer._id}`}>
              <div>
                <img src={beer.image_url} alt={beer.name} />
              </div>
              <div>
                <h3> {beer.name} </h3>
                <p>{beer.tagline}</p>
                <small> <b>Created by: </b>{beer.contributed_by}</small>
              </div>
            </Link>
          </div>
        })}
      </div>
    )
  }
}


export default BeersContainer
