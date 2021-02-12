import React from 'react';
import axios from 'axios';
import Navbar from './Navbar'

class RandomBeer extends React.Component {
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
        'https://ih-beers-api2.herokuapp.com/beers/random'
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
        <Navbar />
        <div className="d-flex justify-content-center mt-5 mb-5">
          <img
            src={this.state.image}
            height="350"
            width="auto"
            alt={this.state.name}
          />
        </div>
        <div className="container">
          <div className="d-flex justify-content-between">
            <div>
              <h3>{this.state.name}</h3>
              <h4 className="text-muted">{this.state.tagline}</h4>
            </div>
            <div>
              <h3 className="text-muted">{this.state.attenuation_level}</h3>
              <p>
                <strong>{this.state.first_brewed}</strong>
              </p>
            </div>
          </div>
          <div>
            <p>
              <strong>{this.state.description}</strong>
            </p>
            <p>
              <small className="text-muted">{this.state.contributed_by}</small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default RandomBeer;
