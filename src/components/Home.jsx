import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Home extends Component {
  constructor() {
    super()

    this.state = {
      beers: [],
      random: ''
    }
  }

  componentDidMount(){
    axios.get('https://ih-beer-api.herokuapp.com/beers')
    .then(response => {
      this.setState({beers: response.data})
    })
    .catch(err => console.log(err))

    axios.get('https://ih-beer-api.herokuapp.com/beers/random')
    .then(response => {
      this.setState({random: response.data})
    })
    .catch(err => console.log(err))
  }

  render() {
    return(
      <section className="container-fluid">

        <div className="card-deck home">
          <div className="card">
            <img className="card-img-top" src="/img/beers.png" alt="beer counter"/>
            <div className="card-body">
              <h5 className="card-title">All Beers</h5>
              <p className="card-text">
                See a list of all our available beers!
              </p>
              <Link to={{ pathname: '/beers', state: { beersData: this.state.beers } }} className="btn btn-outline-dark text-uppercase" role="button" >All Beers</Link>
            </div>
          </div>

          <div className="card">
            <img className="card-img-top" src="/img/random-beer.png" alt="beer counter"/>
            <div className="card-body">
              <h5 className="card-title">Random Beer</h5>
              <p className="card-text">
                Try your luck! See the details of a random beer!
              </p>
              <Link to={{ pathname: '/random-beer', state: { beerDetail: this.state.random} }} className="btn btn-outline-dark text-uppercase" role="button" >Random Beer</Link>
            </div>
          </div>

          <div className="card">
            <img className="card-img-top" src="/img/new-beer.png" alt="beer counter"/>
            <div className="card-body">
              <h5 className="card-title">New Beer</h5>
              <p className="card-text">
                Don't see the beer you want in our list? Create one yourself!
              </p>
              <Link to={'/new-beer'} className="btn btn-outline-dark text-uppercase" role="button" >New Beer</Link>
            </div>
          </div>
        </div>

      </section>
    )
  }
}

export default Home;