import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <Link to="/beers">
              <h1>All Beers</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempore non animi voluptatibus corrupti, omnis similique
                dignissimos ducimus hic dolore totam distinctio maxime molestias
                necessitatibus, accusantium, deserunt nemo vel veniam autem.
              </p>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <Link to="/beers/random">
              <h1>Random Beer</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempore non animi voluptatibus corrupti, omnis similique
                dignissimos ducimus hic dolore totam distinctio maxime molestias
                necessitatibus, accusantium, deserunt nemo vel veniam autem.
              </p>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <Link to="/new-beer">
              <h1>New Beer</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempore non animi voluptatibus corrupti, omnis similique
                dignissimos ducimus hic dolore totam distinctio maxime molestias
                necessitatibus, accusantium, deserunt nemo vel veniam autem.
              </p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
