import React, { Component } from 'react';
import BeerServices from '../../services/beers.services';


export default class BeerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: {},
    };
    this.beerService = new BeerServices();
  }

  refreshState() {
    this.beerService
      .getOne(this.props.match.params.id)
      .then(({ response }) => {
          console.log(response.data)
        this.setState({ beer: response});
      })
      .catch((error) => console.error(error));
  }

  componentDidMount() {
    this.refreshState();
  }

  render() {
    return (
      <div>
        <div>
          <img src={this.image_url} width="100px"></img>
          <h3>{this.name}</h3>
          <h4>{this.tagline}</h4>
          <p>{this.contributed_by}</p>
        </div>
      </div>
    );
  }
}
