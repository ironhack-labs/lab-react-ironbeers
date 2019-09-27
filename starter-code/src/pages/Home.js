import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MyLayout from '../components/layout/MyLayout';

export default class Home extends Component {
  render() {
    return (
      <MyLayout noNav>
        <div className="container">
          <div className="row">
            <div>
              <Link to="/beers">
                <img src="/images/beers.png" alt="beer" />{' '}
              </Link>
            </div>
            <div className="algo">
              <h2>All Beers</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="beerhome">
            <div>
              <Link to="/random-beer">
                <img src="/images/random-beer.png" alt="beer" />{' '}
              </Link>
            </div>
            <h2>Random Beer</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
          </div>
          <div className="beerhome">
            <div>
              <Link to="/new-beer">
                <img src="/images/new-beer.png" alt="beer" />
              </Link>
            </div>
            <h2>New Beer</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
          </div>
        </div>
      </MyLayout>
    );
  }
}
