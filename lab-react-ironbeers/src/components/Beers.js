import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Service from './Service'
import OneBeer from './OneBeer'


class Beers extends Component {
    constructor() {
        super();
        this.state = {
          beers: []
        }
        this.service = new Service();
    }

    getBeers = () => { //llamada GET
      this.service.allBeers()
      .then(info =>  {
        //console.log(info)
        this.setState({beers: info})
      });
    }

    render() {
      //console.log(this.state.beers)
      //if (this.state.beers === []) this.getBeers()
      this.getBeers()
    return (
      <div className="">
          <Link to='/'>
              <header className="App-header">
                  <h1>Ironbeers</h1>
              </header>
          </Link>
          <h2>All Beers</h2>
          <div className="container">
              <div className="row">
                  { this.state.beers.map((oneBeer, index) => <OneBeer key={index} {...oneBeer} />) }
              </div>
          </div>
      </div>
    )
    }
}

export default Beers