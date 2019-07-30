import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Beers extends Component {

  render() {
    return (
      <div>
        <Link to='/'>Home</Link>
        {
          this.props.allBeers.map((oneBeer, index) => {
            return (
              <div key={index}>
                <Link to={`/all-beers/${oneBeer._id}`}>{oneBeer.name}</Link>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Beers
