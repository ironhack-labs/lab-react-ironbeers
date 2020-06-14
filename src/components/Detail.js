import React from 'react';
// import logo from './logo.svg';
// import './../App.css';

// DATA
import axios from 'axios';

// STYLE and COMPONENTS
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
                    <Row className="mb-3">
                        <Col xs={3} className="to-the-right"><img src={this.state.beer.image_url} alt={this.state.beer.name} className="img-fluid img-max-width" /></Col>
                        <Col xs={9}><strong>Description:</strong> {this.state.beer.description}
                            <br /><strong>Goes best with:</strong> {this.state.beer.food_pairing}
                            <br /><strong>Tagline:</strong> {this.state.beer.tagline}
                            <br /><strong>First brewed:</strong> {this.state.beer.first_brewed}
                            <br /><strong>Attenuation level:</strong> {this.state.beer.attenuation_level}
                            <br /><strong>Contributed by:</strong> {this.state.beer.contributed_by}
                        </Col>
                    </Row>
                <Link to="/beers"><Button variant="danger">Go back to all beers</Button></Link>
                </Container>
            </div>
        );
    }
}

export default Detail;
