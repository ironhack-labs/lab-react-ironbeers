import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div className="homePage">
        <div className="homeAllBeers">
          <Link to="/beers" style={{textDecoration: "none", color: "black"}}>
            <img src="https://storage.googleapis.com/boropark24.com/2018/04/beer.jpg" alt="beer" height="150px"/>
            <h1>All Beers</h1>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,</p>
          </Link>
        </div>

        <div className="homeRandomBeer">
          <Link to="/random-beer" style={{textDecoration: "none", color: "black"}}>
            <img src="https://i2.wp.com/media.hungryforever.com/wp-content/uploads/2017/11/22130221/best-beer-malaysia.jpg?ssl=1?w=356&strip=all&quality=80" alt="beer" height="150px"/>
            <h1>Random Beer</h1>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,</p>
          </Link>
        </div>

        <div className="homeNewBeer">
          <Link to="/new-beer" style={{textDecoration: "none", color: "black"}}>
            <img src="http://willrunforbeer.com/wp-content/uploads/2017/07/69.jpg" alt="beer" height="150px"/>
            <h1>New Beer</h1>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,</p>
          </Link>
        </div>
      </div>
    )
  }
}
