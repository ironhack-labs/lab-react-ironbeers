import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Link from 'react-router-dom/Link';
export default class SingleBeer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: '',
      id: '',
      tagline: '',
      contributed_by: '',
    };
  }
  componentDidMount(props) {
    console.log(props);
    this.setState({
      image: this.props.data.image_url,
      id: this.props.data._id,
      tagline: this.props.data.tagline,
      name: this.props.data.name,
    });
  }
  render() {
    return (
      <Link to={`/beers/${this.state.id}`}>
        <Card>
          <Card.Img
            variant='top'
            src={this.state.image}
            style={{ height: '100px', width: '50px' }}
          />
          <Card.Body>
            <Card.Title>{this.state.name}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    );
  }
}
