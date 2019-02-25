import React from 'react'
import { Link } from 'react-router-dom';

export default class HomeLink extends React.Component {
  render() {
    return (
      <div>
        <Link to={`/`}>
          <img alt="home" src={"../../images/home.png"} />
        </Link>
      </div>
    )
  }
}
