import React from 'react';
import { NavLink } from 'react-router-dom';
import beersImg from '../assets/beers.png';
import newBeer from '../assets/new-beer.png';
import randomBeer from '../assets/random-beer.png';

class Home extends React.Component {
  render() {
    return (
      <div className="home-style">
      <nav className="nav-style">
        <ul>
          <li><NavLink to='/beers'>
            <div>
              <img src={beersImg}></img>
              <h3>All Beers</h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </div>
          </NavLink></li>
          <li><NavLink to='/new-beer'>
            <div>
              <img src={newBeer}></img>
              <h3>New Beer</h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </div>
          </NavLink></li>
          <li><NavLink to='/random-beer'>
            <div>
              <img src={randomBeer} alt="beer-image"></img>
              <h3>Random Beer</h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </div>
          </NavLink></li>
        </ul>
      </nav>
      </div>
    )

  }
}

export default Home
