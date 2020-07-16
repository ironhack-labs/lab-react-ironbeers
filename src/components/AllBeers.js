import React, {Component} from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

class AllBeers extends Component {
    constructor (){
        super ()
        this.state = {
            birras: []
        }
    }






    componentDidMount() {

        axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
        .then(response => { 
            this.setState({birras: response.data})
        

        })

    }


    render () {
        return (
        
    <div>
       <Link to={`/BirraRandom`} className="btn btn-dark btn-block btn-sm">Una birra Random</Link>
       <Link to={`/NewBirra`} className="btn btn-dark btn-block btn-sm">Añade una nueva birra</Link>
       
       {this.state.birras.map(elm => 
       
       <Container>
       <Row>
       <Col>
       <img style={{width: 100}} src={elm.image_url} alt="fotos de birras"/>
       </Col>
       <Col>
       <div>
       <p>{elm._id}</p>
       <p>{elm.name}</p>
       <p>{elm.tagline}</p>
       <p>{elm.constributed_by}</p>
       <Link to={`/Onebirra/${elm._id}`} className="btn btn-dark btn-block btn-sm">Ver detalles</Link>
       </div>
       </Col>
       </Row>
       </Container>
       
       )}

        
    </div>

       )
    }
}

export default AllBeers