import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledSection = styled.div`
  padding: 40px 0;
  border-radius: 10px;
  margin: 0 0 20px 0;
  border: solid 1px #f2f2f2;
  -webkit-box-shadow: 2px 2px 5px 0 rgba(72, 72, 72, 0.2);
  box-shadow: 2px 2px 5px 0 rgba(72, 72, 72, 0.2);
  .img,
  .details {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: stretch;
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
  }

  @media (min-width: 992px) {
    border: 0px;
    margin: 0 -15px;
    border-radius: 0px;
    -webkit-box-shadow: none;
    box-shadow: none;
    &:nth-child(even) {
      background: #f1f1f1;
      .row {
        display: flex;
        flex-flow: row-reverse nowrap;
      }
    }
  }
`;

export const SectionHome = props => {
  return (
    <StyledSection>
      <Col xs={12}>
        <Row>
          <Col className="img" xs={12} lg={6}>
            <Image fluid src={props.imgSrc} title={props.imgTitle} />
          </Col>
          <Col className="details" xs={12} lg={6}>
            <h2>{props.sectionTitle}</h2>
            <p>{props.sectionDescription}</p>
            <Link to={props.sectionLink}>{props.sectionC2a}</Link>
          </Col>
        </Row>
      </Col>
    </StyledSection>
  );
};
