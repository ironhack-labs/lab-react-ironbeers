import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledCard = styled.div`
  padding: 20px 0;
  border-radius: 10px;
  margin: 0 0 20px 0;
  border: solid 1px #f2f2f2;
  -webkit-box-shadow: 2px 2px 5px 0 rgba(72, 72, 72, 0.2);
  box-shadow: 2px 2px 5px 0 rgba(72, 72, 72, 0.2);
  .img {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    img {
      max-height: 180px;
    }
  }
  .details {
    .author {
      color: #0a7a06;
    }
  }
`;

export const ItemCard = props => {
  return (
    <>
      <StyledCard>
        <Col xs={12} lg={4}>
          <Row>
            <Col className="img" xs={4}>
              <Image fluid src={props.imgSrc} title={props.name} />
            </Col>
            <Col className="details" xs={8}>
              <h3>{props.name}</h3>
              <p>{props.tag}</p>
              <p className="author">
                <b>Created by: </b>
                {props.author}
              </p>
              <Link to={`/beers/${props.id}`}>READ MORE </Link>
            </Col>
          </Row>
        </Col>
      </StyledCard>
    </>
  );
};
