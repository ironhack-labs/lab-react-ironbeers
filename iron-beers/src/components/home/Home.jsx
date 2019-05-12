import React, { Component } from 'react';
import beers from '../../img/beers.png';
import newBeer from '../../img/new-beer.png';
import randomBeer from '../../img/random-beer.png';
import { Link } from 'react-router-dom';
// import axios from 'axios';


class Home extends Component {
  constructor() {
    super()
    this.state = {
      // beersList: []
    }
    // this.beersList = this.beersList.bind(this);
  }

  // beersList() {
  //   return this.state.beersList.map((obj, idx) => {
  //     return <Link to={`/${obj._id}`} key={idx} className="list-group-item list-group-item-action">{obj.name}</Link>
  //   });
  // }

  // componentDidMount() {
  //   axios.get("https://ih-beer-api.herokuapp.com/beers")
  //   .then(response => {
  //       this.setState({beersList: response.data})
  //   })
  // }

  render() {
    return(
      <div>
        <Link to='/beers'>
          <div>
            <img src={beers} alt='beers'/>
            <h2>All Beers</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          </div>
        </Link>
        <Link to='/randombeer'>
        <div>
          <img src={randomBeer} alt='random beer'/>
          <h2>Random Beer</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
        </Link>
        <Link to='/newbeer'>
        <div>
          <img src={newBeer} alt='new beer'/>
          <h2>New Beer</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
        </Link>
      </div>
    )
  }
}

export default Home;