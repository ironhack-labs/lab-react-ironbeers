import React, {Component} from 'react'
import {ListGroup, Card, Col, ListGroupItem, Row} from "react-bootstrap";
import axios from "axios";
import Navbars from "./Navbar";


class SingleBeer extends Component{

  state={
    beer: []
  }
  componentWillMount() {
    let {beer}= this.state
    let id=this.props.match.params.id;
    console.log(id)
    axios.get(`https://ironbeer-api.herokuapp.com/beers/single/${id}`)
      .then(res=>{
        beer=res.data
        this.setState({beer})
        console.log('beer-axios',beer)
      });
  }

  render() {
    let beer= this.state;
    if ( beer!==undefined){
      console.log('entro',beer.beer.name)
    }

    return(
        <div>
          <Navbars/>

          <Row>
            <Col xs={4}>
            </Col>
            <Col xs={4}>
              {
                beer.length!==0?
                  <Card className="mt-5" style={{ width: '28rem' }}>
                    <Card.Img variant="top"  className="img"  src={beer.beer.image_url} />
                    <Card.Body>
                      <Card.Title>{beer.beer.name}</Card.Title>
                      <ListGroup className="list-group-flush">
                        <ListGroupItem><h6>{beer.beer.first_brewed}</h6></ListGroupItem>ListGroupItem>
                        <ListGroupItem><p className="little">{beer.beer.description}</p></ListGroupItem>
                        <ListGroupItem><h6>{beer.beer.tagline}</h6></ListGroupItem>
                        <ListGroupItem><p>{beer.beer.contributed_by}</p></ListGroupItem>
                      </ListGroup>
                    </Card.Body>
                  </Card>
                  :""
              }

            </Col>
            <Col xs={4}>
            </Col>
          </Row>


        </div>
      )
    }
}

export default SingleBeer