import React from "react";
import { getOne, getRandom } from "../lib/beerApi";

export class Solobeer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { beer: [] };
  }

  componentDidMount() {
    if (this.props.random) {
      getRandom().then(({ data }) => {
        return this.setState({ beer: data[0] });
      });
    } else {
      getOne(this.props.match.params).then(({ data }) => {
        return this.setState({ beer: data });
      });
    }
  }
  render() {
    const { beer } = this.state;
    console.log(beer)
    const {
      brewers_tips,
      name,
      contributed_by,
      description,
      image_url,
      tagline,
      attenuation_level
    } = beer;
    return (
      <div className="card">
        <div className="card-image">
          <img src={image_url} alt={name} />
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{name}</p>
              <p className="subtitle is-6">{tagline}</p>
            </div>
          </div>

          <div className="content">
            {description}
            <br />
            <h3>Brewers tips</h3>
            <p>{brewers_tips}</p>
            <br />
            <h4>Attenuation level {attenuation_level}</h4>
            <br />
            <h4>by {contributed_by}</h4>
          </div>
        </div>
      </div>
    );
  }
}
