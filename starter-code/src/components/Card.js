import React, { Component } from "react";
import { Link } from "react-router-dom";

class Card extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="card mb-3" style={{ maxWidth: "330px" }}>
            <div className="row no-gutters">
              <div className="col-md-4">
                <img
                  className="img-thumbnail"
                  src={this.props.image}
                  alt=""
                  height="230"
                  width="160"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  {/* <Link to="/beers"> */}
                  <h5 className="card-title">{this.props.name}</h5>

                  {/* </Link> */}
                  <p className="card-text">{this.props.tagline}</p>
                  <p className="card-text">
                    <small className="text-muted">
                      Contributed by:
                      <br />
                      {this.props.contributed}
                    </small>
                  </p>

                  <Link
                    to={`/beers/${this.props.id}`}
                    href="#"
                    class="btn btn-primary"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
