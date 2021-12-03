import React, { Component } from 'react'
import BeerService from '../services/beer.service';
import './IronBeers.css';
import { Link } from 'react-router-dom'


class BeerList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      beers: []
    }

    this.service = new BeerService()

  }

  componentDidMount = () => {
      this.service.getAllBeers()
      .then(response => this.setState({beers:response.data}))
  }

  render() {

    return (
    <>
        <header class="headerdiv">Esto es una casita blanca</header>
        
        <div>
          {this.state.beers.map(elm => {

            return (
                <div>
                    <Link to={`/beer/${elm._id}`}><img src={elm.image_url} alt={elm.name}/></Link>
                    <p>{elm.name}</p>
                    <p>{elm.tagline}</p>
                    <p>{elm.contributed_by}</p>
                </div>
            )
          })
          }
        </div>
    </>
    )
  }
}

export default BeerList