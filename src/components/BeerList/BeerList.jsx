import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import BeerCard from '../BeerCard/BeerCard'

const BeerList = ({ beers }) => {

    return (
        <Row>
            {beers.map(beer => {
                return <Col md={{ span: 6, offset: 2}} key={beer._id}>  
                    <hr></hr>
                    <img style={{ width: '10%' }} src={beer.image_url}></img>
                    <Link to={`/beerD/${beer._id}`}><h3>{beer.name}</h3></Link>
                    <p>{beer.tagline}</p>
                    <p>{beer.contibuted_by}</p>


                </Col>
            })}
        </Row>
    )
        
}

export default BeerList