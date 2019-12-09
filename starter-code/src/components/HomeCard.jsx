import React from 'react'
import Card from "react-bootstrap/Card";

const HomeCard = props => {

  const handleRedirect = () => {
    window.location.assign(props.url);
  }


  return (
    <Card style={{cursor: "pointer"}} onClick={handleRedirect}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.body}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default HomeCard
