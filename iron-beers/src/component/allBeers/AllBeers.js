import React, { Component } from "react";
import "./allbeers.css";
import { Link, NavLink } from 'react-router-dom';

class AllBeers extends Component {
  showAllBeers() {
    return this.props.beerList.map((eachBeer, i) => {
      return (
        <div className="card m-3 p-1" key={eachBeer._id}>
          <img className="card-img-top my-img" src={eachBeer.image_url} />
          <div className="card-body">
            <div className="card-text">
              <h2>{eachBeer.name} </h2>
              <h6>{eachBeer.tagline}</h6>
              <p>{eachBeer.description}</p>
              <Link to={`/beer/${eachBeer._id}`} className="btn btn-primary">More info</Link>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    if(this.props.ready) {
      return <div className="d-flex flex-wrap">{this.showAllBeers()}</div>;
    } else {
      return <h2>Loading...</h2>
    }
  }
}

export default AllBeers;
