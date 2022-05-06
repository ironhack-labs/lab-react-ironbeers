import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const BeersList = ({ beers }) => {

    return (
        <Row className='rowList'>
            {beers.map(beer => {
                return <Col md= {{span:4, offset:2}} key={beer._id} >
                    <div className='list'>
                        <img src={beer.image_url} alt="" />
                        <Link to={`/${beer._id}`}><h1>{beer.name}</h1></Link>                  
                        <p>{beer.tagline}</p>
                        <p>{beer.contributed_by}</p>
                        <hr />
                    </div>
                </Col>
            })}
        </Row>
    )
}

export default BeersList