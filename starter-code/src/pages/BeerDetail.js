import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import BEER_SERVICE from '../services/Beerlist'

export class BeerDetail extends Component {
  state = {
    beer: {},
  }
  async componentDidMount() {
    const { id } = this.props.match.params
    const { data: beer } = await BEER_SERVICE.beerDetail(id)
    this.setState({ beer })
  }
  render() {
    const { beer } = this.state;
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <div className="card" style={{ width: "18rem" }}>
            <img src={beer.image_url} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                {beer.name}
                {beer.tagline}
              </h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{beer.attenuation_level}</li>
              <li className="list-group-item">{beer.description}</li>
              <li className="list-group-item">{beer.contributed_by}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default BeerDetail