

import { Col, Row, ListGroup } from "react-bootstrap"

const OneBeer = ({myBeer}) => {

    return (

                    <Row>
                        
                        <Col md={{ span: 4 }}>
                            <div className="detailImg">
                                <img src={myBeer.image_url} alt={myBeer.name} />
                            </div>
                        </Col>

                        <Col md={{ span: 8 }}>
                            <ListGroup>
                                <ListGroup.Item>Nombre: {myBeer.name}</ListGroup.Item>
                                <ListGroup.Item>Eslogan: {myBeer.tagline}</ListGroup.Item>
                                <ListGroup.Item>Descripción: {myBeer.description}</ListGroup.Item>
                                <ListGroup.Item>Recomendaciones: {myBeer.brewers_tips}</ListGroup.Item>
                                <ListGroup.Item>Atenuación: {myBeer.attenuation_level}</ListGroup.Item>
                                <ListGroup.Item>Creada: {myBeer.first_brewed}</ListGroup.Item>
                                <ListGroup.Item>Añadida por: {myBeer.contributed_by}</ListGroup.Item>  
                            </ListGroup>
                        </Col>
                    </Row>                         
    )
    
    
}

export default OneBeer