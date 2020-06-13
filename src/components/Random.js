import React from 'react';
// import logo from './logo.svg';
// import './../App.css';

// DATA
import axios from 'axios';

// STYLE and COMPONENTS
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

// Random from LODASH
import _ from 'lodash';

class Random extends React.Component {

    state = {
        beer: null,
        loading: true
    }

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/').then((response) => {
            let randomBeer = _.sample(response.data)
            
            this.setState({
                beer: randomBeer,
                loading: false
            })
        })
    }

    render() {

        if (this.state.loading) {
            return <div>Picking a random beer for you…</div>
        }
        return (
            <div>
                <Container>
                    <h1>Your random choice: {this.state.beer.name}</h1>
                    <Row>
                        <Col>Description: {this.state.beer.description}</Col>
                    </Row>
                    <Row className="mt-2">
                        <Col>Goes best with: {this.state.beer.food_pairing}</Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Random;
