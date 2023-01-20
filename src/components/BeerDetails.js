import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Header from './Header';

export default function BeerDetails({beerList}) {

    const {beerId} = useParams();

    const beer = beerList.find(BeerDetails => {
        return BeerDetails._id === beerId
    })

    return (
      <>
        <Header />
        <Card border="light" key={beer._id} style={{ width: "30%", margin: "auto", marginTop: "50px", padding: "5px" }}>  
            <Card.Img src={beer.image_url} alt="" style={{ margin: "auto", width: "auto", height: "250px"}} />
            <Card.Body>
                <Row>
                    <Col xs lg="9"><h2>{beer.name}</h2></Col>
                    <Col xs lg="3"><h2 style={{color: "grey", textAlign: "end"}}>{beer.attenuation_level}</h2></Col>
                </Row>
                <Row>
                    <Col xs lg="9"><h5 style={{color: "grey"}}>{beer.tagline}</h5></Col>
                    <Col xs lg="3" style={{textAlign: "end"}}><b>{beer.first_brewed}</b></Col>
                </Row>
                <p>{beer.description}</p>
                <p style={{color: "grey"}}><b>{beer.contributed_by}</b></p>
            </Card.Body>    
        </Card>
      </>
      
    );
  }
  