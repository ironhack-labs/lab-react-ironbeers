import React, { Component } from "react";
import NavBar from "../common/NavBar";
import { getBeer } from "../services/beers";

class Beer extends Component {
  state = {
    beer: {}
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    getBeer(id)
      .then(beer => {
        this.setState({ beer });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    const { beer } = this.state;
    console.log(beer);
    const {
      image_url,
      name,
      attenuation_level,
      tagline,
      description,
      contributed_by
    } = beer;
    return (
      <div>
        <NavBar />
        {beer && (
          <div>
            <div className="uk-card uk-card-default">
              <div className="uk-card-media-top">
                <img src={image_url} alt={name} />
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title">{name}</h3>
                <p>{attenuation_level}</p>
                <p>{tagline}</p>
                <p>{description}</p>
                <p>{contributed_by}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Beer;
