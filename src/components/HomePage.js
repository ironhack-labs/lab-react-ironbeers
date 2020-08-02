import React, { Component } from 'react';

export class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div
              className="carousel-item active"
              style={{ height: '650px', overflow: 'hidden', width: '100%' }}
            >
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1513189737554-b1bbd839b9a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                alt="All beers"
              />
              <div className="carousel-caption d-none d-md-block"
              style={{ padding: '250px' }}>
                <h1>Ironbeers</h1>
                <h4 className="mb-4">sldkfjpñdm sdjfmlwegkm lgm</h4>
                <a href="/beers" className="btn btn-secondary m-2">All beers</a>
                <a href="/random-beer" className="btn btn-secondary m-2">Random beer</a>
                <a href="/new-beer" className="btn btn-success m-2">New beer</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
