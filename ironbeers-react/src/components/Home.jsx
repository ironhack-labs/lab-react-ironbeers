import React, { Component } from 'react'
import "./Home.css"
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <section>
          <Link to="/all-beers">
            <div className="img-container">
            </div>
            <h2>All Beers</h2>
            <p>A lager over a Sierra Nevada Pale Ale knowingly teaches
              a financial pool table. The wasted Dixie Beer completely
            knows an air hocky table. </p>
          </Link>

        </section>
        <section>
          <Link to="/beers/random">
            <div className="img-container">
            </div>
            <h2>Random Beers</h2>
            <p>A lager over a Sierra Nevada Pale Ale knowingly teaches
              a financial pool table. The wasted Dixie Beer completely
            knows an air hocky table. </p>
          </Link>

        </section>
        <section>
          <Link to="/new">
            <div className="img-container">
            </div>
            <h2>New Beer</h2>
            <p>A lager over a Sierra Nevada Pale Ale knowingly teaches
              a financial pool table. The wasted Dixie Beer completely
            knows an air hocky table. </p>
          </Link>
        </section>

      </div>
    )
  }
}
