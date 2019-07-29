import React from 'react';
import {Link} from 'react-router-dom';
import '../../App.css';
import 'bulma/css/bulma.css';

class Home extends React.Component {

  render(){

    return (
      <div className="wrapper">
        <div className="card">
          <div className="card-image">
            <figure className="image">
              <img src="../img/beers.png" alt="put-title-here" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
              <Link exact to="/beers"><p className="title is-4">All Beers</p></Link>
              </div>
            </div>
            <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-image">
            <figure className="image">
              <img src="../img/random-beer.png" alt="put-title-here" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
              <Link exact to="random-beer"><p className="title is-4">Random Beer</p></Link>
              </div>
            </div>
            <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-image">
            <figure className="image">
              <img src="../img/new-beer.png" alt="put-title-here" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <Link exact to="new-beer"><p className="title is-4">New Beer</p></Link>
              </div>
            </div>
            <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </div>
          </div>
        </div>
      </div> 
      )
    }
  }
  export default Home;