import React from 'react'
import { Card } from 'react-bootstrap';

export default function BeerCard(props) {

    const {image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by} = props.beer

    return (
        <Card className="beer-details-card">
          <Card.Img className="beer-details-img" variant="top" src={image_url} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {tagline}
            </Card.Text>
            <Card.Text>
              {first_brewed}
            </Card.Text>
            <Card.Text>
              {attenuation_level}
            </Card.Text>
            <Card.Text>
              {description}
            </Card.Text>
            <Card.Text>
              {contributed_by}
            </Card.Text>
          </Card.Body>
        </Card>
    )
}
