import {Container} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Navbar, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom'

function NavigationBar () {
    return (
      <Navbar bg="primary" variant="dark">
        <Link to='/'>
          <Card.Link as="span">🏠</Card.Link>
        </Link>
      </Navbar>
    )
}


export default NavigationBar