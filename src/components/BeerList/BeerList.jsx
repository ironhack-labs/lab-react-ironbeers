import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BeerList = ({ beers }) => {

    return (
        <>
            {beers.map(beer => {
                return <Col md={{ span: 4, offset: 3}} key={beer._id}>  
                    <hr></hr>
                    <img style={{ width: '10%' }} src={beer.image_url}></img>
                    <Link to={`/${beer._id}`}><h3>{beer.name}</h3></Link>
                    <p>{beer.tagline}</p>
                    <p>{beer.contibuted_by}</p>


                </Col>
            })}
        </>
    )
        
}

export default BeerList