import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class ListofBeers extends Component {
    render() {
        return (
          <div className="container">
            <div className="imgList">
              <h1>All beers</h1>

              {this.props.beers.map((elem) => {
                return (
                  <div className="beerCard">
                    <img src={elem.image_url} />
                    <Link to={`/details/${elem._id}`}><h1>{elem.name}</h1></Link>
                    <h3>{elem.tagline}</h3>

                    <p>{elem.contributed_by}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
    }
}
