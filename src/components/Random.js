import React from 'react';
// import logo from './logo.svg';
// import './../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'

class Random extends React.Component {

    state = {
        dataArr: []
    }
    render() {
        return (
            <div>
                <Container>
                <h1>NAME OF RANDOM BEER</h1>
                    <Row>
                        <Col>1 of 1</Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Random;
