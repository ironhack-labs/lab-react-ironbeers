import React from 'react';
import DetailBeer from '../components/DetailBeer';
import NavBar from '../components/Navbar';
import { idBeer } from '../services/api-client';

export default class BeerDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: null,
    };
  }

  componentDidMount() {
    idBeer(this.props.match.params.id).then((res) =>
      this.setState({
        beer: res,
      })
    );
  }

  render() {
    const beer = this.state.beer;

    if (beer === null) {
      return (
        <div>
          <NavBar />
          <div className="container">
            <div className="alert alert-warning mt-5">Loading...</div>
          </div>
        </div>
      );
    }

    return (
      <div>
        <NavBar />
        <DetailBeer beer = {beer} />
      </div>
    );
  }
}
