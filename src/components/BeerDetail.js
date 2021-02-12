import React from 'react';
import axios from 'axios';

class BeerDetail extends React.Component {
  state = {
    image: '',
    name: '',
    tagline: '',
    first_brewed: '',
    attenuation_level: '',
    description: '',
    contributed_by: '',
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`
      );
      this.setState({
        image: response.data.image_url,
        name: response.data.name,
        tagline: response.data.tagline,
        first_brewed: response.data.first_brewed,
        attenuation_level: response.data.attenuation_level,
        description: response.data.description,
        contributed_by: response.data.contributed_by,
      });
      console.log(this.state.image);
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div>
        <div>
          <img
            src={this.state.image}
            height="350"
            width="auto"
            alt={this.state.name}
          />
        </div>
        <div>
          <div>
            <h3>{this.state.name}</h3>
            <h4>{this.state.tagline}</h4>
          </div>
          <div>
            <p>
              <small>{this.state.first_brewed}</small>
            </p>
            <p>{this.state.attenuation_level}</p>
          </div>
        </div>
        <div>
          <p>{this.state.description}</p>
          <p>
            <small>{this.state.contributed_by}</small>
          </p>
        </div>
      </div>
    );
  }
}

export default BeerDetail;
