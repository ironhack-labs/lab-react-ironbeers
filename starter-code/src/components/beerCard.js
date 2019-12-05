import React from "react"
import { Link } from "react-router-dom";
import { Container, Row, Col} from "react-bootstrap";

const beerCard = (props) => {
    return (
      <Col md={3}>
        <article>
          <Link to={props._id}>{props.name}</Link>
          <img src={props.image_url} alt={props.name} />
          <p>{props.tagline}</p>
        </article>
      </Col>
    );

}
export default beerCard