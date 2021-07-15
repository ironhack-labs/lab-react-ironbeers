import { Card, ListGroupItem, ListGroup } from "react-bootstrap"
import React, { Component } from 'react';
import BeerService from "../../services/services";


class SelectedBeer extends Component {

    constructor() {

        super()
        this.state = {

            birra: undefined
        }
        this.BeerService = new BeerService()

        
    }

    getSelectedBeer = () => {

        const { beer_id } = this.props.match.params
        //aquí es donde relacionamos el id de cada cerveza con la vista y con la que selecciona de la api, 
        // recogiendo el id que mandamos por la URL como param en el objeto global props/match


        this.BeerService
            .getSelectedBeer(beer_id)
            .then(response => this.setState({ birra: response.data }))
            //accedemos a sus propiedades a través del response, en esta caso birra
            .catch(err => console.log(err));
        console.log(this.state.birra)
        
        
    }


    componentDidMount = () => {
        this.getSelectedBeer()
    }


    render() {
        return (
            !this.state.birra
                ?
                <h3>MARCHANDO LA BIRRITA...</h3>
                :
                (<>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                        <Card.Body>
                            <Card.Title>{this.state.birra.name}</Card.Title>
                            <Card.Text>
                                {this.state.birra.description}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Cras justo odio</ListGroupItem>
                            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                            <ListGroupItem>Vestibulum at eros</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </>)
        )
    }
}

export default SelectedBeer