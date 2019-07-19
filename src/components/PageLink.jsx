import React from "react";

import { Row, Col, Container } from "reactstrap";

import { Link } from 'react-router-dom';

function PageLink(props) {
  return (
    <div className="PageLink">
    <Link className="text-decoration-none link-text" to={props.linkTo}>
    <div className="card  mb-3 ">
    <img src={props.picUrl} className="card-img-top img-cover" alt="pictureOfBeer" height="200" />
    <div className="card-body link-text">
      <h5 className="card-title">{props.heading}</h5>
      <p className="card-text">{props.content}</p>
      <p className="card-text"></p>
    </div>
    </div>
    </Link>
    </div>
  )
}

export default PageLink;