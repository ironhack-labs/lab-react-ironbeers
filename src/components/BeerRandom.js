import React, { Component } from 'react';
import axios from 'axios';

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from 'reactstrap';


class RandomBeer extends Component {
  state = {
    image: '',
    name: '',
    tagline: '',
    firstBrewed: '',
    attenuationLevel: '',
    description: '',
    contributedBy: '',
  };
  
  
  async componentDidMount() {
    const beerId = this.props.match.params.id;
    const response = await axios.get(
      "https://ih-beers-api2.herokuapp.com/beers/random"
    );
   
   
    this.setState({
      image: response.data.image_url,
      name: response.data.name,
      tagline: response.data.tagline,
      firstBrewed: response.data.first_brewed,
      attenuationLevel: response.data.attenuation_level,
      description: response.data.description,
      contributedBy: response.data.contributed_by,
    });
  }
  
  render() {
    const {
      image,
      name,
      tagline,
      firstBrewed,
      attenuationLevel,
      description,
      contributedBy,
    } = this.state;
    
    
    return (
      <>
        
        <Card>
          <CardBody>
            <CardImg src={image} alt="beer img" />
            <CardTitle tag="h5">
              {name}
              {attenuationLevel}
            </CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              {tagline}
              {firstBrewed}
            </CardSubtitle>
            <CardText>{description}</CardText>
            <CardText>
              <small>{contributedBy}</small>
            </CardText>
          </CardBody>
        </Card>
      </>
    );
  }
}


export default RandomBeer;
