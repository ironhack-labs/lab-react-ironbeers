import { Col, Row, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './Beers.css'
import Header from './Header'

const Beers = props => {
    console.log(props)
    return (
        <>
        <Header/>
        <Container>
            {props.beers.map(elm => {
                return (
                    <article>
                    <Row className="align-items-center">
                        <Col xs={4}>
                            <img src={elm.image_url} alt='beer' className='beer-img' />
                        </Col>
                        <Col xs={8}>
                            <Link to={elm._id}><h4>{elm.name}</h4></Link>
                            <p className="info">{elm.tagline}</p>
                            <small><strong>Contributed by:</strong>{elm.contributed_by}</small>
                        </Col>
                    </Row>
                    <hr />
                    </article>
                )
            })}
            </Container>
            </>
    )
}

export default Beers