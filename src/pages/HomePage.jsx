import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.css';

function HomePage() {
  return (
    <div className="flex-center margin-top">
      <ListGroup horizontal>
        <ListGroup.Item>
          <Link to={'/beers'}>All Beers</Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to={'/random-beer'}>Random Beer</Link>
        </ListGroup.Item>
        <ListGroup.Item>
          {' '}
          <Link to={'/new-beer'}>New Beer</Link>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default HomePage;
