import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import homeicon from '../images/homeicon.png';

export class Beers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allTheBeers: []
    }
  }
  componentDidMount () {
    this.getAllBeers();
  }
  getAllBeers = () => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then(allTheBeers => {
      console.log(allTheBeers);
      this.setState({allTheBeers: allTheBeers.data})
    })
  }
  showtheBeers = () => {
    return this.state.allTheBeers.map((eachBeer, index) => {
      return (<Link key={index} to={`/beer-detail/${eachBeer._id}`}>
              <div className="beerboxcontainer">
              <div className="beerbox">
                <div className="beerimgbox">
                <img src={eachBeer.image_url} />
                </div>
                <div className="beercontentbox">
                <h2>{eachBeer.name}</h2>
                <h3>{eachBeer.tagline}</h3>
                <p><strong>Created by</strong> {eachBeer.contributed_by}</p>
                </div>
                </div>
              </div>
              </Link>)
    })
  }

  render() {
    return (
      <div>
      <header className="homeiconbar">
      <a className="header-nav" href="/"><img src={homeicon} alt="" /></a>
      </header>
        <h2>All Beers</h2>
        <div className="allbeerlist">
        {this.showtheBeers()}
        </div>
      </div>
    )
  }
}

export default Beers
