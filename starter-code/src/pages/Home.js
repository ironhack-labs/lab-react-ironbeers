import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import axios from 'axios';
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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="beerhome">
            <div>
              <img src="/images/random-beer.png" alt="beer" />{' '}
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
          </div>
          <div className="beerhome">
            <div>
              <img src="/images/new-beer.png" alt="beer" />
            </div>
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
