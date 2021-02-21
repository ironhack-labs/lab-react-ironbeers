import React from 'react';
import Header from '../../Header/Header';
import axios from 'axios';
import { withRouter } from 'react-router';

class SingleBeer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      beer: {},
    };
  }

  componentDidMount() {
    this.getBeer();
  }

  async getBeer() {
    try {
      const id = this.props.match.params.id;

      const { data } = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${id}`
      );

      this.setState({
        loading: false,
        beer: data,
      });
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <>
        <Header />
        {this.state.loading ? (
          'loading...'
        ) : (
          <div>
            <img
              src={this.state.beer.image_url}
              style={{ height: '400px' }}
              alt="beer-img"
            />
            <p>{this.state.beer.name}</p>
            <p><span>{this.state.beer.tagline} </span><span>{this.state.beer.first_brewed} </span></p>
            <p>{this.state.beer.description}</p>
            <p>{this.state.beer.contributed_by}</p>
          </div>
        )}
      </>
    );
  }
}

export default withRouter(SingleBeer);
