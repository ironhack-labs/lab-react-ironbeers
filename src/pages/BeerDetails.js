import React from 'react'
import BeersService from "../services/beers.service"

export default class BeerDetails extends React.Component {
    constructor(props) {
      console.log(props)
    super(props);
      this.state = {
        beer: {}
    }
    this.beersService = new BeersService();
    
  }
  refreshState() {
    this.beersService
      .getOne(this.props.match.params.id)
      .then((response) => {
        console.log(response.data);
        this.setState({ beer: response.data });
      })
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.refreshState();
  }
  displayBeer() {
    const { beer } = this.state;
      return (
        <div>
          <img src={beer.image_url} alt="" />
          <p>{beer.name}</p>
          <p>{beer.tagline}</p>

          <p>{beer.first_brewed}</p>

          <p>{beer.attenuation_level}</p>

          <p>{beer.description}</p>
          <p>{beer.contributed_by}</p>
        </div>
      );
    }
  
  render() {
      return <div>
          {this.displayBeer()}</div>;
  }
}