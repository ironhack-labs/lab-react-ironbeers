import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navigation from './../components/Navigation';

export default class Beers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beerList: []
    };
  }

  //   //   style={{ marginTop: '20px', marginLeft: '230px' }}
  //   //             width="50%"
  //   //   //             height="100px"
  //   componentDidUpdate(prevProps, prevState) {
  //     const id = this.props.match.params.id;
  //     // console.log(prevProps.match, this.props.match);
  //     // if (prevProps.match.params.id !== id || !this.state.beer)
  //     load(id)
  //       .then(beer => {
  //         this.setState({
  //           beer
  //         });
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   }

  render() {
    const beerList = this.props.beerList;
    console.log(beerList);
    return (
      <Container>
        <Navigation />
        <Card className="Card">
          {beerList.map(beerItem => (
            <Row
              style={{ borderBottom: ' 2px solid grey', paddingBottom: '50px' }}
            >
              <Link
                className="text-decoration-none text-reset"
                to={`/beer/${beerItem._id}`}
                key={beerItem._id}
              >
                <Col className="col-5  justify-content-center">
                  <Card.Img
                    src={beerItem.image_url}
                    style={{
                      width: '5rem',
                      paddingTop: '50px'
                    }}
                  />
                </Col>
              </Link>
              <Col className="col-7">
                <Card.Title style={{ paddingTop: '50px' }}>
                  {beerItem.name}
                </Card.Title>
                <Card.Text>{beerItem.tagline}</Card.Text>
                <Card.Text>
                  <strong>Created By:</strong> {beerItem.contributed_by}
                </Card.Text>
              </Col>
            </Row>
          ))}
        </Card>
        <br />
        <br />
      </Container>
    );
  }
}
