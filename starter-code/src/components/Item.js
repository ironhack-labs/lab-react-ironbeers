import React from "react";
import { Row, Col, Image, Button } from "react-bootstrap";
import styled from "styled-components";

const StyledItem = styled.div`
  padding: 40px 0;
  .img,
  .details {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    img {
      width: auto;
      max-height: 300px;
    }
    h2 {
      position: relative;
      &:before {
        content: "";
        width: 50px;
        height: 2px;
        background: #0a7a06;
        position: absolute;
        left: 0px;
        bottom: -15px;
      }
    }
    .header {
      width: 100%;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
    }
    .name {
    }
    .tag {
      font-weight: bold;
    }
    .level {
      padding-top: 40px;
      font-size: 25px;
      color: #c4c4c4;
    }
    .date {
      font-size: 8px;
    }
    .author {
      color: #0a7a06;
    }
  }
  .img {
    justify-content: center;
    align-items: center;
  }
`;

export const Item = props => {
  return (
    <>
      <StyledItem>
        <Col xs={12}>
          <Row>
            <Col className="img" xs={12} lg={6}>
              <Image fluid src={props.src} title={props.name} />
            </Col>
            <Col className="details" xs={12} lg={6}>
              <Row className="header">
                <Col xs={10}>
                  <h2 className="name">{props.name}</h2>
                  <p className="tag">{props.tag}</p>
                </Col>
                <Col xs={2}>
                  <p className="level">{props.level}</p>
                  <p className="date">{props.date}</p>
                </Col>
              </Row>
              <p>{props.description}</p>
              <p className="author">
                <b>{props.author}</b>
              </p>
            </Col>
          </Row>
        </Col>
      </StyledItem>
    </>
  );
};
