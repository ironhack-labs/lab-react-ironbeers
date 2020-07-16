import React, {Component} from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

class RandomBeer extends Component {
    constructor (){
        super ()
        this.state = {
            details: []
        }
    }

componentDidMount = () => {



    axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
    .then(response => { 
        console.log(response)
        this.setState({details: response.data})
    

    })
   
}

    render () {


        return (
            <>
           

           <Container as="main">

                    

                    <Row>
                        <Col md={{ span: 5, offset: 1 }}>
                            <h1><b>Nombre:</b> {this.state.details.name}</h1>
                            <hr></hr>
                            <p><b>Tag:</b> {this.state.details.tagline}</p>
                            <p><b>first brewed:</b> {this.state.details.first_brewed}</p>
                            <p><b>Attenuation Level:</b> {this.state.details.attenuation_level}</p>
                            <p><b>Description:</b> {this.state.details.description}</p>
                            <p><b>Contributed by:</b> {this.state.details.contributed_by}</p>
                            <hr></hr>
                            <Link className="btn btn-dark btn-md" to='/Birras'>Volver</Link>
                        </Col>
                        <Col md={{ span: 4, offset: 1 }}>
                            <img style={{width:100}}src={this.state.details.image_url} alt="foto de la birra" />
                        </Col>
                    </Row>

                </Container>


            </>
        )
    }
}

export default RandomBeer