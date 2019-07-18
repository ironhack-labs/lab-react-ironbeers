import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Home.css'


export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="links">

          <Link className="link" to={'/beers'}> Beer </Link>

          <Link className="link" to={'/random-beers'}> Random Beer </Link>

          <Link className="link" to={'/add-beers'}> Add Beer </Link>

        </div>
      </React.Fragment>
    )
  }
}
