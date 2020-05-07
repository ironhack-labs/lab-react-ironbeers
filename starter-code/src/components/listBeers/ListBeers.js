import React, { Component } from 'react'
import axios from 'axios'
import Navbar from '../ui/navbar/Navbar'
import { Link } from 'react-router-dom'

class ListBeers extends Component {
  constructor() {
    super()
    this.state = {
      beers:[]
    }
  }
  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
    .then(response => {
      this.setState({beers: response.data})
    })
  }

  render() {

    return (
      <>
       <Navbar/>
      <div className="App">
        {
          this.state.beers.map((eachBeer, idx) =>
            <div key={idx}>
              <img src={eachBeer.image_url} alt="" />
              <h4> {eachBeer.name}</h4>
              <p>{eachBeer.tagline}</p>
              <p>{eachBeer.contributed_by}</p>
              <Link to={`/beers/${eachBeer._id}`}>Detalles</Link>
            </div>)
          }
        </div>
        </>
    )
  }
}

export default ListBeers;
