import React, { Component } from "react";
import { Link } from "react-router-dom";

// import "./ListBeers.css";

class ListBeers extends Component {
  showOnlyOneBeer(beer) {
    console.log(beer);
    this.props.onlyOneBeer(beer);
  }
  render() {
    console.log();
    let beers = this.props.beers;
    return (
      <div className="ListBeers">
        <Link to="/">Home</Link>
        {beers.map((beer, idx) => {
          let id = beer._id;
          console.log(id);
          return (
            <Link
              to={`beers/${beer._id}`}
              onClick={beer => this.showOnlyOneBeer(id)}
            >
              {" "}
              <div key={beer._id} className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={beer.image_url} alt="Placeholder" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">{beer.name}</p>
                      <p className="title is-4">{beer.contributed_by}</p>
                    </div>
                  </div>
                  <div className="content">{beer.description}</div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default ListBeers;
