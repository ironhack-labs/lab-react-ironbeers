import React from 'react'
import { Card } from 'react-bootstrap';
import Nav from './Nav'
import {Link} from 'react-router-dom'

export default function BeerList(props) {
  return (
    <div className="under-nav">
        <Nav/>
        <div>
        <input className="search-input" type="text" onChange={props.handleSearch} placeholder="SEARCH BEERS"/>
        {props.beers.map((beer, i) => {
        return (
            <Card className="beer-card" key={beer + i}>
            <Card.Img className="beer-img" variant="top" src={beer.image_url} />
            <Card.Body>
            <Link to={`/beers/${beer._id}`}><Card.Title className="beer-title">{beer.name}</Card.Title></Link>
              <Card.Text>
                {beer.tagline}
              </Card.Text>
              {beer.contributed_by.includes('<') && <Card.Text className="beer-created">
                created by {beer.contributed_by.split('<')[0]}
              </Card.Text>}
              {!beer.contributed_by.includes('<') && <Card.Text className="beer-created">
                created by {beer.contributed_by}
              </Card.Text>}
            </Card.Body>
          </Card>
        );
      })}
      </div>
    </div>
  );
}

