import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./beers.css"

class Beers extends Component {

  state = {

    dates: []
  }

  componentDidMount = async () => {
    const { data } = await axios.get(`https://ih-beers-api2.herokuapp.com/beers`)

    this.setState({
      dates: data
    })

  }



  render() {
    console.log(this.state.dates);
    return (
      <div className="center-beers">
        <nav className="nav-home">
          <Link to="/">
            <img className="img-home" src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-house-icon-png-image_695369.jpg"></img>
          </Link>
        </nav>

        {this.state.dates.map(beer => {
          return (
            <div className="beers-center">
              <div className="info-beers">
                <img className="img-beers" src={beer.image_url} />
                <div className = "info-name-beers">
                  <h2>{beer.name}</h2>
                  <h3>{beer.tagline}</h3>
                  <h4>Created by :{beer.name}</h4>
                </div>

              </div>
            </div>
          )
        })}


      </div>

    )
  }
}
export default Beers