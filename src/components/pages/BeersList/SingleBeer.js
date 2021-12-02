import React, { Component } from 'react';
import BeersService from '../../../services/beers.service';

class SingleBeer extends Component {
  constructor() {
    super();

    this.state = {
      image_url: '',
      name: '',
      tagline: '',
      first_brewed: '',
      attenuation_level: '',
      description: '',
      contributed_by: '',
    };

    this.service = new BeersService();
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    this.service
      .getOneBeer(id)
      .then((res) => {
        const {
          image_url,
          name,
          tagline,
          first_brewed,
          attenuation_level,
          description,
          contributed_by,
        } = res.data;

        this.setState({
          image_url,
          name,
          tagline,
          first_brewed,
          attenuation_level,
          description,
          contributed_by,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <div>
          <img src={this.state.image_url} alt="beer bottle" />
        </div>
        <div>
          <h2>{this.state.name}</h2>
          <h3>{this.state.tagline}</h3>
          <h4>First Brewed: {this.state.first_brewed}</h4>
          <h5>Attenuation Level: {this.state.attenuation_level}</h5>
          <p>{this.state.description}</p>
          <br />
          <span>Contributed by: {this.state.contributed_by}</span>
        </div>
      </div>
    );
  }
}

export default SingleBeer;
