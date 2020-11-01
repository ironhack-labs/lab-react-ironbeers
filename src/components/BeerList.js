import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BeerSearch from './BeerSearch';
import Header from './Header';
import { Card } from 'react-bootstrap';

function BeerList(props) {
  return (
    <div>
      <Header />
      {
        props.beers.map((beer) => {
        return (
          <div key={beer._id}>
            <Card style={{ width: '18rem' }}>
              <Card.Img className="images" variant="top" src={beer.image_url} />
              <Card.Body>
                <Link
                  style={{ textDecoration: 'none', color: 'black' }}
                  to={`/beer/${beer._id}`}
                >
                  <Card.Title>{beer.name}</Card.Title>
                </Link>
                <Card.Text>
                  <p>{beer.tagline}</p>
                  <p>Created by: {beer.contributed_by}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default withRouter(BeerList);
