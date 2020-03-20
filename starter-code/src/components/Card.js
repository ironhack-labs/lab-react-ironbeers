import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import styled from "styled-components";

const StyledCard = styled.div`
  background: red;
`;

export const ItemCard = props => {
  return (
    <>
      <StyledCard>
        {/* <Col xs={12} lg={4}>
        <Row>
          <Col className="img" xs={6}>
            <Image fluid src={props.imgSrc} title={props.imgTitle} />
          </Col>
          <Col className="details" xs={6}>
            <h2>{props.sectionTitle}</h2>
            <p>{props.sectionDescription}</p>
          </Col>
        </Row>
      </Col> */}
        <p>hola</p>
      </StyledCard>
    </>
  );
};
