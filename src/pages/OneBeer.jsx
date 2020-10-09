import React from 'react';
import beersAPI from '../api/beersAPI';
import Header from '../components/Header';

class OneBeer extends React.Component {
  state = {
    beer: null,
  };

  componentDidMount() {
    beersAPI
      .getOne(this.props.match.params.id)
      .then((apiResponse) => {
        this.setState({
          beer: apiResponse.data,
        });
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <div>
        <Header />

        <div className="one-beer">
          {this.state.beer && (
            <React.Fragment>
              <img src={this.state.beer.image_url} alt="beer pic" />
              <div>
                <div className="name-level">
                  <h2>{this.state.beer.name}</h2>
                  <h2 className="level">{this.state.beer.attenuation_level}</h2>
                </div>
                <div className="name-level">
                  <p className="tagline">{this.state.beer.tagline}</p>

                  <p >{this.state.beer.first_brewed}</p>
                </div>

                <p style={{textAlign: "justify", marginBottom: 30}}>{this.state.beer.description}</p>
                <p>
                  <strong>Created by: </strong>
                  {this.state.beer.contributed_by}
                </p>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default OneBeer;
