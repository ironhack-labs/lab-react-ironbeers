import { Container, Row, Col } from 'react-bootstrap'

const ListBeerPage = () => {

    return (
        <Container>
            <Row>
                <Col md={{ span: 8, offset: 2 }} className="ColIndexBeers">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequuntur blanditiis quo repudiandae odio fugiat doloribus nihil eaque animi expedita vero?</p>
                </Col>
            </Row>
        </Container>
    )
}


export default ListBeerPage