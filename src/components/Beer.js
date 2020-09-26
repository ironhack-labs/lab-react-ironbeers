import React from 'react';
import axios from 'axios';
import Header from './Header';
import {Container, Row} from 'react-bootstrap'

export default class Beer extends React.Component {

    state = {
        beer: null
    }


    componentDidMount() {
        let beerId = this.props.match.params.id;
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`).then(beer => {
            this.setState({
                beer: beer.data
            })
        })
    }

    render() {
        const beer = this.state.beer;
        if (!beer) { return <></> }
        return (

            <div>
                <Header />
                <Container style={{'max-width': '800px'}} className='d-flex flex-column align-items-center mx-auto mt-3' >
                        <Row className='mx-auto justify-content-center'>
                            <img src={beer.image_url} alt="" className='col-6'/>
                        </Row>
                        <Row className='justify-content-center align-items-center'>
                            <h4 className='col-6'>{beer.name}</h4>
                            <h6 className='col-6 text-muted'>{beer.attenuation_level}</h6>
                            <h6 className='col-6 text-muted'>{beer.tagline}</h6>
                            <h5  className='col-6'>{beer.first_brewed}</h5   >
                            <p className='col-12' style={{'text-align': 'left'}}>{beer.description}</p>
                        </Row>
                            <h5>Created By: {beer.contributed_by}</h5>
                        
                    </Container>

            </div>
        )
    }
}
