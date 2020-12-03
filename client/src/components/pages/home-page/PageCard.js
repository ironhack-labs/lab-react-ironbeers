import { Row, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './PageCard.css'


const PageCard = ({ title, image, description, path }) => {
  return (
    <Link to={ path } className='link'>
      <Row>
        <Card className='home-card'>
          <Card.Img className='home-image' variant="top" src={ image } />
          <Card.Body>
            <Card.Title><h1>{ title }</h1></Card.Title>
            <Card.Text>{ description }</Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Link>
  )
}

export default PageCard