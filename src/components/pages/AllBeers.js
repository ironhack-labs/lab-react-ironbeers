
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BeerService from '../../services/beers.service'
import React, { Component } from 'react'

export default class AllBeers extends Component {


  constructor() {
    super();
    this.state = {
      beers: []
    }
    this.BeerService = new BeerService()
  }

  componentDidMount() {

    this.BeerService.getBeer()
      .then(res => {
        this.setState({
          ...this.state,
          beers: res.data
        })

      })
      .catch(err => console.error(err))
  }


  render() {
    return (

      <Container>
        <div className='colum'>
        </div>
        {this.state.beers.map(e =>
          <Link className='link' key={`${e._id}`} to={`/beers/${e._id}`}>
            <hr />
            <div className='col-6'>
              <img src={e.image_url} alt={e.name} width='20%' />
              <h2>{e.name}</h2>
              <p>{e.description}</p>
            </div>
          </Link>)}
      </Container>
    )
  }
}



