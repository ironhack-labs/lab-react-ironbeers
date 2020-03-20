import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components';

const StyledImg = styled(Card.Img )`
  width: 30%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
const StyledCard = styled(Card)`
  padding-top: 2em;
`;
const StyledCardTitle = styled(Card.Title)`
  font-size: 1.8em;
`;
const Contributed = styled.div({
  color: 'grey'
})
const Attenuation = styled.div({
  color: 'grey',
  fontSize: '1.5em'
});
const Tagline = styled.div({
  color: 'grey',
  fontSize: '1em'
});
const Brewed = styled.div({
  fontWeight: 'bold'
});

const BeerDetail = (props) => {
  const {image_url, name, tagline, attenuation_level, first_brewed, description, contributed_by} = props.beer;

  return(
      <StyledCard>
        <StyledImg src={image_url} />
        <Card.Body>
          <Row>
            <Col xs="8" lg="8">
              <StyledCardTitle className="text-left">{name}</StyledCardTitle>
            </Col>
            <Col xs="4" lg="4">
              <Attenuation className="text-right">{attenuation_level}</Attenuation>
            </Col>
          </Row>
          <Row>
            <Col xs="8" lg="8">
              <Tagline className="text-left" >{tagline}</Tagline>
            </Col>
            <Col xs="4" lg="4">
              <Brewed className="text-right">{first_brewed}</Brewed>
            </Col>
          </Row>
          <Card.Text className="text-left pt-4">
            {description}
          </Card.Text>
          <Contributed className="text-left">
            {contributed_by}
          </Contributed>
        </Card.Body>
      </StyledCard>
  );
}

export default BeerDetail;