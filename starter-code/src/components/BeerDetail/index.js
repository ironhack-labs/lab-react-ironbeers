import React, { Component } from "react";
import { getBeer } from "../../services/beerService";
import HomeButton from '../HomeButton';

class BeerDetail extends Component {

  state = {
    beer: {}
  }

  componentDidMount() {
    const { id } = this.props.match.params
    getBeer(id).then(res => {
        const { data: beer } = res;
        this.setState({ beer })
    })
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.match, this.props.match);

    if (nextProps.match.params.id !== this.props.match.params.id) {
        const { id } = nextProps.match.params

        getBeer(id).then(res => {
            const { data: beer } = res;
            this.setState({ beer })
        })
    }
  }

  render() {
    return (
      <div>
        <img src={this.state.beer.image_url} alt={this.state.beer.name} className="medium" />
        <div className="flex flex-justify m-0_5">
          <h3>{this.state.beer.name}</h3>
          <h3 className="color-secondary">{this.state.beer.attenuation_level}</h3>
        </div>

        <div className="mt-1">
          <h4 className="m-0_5">{this.state.beer.tagline}</h4>
          <p className="m-0_5 color-primary">{this.state.beer.first_brewed}</p>
        </div>

        <p className="m-0_5 mt-1">{this.state.beer.description}</p>

        <HomeButton />
      </div>
    );
  }
}

export default BeerDetail;
