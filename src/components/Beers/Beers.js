import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Beers.css'

export default class Beers extends Component {
  constructor() {
    super()
    this.state = {
      beers: []
    }
  }
  getAllBeers = () => {
    axios.get(`http://localhost:5000/all`)
      .then(allbeers => {
        console.log(allbeers.data)
        this.setState({
          beers: allbeers.data
        })
      })
  }

  componentDidMount() {
    this.getAllBeers();
  }


  render() {

    return (
      <div>
        <div>
          <div style={{ width: '60%', float: "left" }}>
            {this.state.beers.map(beer => {
              return (
                <div key={beer._id}>
                  <Link to={`/beers/` + beer._id}>
                    <h3>{beer.name}</h3>
                  </Link>
                  <img className="beerImage" src={beer.image_url} alt={beer.name} />
                  <p>{beer.tagline}</p>
                </div>
              )
            })
            }
          </div>
          <div style={{ width: '40%', float: "right" }}>

          </div>
        </div>
      </div>
    )
  }
}
