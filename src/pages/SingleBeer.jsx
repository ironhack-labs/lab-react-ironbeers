import React, { Component } from 'react';
import ironbeerApi from '../api/ironbeerApi';
import Header from '../components/Header';
import '../style/singleBeer.css';

class SingleBeer extends Component {
  state = {
    oneBeer: null,
  };

  componentDidMount() {
    ironbeerApi
      .getOneBeer(this.props.match.params.id)
      .then((apiRes) => {
        this.setState({ oneBeer: apiRes.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <Header />
        <div className="singleBeer">
          {this.state.oneBeer && (
            <div className="oneBeer">
              <img src={this.state.oneBeer.image_url} alt="beer" />
              <div className="infoBeer">
                <h1>{this.state.oneBeer.name}</h1>
                <p>{this.state.oneBeer.attenuation_level}</p>
              </div>
              <div className="infoBeer">
                <p>{this.state.oneBeer.tagline}</p>
                <p>{this.state.oneBeer.first_brewed}</p>
              </div>
              <p>{this.state.oneBeer.description}</p>
              <p>{this.state.oneBeer.contributed_by}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default SingleBeer;
