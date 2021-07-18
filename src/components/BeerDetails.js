import React, { Component } from 'react';
import axios from 'axios';

export default class BeerDetails extends Component {
  state = {
    BeerDetails: null,
  };

  getData = async () => {
    // incrementing the id because pokemon ids start from 1
    let id = this.props.match.params.id;

    let response = await axios.get(
      `https://ih-beers-api2.herokuapp.com/beers/${id}`
    );

    // we save the pokemon id as well to be checked later in our componentDidUpdate
    let BeerDetails = {
      id: this.props.match.params.id,
      name: response.data.name,
      img: response.data.image_url,
      tagline: response.data.tagline,
      firstBrewed: response.data.first_brewed,
      attenuationLevel: response.data.attenuation_level,
      description: response.data.description,
      contributedBy: response.data.contributed_by,
    };
    this.setState({
      BeerDetails: BeerDetails,
    });
  };

  componentDidMount() {
    console.log('Detail MOUNTED');
    this.getData();
  }

  // componentDidUpdate() {
  //   let newBeerId = this.props.match.params.id;
  //   let statedBeerId = this.state.BeerDetails.id;
  //   // compare the id in the state with the id in the props
  //   if (newBeerId !== statedBeerId) {
  //     this.getData();
  //   }
  // }

  render() {
    console.log('Detail RENDERED');

    if (!this.state.BeerDetails) {
      return <p>Loading Details. . . </p>;
    }

    const { BeerDetails } = this.state;
    console.log(BeerDetails.img);
    return (
      <div>
        Beer Details
        <h2>{BeerDetails.name}</h2>
        <img src={BeerDetails.img} alt="img" />
        <p>Tagline:{BeerDetails.tagline}</p>
        <p>First Brewed : {BeerDetails.firstBrewed}</p>
        <p>Attenuation Level : {BeerDetails.attenuationLevel}</p>
        <p>Descreiption : {BeerDetails.description}</p>
        <p>Contributed by :{BeerDetails.contributedBy}</p>
      </div>
    );
  }
}
