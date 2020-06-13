import React from 'react';
// import logo from './logo.svg';
// import './../App.css';

// DATA
import axios from 'axios';

// STYLE and COMPONENTS
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

class Detail extends React.Component {

    state = {
        beer: null,
        loading: true
    }

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/' + this.props.match.params.id).then((response) => {
            this.setState({
                beer: response.data,
                loading: false
            })
        })
    }


    render() {

        if (this.state.loading) {
            return <div>Loading…</div>
        }
        return (
            <div>
                <Container>
                    <h1>{this.state.beer.name}</h1>
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

export default Detail;
