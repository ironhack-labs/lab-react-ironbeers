import React from 'react';
// import logo from './logo.svg';
import './../App.css';

// DATA
import axios from 'axios';

// STYLE and COMPONENTS
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Beers extends React.Component {

    state = {
        beersArr: []
    }

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers').then((resp) => {
            this.setState({
                beersArr: resp.data
            })
        })
    }

    render() {
        let imgUrl = "http://10kbrew.com/wp-content/uploads/2019/02/giphy.gif"

        return (
            <div>
                <Container fluid>
                    <h1 className="sr-only">List of all beers</h1>        
                        {this.state.beersArr.length > 0 ?
                            this.state.beersArr.map(beer =>
                                <Link to={"/detail/" + beer._id} key={beer._id}>
                                <Row className="mb-4">
                                    <Col xs={3} className="to-the-right"><img src={beer.image_url} alt={beer.name} className="img-fluid img-max-width" /></Col>
                                    <Col xs={9}>
                                        <h2>{beer.name}</h2>
                                        <h3>{beer.tagline}</h3>
                                        <p><strong>Contributed by:</strong> {beer.contributed_by}</p>
                                    </Col>
                                    </Row>
                                    <hr></hr>
                                </Link>
                            ) :
                            <img src={imgUrl} alt="Draft beer like Homer"></img>
                        }
                </Container>
            </div>
        );
    }
}

export default Beers;


{/* <div>{this.state.beersArr.length > 0 ?
                    this.state.beersArr.map(beer => <ul className="list-unstyled" key={beer._id}><li><Link to={"/detail/" + beer._id}>
                        {beer.name}</Link></li></ul>) :
                    <img src={imgUrl} alt="Draft beer like Homer"></img>
                }</div> */}