import React from "react";
import "../styling/DetailView.css";

class BeerDetail extends React.Component {
  render() {
    return (
      <div>
       <div className="column">
            <div className=" beer-detail">
              <img src={this.props.beer.image_url} alt="Beer" />

              <div className="row">
                <h2 className="col-9 text-left">{this.props.beer.name}</h2>
                <h3 className="col-3">{this.props.beer.attenuation_level}</h3>
              </div>

              <div className="row">
                <h5 className="col-12 text-left">{this.props.beer.tagline}</h5>
                {/* <p>{this.state.beer.first_brewed}</p> */}
              </div>

              <div>
                <p className="text-left">{this.props.beer.description} </p>
                <h6 className="text-left">{this.props.beer.contributed_by}</h6>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default BeerDetail;
