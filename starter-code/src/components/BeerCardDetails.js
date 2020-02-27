import React, {Component} from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import BeersServices from '../services/beer.services'



class BeerCardDetails extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            beers: {
            name: "",
            image_url: "",
            tagline: "",
            first_brewed: "",
            attenuation_level: "",
            description: "",
            contributed_by: ""
            }
        }
        this.services = new BeersServices()
    }

    componentDidMount = () => this.getBeersDetails()

    getBeersDetails = () => {
        this.services.getBeersDetails(this.props.match.params.id)
            .then(thebeer => this.setState({ beers: thebeer }))
            .catch(err => console.log(err))
    }

    render() {


    return (
        <Col md={12}>
            <Card className="card-beer">
                
                <Card.Img variant="top" src={this.state.image_url} />
                <Card.Body>
                    <Card.Title>{this.state.name}</Card.Title>
                    <Card.Text>{this.state.tagline}</Card.Text>
                    <Card.Text>{this.state.first_brewed}</Card.Text>
                    <Card.Text> {this.state.attenuation_level}</Card.Text>
                    <Card.Text> {this.state.description}</Card.Text>
                    <Card.Text>Create by: {this.state.contributed_by}</Card.Text>
                    <hr></hr>
                </Card.Body>
            
            </Card>
        </Col>
    )
}
    }


 
export default BeerCardDetails