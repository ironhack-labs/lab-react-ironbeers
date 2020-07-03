import React, { Component } from 'react';
import EveryBeer from './EveryBeer';
import { Link, Route, Switch } from 'react-router-dom';
class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="every-beer">
            <img src="https://image.shutterstock.com/image-photo/glasses-different-sorts-craft-beer-260nw-1212903172.jpg" />
            Every Beer
          </Link>
        </div>
        <div>
          <Link to="random-beer">
            <img src="https://images.unsplash.com/photo-1575367439058-6096bb9cf5e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
            Random Beer
          </Link>
        </div>
        <Link to="new-beer">
          <img src="https://www.connshg.com/Resources/b5f10bc2-4cd8-4ccf-be25-d8b538cf524c/bigstock-Beer-Cold-Craft-light-Beer-in-202781995.jpg" />
          New Beer
        </Link>
      </div>
    );
  }
}

export default Home;
